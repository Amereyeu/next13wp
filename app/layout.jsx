// "use client";

import { ApolloWrapper } from "../lib/apollo-wrapper";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

import "./styles.scss";

// import { useEffect, useState } from "react";
import SecondaryNavigation from "./components/Navigation/SecondaryNavigation";

import SessionProvider from "./providers/sessionProvider";
import { getServerSession } from "next-auth";
import { ThemeProvider } from "@/context/ThemeContext";

export default async function RootLayout({ children }) {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || "light"
  // );

  // const handleThemeChange = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  // useEffect(() => {
  //   localStorage.setItem("theme", JSON.stringify(theme));
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* <Navigation handleThemeChange={handleThemeChange} theme={theme} /> */}
          <Navigation />
          <SessionProvider session={session}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </SessionProvider>
          <Footer />
          <SecondaryNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}

