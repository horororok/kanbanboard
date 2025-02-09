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

  return {
    board,
    addColumn,
    deleteColumn,
    updateProjectTitle,
  };
};
