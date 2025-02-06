import { useTheme } from "styled-components";

const Nav = ({ handleDarkMode }) => {
  const theme = useTheme();
  return (
    <>
      <div>내브바</div>
      <button onClick={handleDarkMode}>
        {theme.mode === "dark" ? "dark" : "light"}
      </button>
    </>
  );
};

export default Nav;
