import { useState } from 'react';

import ThemeContext from './service.ts';
import { ChildrenType } from './types.ts';

export const ThemeProvider: React.FC<ChildrenType> = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
