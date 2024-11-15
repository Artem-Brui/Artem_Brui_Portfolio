import Header from "./components/Header";
import "./App.scss";
import useTheme from "./customHooks/useTheme.ts";
import classNames from "classnames";
import Home from "./components/Home";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("page", theme)}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
