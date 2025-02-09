import { useBoard } from "./useBoard";
import { useDragAndDrop } from "./useDragAndDrop";

export const useBoardActions = () => {
  const {
    board,
    addColumn,
    deleteColumn,
    updateProjectTitle,
    updateColumnTitle,
    addCard,
    moveCard,
    deleteCard,
    updateCard,
  } = useBoard();

  const {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
    handleDragLeave,
  } = useDragAndDrop();

  const handleColumnAdd = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      columnTitle: "새 열",
      cards: [],
    };
    addColumn(newColumn);
  };

  const handleCardMove = (e, targetColumnId) => {
    const dropResult = handleDrop(e, targetColumnId);
    if (dropResult) {
      const { cardId, sourceColumnId, targetColumnId, targetIndex } =
        dropResult;
      moveCard(cardId, sourceColumnId, targetColumnId, targetIndex);
    }
  };

  return {
    board,
    actions: {
      handleColumnAdd,
      handleCardMove,
      updateProjectTitle,
      updateColumnTitle,
      deleteColumn,
      addCard,
      deleteCard,
      updateCard,
    },
    dragHandlers: {
      handleDragStart,
      handleDragEnd,
      handleDragOver,
      handleDragLeave,
    },
  };
};
