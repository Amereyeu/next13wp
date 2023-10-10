"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { GiSun, GiMoon } from "react-icons/gi";

// import data from "../data/nav.json";

function Navigation() {
  const [isShrunk, setShrunk] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [navigationData] = useState(data);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [isCzech, setIsCzech] = useState(false);

  // const toggleLang = () => {
  //   setIsCzech(!isCzech);
  // };

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
          {/* {navigationData.map((navItem, i) => (
            <Link
              to={navItem.to}
              key={i}
              className="navigation__menu__item"
              onClick={toggleNavigation}>
              <button
                className={`switch ${isShrunk ? "small" : ""}`}
                aria-label={navItem.name}>
                {lg === "EN" ? navItem.name : navItem.translation}
              </button>
            </Link>
          ))} */}

          <Link
            href="/"
            className="navigation__menu__item"
            onClick={toggleNavigation}>
            Home
          </Link>
          <Link
            href="/blog"
            className="navigation__menu__item"
            onClick={toggleNavigation}>
            Blog
          </Link>
          <Link
            href="/about"
            className="navigation__menu__item"
            onClick={toggleNavigation}>
            About
          </Link>
          <Link
            href="/contact"
            className="navigation__menu__item"
            onClick={toggleNavigation}>
            Contact
          </Link>

          {/* <div className="switch-wrap" onClick={toggleNavigation}>
            <div
              onClick={handleThemeChange}
              aria-label="Theme Switch"
              className={`switch ${isShrunk ? "small" : ""}`}>
              {theme === "light" ? <GiMoon /> : <GiSun />}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
