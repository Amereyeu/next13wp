"use client";

import { ThemeContext } from "@/context/ThemeContext";
import moon from "@/public/img/moon.svg";
import sun from "@/public/img/sun.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import data from "@/data/nav.json";

export default function Navigation() {
  const { theme, setTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  const [isShrunk, setShrunk] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navigationData] = useState(data);
  const pathname = usePathname();

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="navigation-container">
      <div className="navigation">
        <div
          className={`navigation__toggle ${isNavOpen ? "open" : ""}`}
          onClick={toggleNavigation}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navigation__menu ${isNavOpen ? "collapse" : ""}`}>
          {navigationData.map((navItem, i) => (
            <Link
              href={navItem.to}
              key={i}
              className="navigation__menu__item"
              onClick={toggleNavigation}>
              <button
                className={`switch ${isShrunk ? "small" : ""} ${
                  pathname === navItem.to ? "active" : ""
                }`}
                aria-label={navItem.name}>
                {navItem.name}
              </button>
            </Link>
          ))}

          <div className="switch-wrap" onClick={toggleNavigation}>
            <div
              onClick={handleThemeChange}
              aria-label="Theme Switch"
              className={`switch ${isShrunk ? "small" : ""}`}>
              {theme === "light" ? <Image src={moon} /> : <Image src={sun} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
