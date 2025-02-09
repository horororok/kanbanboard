import { useState, useEffect } from "react";
import { localStorageHelper } from "../utils/localStorage";

export const useLocalStorage = (initialData) => {
  const [boardData, setBoardData] = useState(() => {
    const savedData = localStorageHelper.loadBoard();
    return savedData || initialData;
  });

  useEffect(() => {
    localStorageHelper.saveBoard(boardData);
  }, [boardData]);

  return [boardData, setBoardData];
};
