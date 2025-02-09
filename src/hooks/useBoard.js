import { DEFAULT_COLUMN_IDS, INITIAL_BOARD } from "../constants/board";
import { useLocalStorage } from "./useLocalStorage";

export const useBoard = () => {
  const [board, setBoard] = useLocalStorage(INITIAL_BOARD);

  const addColumn = (newColumn) => {
    setBoard((prev) => ({
      ...prev,
      columns: [...prev.columns, newColumn],
    }));
  };

  const deleteColumn = (columnId) => {
    // 기본 컬럼은 삭제 불가
    if (DEFAULT_COLUMN_IDS.includes(columnId)) {
      alert("기본 칼럼은 삭제할 수 없습니다.");
      return false;
    }

    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.filter((col) => col.id !== columnId),
    }));
    return true;
  };

  // 프로젝트 제목 수정
  const updateProjectTitle = (newTitle) => {
    setBoard((prev) => ({
      ...prev,
      projectTitle: newTitle,
    }));
  };

  // 칼럼 제목 수정
  const updateColumnTitle = (columnId, newTitle) => {
    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.map((col) =>
        col.id === columnId ? { ...col, columnTitle: newTitle } : col
      ),
    }));
  };

  // 카드 추가
  const addCard = (columnId, newCard) => {
    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.map((col) =>
        col.id === columnId ? { ...col, cards: [...col.cards, newCard] } : col
      ),
    }));
  };

  // 카드 수정
  const updateCard = (columnId, cardId, updateCard) => {
    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId ? { ...card, ...updateCard } : card
              ),
            }
          : col
      ),
    }));
  };

  // 카드 삭제
  const deleteCard = (columnId, cardId) => {
    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.map((col) =>
        col.id === columnId
          ? { ...col, cards: col.cards.filter((card) => card.id !== cardId) }
          : col
      ),
    }));
  };

  // 카드 이동(드래그를 통한)
  const moveCard = (cardId, sourceColumnId, targetColumnId, targetIndex) => {
    setBoard((prev) => {
      // 현재 컬럼과 카드 찾기
      const sourceColumn = prev.columns.find(
        (col) => col.id === sourceColumnId
      );
      const card = sourceColumn.cards.find((c) => c.id === cardId);

      // 같은 컬럼 내 이동인 경우
      if (sourceColumnId === targetColumnId) {
        return {
          ...prev,
          columns: prev.columns.map((col) => {
            if (col.id === sourceColumnId) {
              const newCards = [...col.cards];
              // 현재 카드의 인덱스 찾기
              const currentIndex = newCards.findIndex((c) => c.id === cardId);
              // 카드 제거 후 새 위치에 삽입
              newCards.splice(currentIndex, 1);
              newCards.splice(targetIndex, 0, card);
              return {
                ...col,
                cards: newCards,
              };
            }
            return col;
          }),
        };
      }

      // 다른 컬럼으로 이동하는 경우
      return {
        ...prev,
        columns: prev.columns.map((col) => {
          if (col.id === sourceColumnId) {
            return {
              ...col,
              cards: col.cards.filter((c) => c.id !== cardId),
            };
          }
          if (col.id === targetColumnId) {
            const newCards = [...col.cards];
            newCards.splice(targetIndex, 0, card);
            return {
              ...col,
              cards: newCards,
            };
          }
          return col;
        }),
      };
    });
  };

  return {
    board,
    addColumn,
    deleteColumn,
    updateProjectTitle,
    updateColumnTitle,
    addCard,
    updateCard,
    deleteCard,
    moveCard,
  };
};
