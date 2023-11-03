"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lightTheme, darkTheme }}>
      <main data-theme={`${theme}`}>{children}</main>
    </ThemeContext.Provider>
  );
};

