import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";
import classes from "../../styles/h.module.css";
import Link from "next/link";
import Platforms from "../UI/Platforms";
import Solutions from "../UI/Solutions";
import Dpod from "../UI/Dpod";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },

  {
    path: "#Platforms",
    display: "Platforms",
  },
  {
    path: "#Solutions",
    display: "Solutions",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  };

  function renderNavLink(item, index) {
    if (item.path === "#Platforms") {
      return <Platforms key={index} />;
    } else if (item.path === "#Solutions") {
      return <Solutions key={index} />;
    } else {
      return (
        <Link href={item.path} key={index}>
          {item.display}
        </Link>
      );
    }
  }
  

  return (
    <header className={`${classes.headerContainer}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}></div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => renderNavLink(item, index))}
              <div className={`${classes.nav__right}`}>
              <Dpod />
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;