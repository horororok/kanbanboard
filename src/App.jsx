import { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Board from "./components/board/Board";
import Nav from "./components/nav/Nav";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode);
  };

  return (
    <ThemeProvider theme={{ ...theme, mode: isDarkMode ? "dark" : "light" }}>
      <GlobalStyle />
      <Container>
        <Nav handleDarkMode={handleDarkMode} />
        <Board />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
