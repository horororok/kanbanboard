import { useState } from "react";
import { ThemeProvider } from "styled-components";
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
      <Nav handleDarkMode={handleDarkMode} />
      <Board />
    </ThemeProvider>
  );
}

export default App;
