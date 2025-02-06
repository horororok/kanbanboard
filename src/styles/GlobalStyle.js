import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Regular.woff2') format(woff2),
    url('/font/Pretendard-Regular.woff') format(woff);
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Medium.woff2') format('woff2'),
         url('/font/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Bold.woff2') format('woff2'),
         url('/font/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: ${({ theme }) => theme.colors[theme.mode].body};
    color: ${({ theme }) => theme.colors[theme.mode].text};
    transition: all 0.3s ease;
  }

  /* button {
    cursor: pointer;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
    color: ${({ theme }) => theme.colors[theme.mode].text};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.hover[theme.mode]};
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  } */
`;
