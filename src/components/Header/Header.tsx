import useTheme from "../../customHooks/useTheme.ts";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => toggleTheme();

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </>
  );
};

export default Header;