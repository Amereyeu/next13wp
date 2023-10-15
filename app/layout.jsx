"use client";

import { ApolloWrapper } from "../lib/apollo-wrapper";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

import "./styles.scss";

import { useEffect, useState } from "react";
import SecondaryNavigation from "./components/Navigation/SecondaryNavigation";

import NextAuthSessionProvider from "./providers/sessionProvider";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <html lang="en">
      <body>
        <Navigation handleThemeChange={handleThemeChange} theme={theme} />
        <NextAuthSessionProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </NextAuthSessionProvider>
        <Footer />
        <SecondaryNavigation />
      </body>
    </html>
  );
}


