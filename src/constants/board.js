// 보드 관련 상수(칼럼 타입 등)

export const DEFAULT_COLUMNS = {
  TO_DO: {
    id: "todo",
    columnTitle: "시작 전",
  },
  IN_PROGRESS: {
    id: "in-progress",
    columnTitle: "진행 중",
  },
  DONE: {
    id: "done",
    columnTitle: "완료",
  },
};

// 기본 칼럼들의 id 배열
export const DEFAULT_COLUMN_IDS = Object.values(DEFAULT_COLUMNS).map(
  (col) => col.id
);

// 초기 보드 상태
export const INITIAL_BOARD = {
  projectTitle: "PROJECT No.1",
  columns: [
    {
      ...DEFAULT_COLUMNS.TO_DO,
      cards: [],
    },
    {
      ...DEFAULT_COLUMNS.IN_PROGRESS,
      cards: [],
    },
    {
      ...DEFAULT_COLUMNS.DONE,
      cards: [],
    },
  ],
};
