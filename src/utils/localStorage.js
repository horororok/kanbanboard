// 키값 관리
export const storageKeys = {
  BOARD_DATA: "boardData",
};

export const localStorageHelper = {
  saveBoard: (boardData) => {
    try {
      localStorage.setItem(storageKeys.BOARD_DATA, JSON.stringify(boardData));
    } catch (error) {
      console.error("board data를 저장하는 도중 에러 발생", error);
    }
  },

  loadBoard: () => {
    try {
      const savedData = localStorage.getItem(storageKeys.BOARD_DATA);
      return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
      console.error("board data를 로드하는 중 에러 발생", error);
      return null;
    }
  },

  clearBoard: () => {
    localStorage.removeItem(storageKeys.BOARD_DATA);
  },
};
