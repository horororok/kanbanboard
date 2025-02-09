import { useBoardActions } from "../../hooks/useBoardActions";
import BoardView from "./BoardView";

const Board = () => {
  const { board, actions, dragHandlers } = useBoardActions();

  return (
    <BoardView board={board} actions={actions} dragHandlers={dragHandlers} />
  );
};

export default Board;
