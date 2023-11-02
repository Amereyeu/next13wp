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
    // document.documentElement.setAttribute("data-theme", theme);
  };

  const darkTheme = () => {
    setTheme("dark");
    // localStorage.setItem("theme", JSON.stringify(theme)); 
    // document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lightTheme, darkTheme }}>
      <html data-theme={`${theme}`} className={`${theme} animate`}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
};

