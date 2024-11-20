import classNames from "classnames";

import "./App.scss";
import useTheme from "./customHooks/useTheme.ts";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Switcher from "./components/Switcher/Switcher.tsx";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("page", theme)}>
      <Header />
      <Switcher />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
