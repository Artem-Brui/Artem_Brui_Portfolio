import { useState } from "react";
import { Bootstrap, Bulma, Css, Express, Git, Html, Javascript, Mongodb, React, Redux, Sass, Typescript } from "../../components/SVGs/Icons.tsx";

import ThemeContext from "./service.ts";
import { ChildrenType } from "./types.ts";

export const ContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const colorLight = '#FFFFFF';
  const colorDark = '#292F36';
  const colorDarkPlus = '#1A1E23';
  const colorBrand = '#569cd6';
  const currentSkills = [
    {
      name: 'html',
      logo: Html,
      descreption: 'The foundation of any website, a markup language for structuring and displaying content.',
    },
    {
      name: 'css',
      logo: Css,
      descreption: 'A language for styling web pages, defining colors, fonts, spacing, and other visual elements.',
    },
    {
      name: 'bootstrap',
      logo: Bootstrap,
      descreption: 'A set of pre-designed styles and components to quickly create responsive and stylish web pages.',
    },
    {
      name: 'bulma',
      logo: Bulma,
      descreption: 'A lightweight CSS framework with elegant components that simplifies building modern websites.',
    },
    {
      name: 'sass',
      logo: Sass,
      descreption: 'An extension of CSS that adds variables, nesting, and other features to make styling easier and more organized.',
    },
    {
      name: 'javascript',
      logo: Javascript,
      descreption: 'A programming language that makes websites interactive (e.g., buttons, pop-ups).',
    },
    {
      name: 'git',
      logo: Git,
      descreption: 'A version control system for tracking and managing code changes, great for teamwork.',
    },
    {
      name: 'typescript',
      logo: Typescript,
      descreption: 'A "supercharged" version of JavaScript with type-checking to simplify development and reduce errors.',
    },
    {
      name: 'react',
      logo: React,
      descreption: 'A library for building interactive user interfaces using components.',
    },
    {
      name: 'redux',
      logo: Redux,
      descreption: 'A tool for managing application state, making it easier to work with data.',  
    },
    {
      name: 'express',
      logo: Express,
      descreption: 'A minimalist backend framework for building APIs and web applications on Node.js.',  
    },
    {
      name: 'mongodb',
      logo: Mongodb,
      descreption: 'A database where data is stored as JSON-like objects, perfect for modern applications.',  
    },
  ]

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colorLight, colorDark, colorDarkPlus, colorBrand, currentSkills }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
