export const mockData = {
  projectTitle: "Project No.1",
  columns: [
    {
      id: "1",
      title: "시작 전",
      cards: [],
    },
    {
      id: "2",
      title: "진행 중",
      cards: [
        {
          id: "1",
          description: "회원을 블랙리스트로 지정할 수 있는 기능을 제작합니다.",
          tags: ["관리자페이지"],
        },
        {
          id: "2",
          description: "DB 스키마 설계 및 ERD 작성",
          tags: [],
        },
      ],
    },
    {
      id: "3",
      title: "완료",
      cards: [
        {
          id: "1",
          description:
            "장바구니에 상품을 추가하고 수정, 삭제하는 기능이 포함된 컴포넌트를 제작합니다.",
          tags: ["사용자화면"],
        },
        {
          id: "2",
          description: "디자인시스템 2.1 버전로그를 작성합니다.",
          tags: ["문서화"],
        },
      ],
    },
  ],
};
