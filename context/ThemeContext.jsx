"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    // JSON.parse(localStorage.getItem("theme")) || "dark"
    "light"
  );

  const lightTheme = () => {
    setTheme("light");
    // localStorage.setItem("theme", JSON.stringify(theme));
  };

  const darkTheme = () => {
    setTheme("dark");
    // localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lightTheme, darkTheme }}>
      <html data-theme={`${theme}`}>{children}</html>
    </ThemeContext.Provider>
  );
};

