// 테마 관리

export const theme = {
  colors: {
    light: {
      body: "#F8F8F8",
      text: "#3A3A3A",
      border: "#E0E0E0",
      primary: "#007AFF", // 주요 액션/브랜드 컬러
      secondary: "#6E6E6E", // 보조 텍스트
      success: "#34C759", // 성공/완료 상태
      error: "#FF3B30", // 에러/경고
      background: {
        primary: "#FFFFFF", // 주 배경
        secondary: "#F8F8F8", // 보조 배경
        tertiary: "#F1F1F1", // 강조 배경
      },
      element: {
        button: "#F1F1F1", // 버튼 기본
        buttonHover: "#BFBFBF", // 버튼 호버
        input: "#FFFFFF", // 입력 필드
        card: "#FFFFFF", // 카드 배경
      },
    },
    dark: {
      body: "#363537",
      text: "#FAFAFA",
      border: "#505050",
      primary: "#339AF0", // 다크모드용 주요 컬러
      secondary: "#ACACAC", // 다크모드용 보조 텍스트
      success: "#32D74B", // 다크모드용 성공 상태
      error: "#FF453A", // 다크모드용 에러
      background: {
        primary: "#262626", // 다크모드 주 배경
        secondary: "#363537", // 다크모드 보조 배경
        tertiary: "#404040", // 다크모드 강조 배경
      },
      element: {
        button: "#6B6B6B", // 다크모드 버튼
        buttonHover: "#5A5A5A", // 다크모드 버튼 호버
        input: "#3A3A3A", // 다크모드 입력 필드
        card: "#2B2B2B", // 다크모드 카드 배경
      },
    },
  },
  shadows: {
    light: "0 1px 3px rgba(0,0,0,0.1)",
    dark: "0 1px 3px rgba(0,0,0,0.2)",
  },
  hover: {
    light: "rgba(0, 0, 0, 0.03)",
    dark: "rgba(255, 255, 255, 0.03)",
  },
};
