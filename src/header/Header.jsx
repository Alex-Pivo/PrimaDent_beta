import style from "../css/header.module.css";
import "../css/header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ active, setModal }) {
  const [burgerActive, setBurgerActive] = useState(true);
  const location = useLocation();
  useEffect(() => {}, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleActive = () => {
    setModal(!active);
  };
  const nav = useNavigate();

  const aboutPersonal = (partList) => {
    if (location.pathname !== "/") {
      nav("/");
      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    } else {
      scrollToSection(partList);
    }
  };

  const movePrices = (partList) => {
    if (location.pathname !== "prices") {
      nav("/prices");
      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    }
  };

  const movePortfolio = (partList) => {
    if (location.pathname !== "portfolio") {
      nav("/portfolio");
      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    }
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <button
            style={{ backgroundColor: "transparent" }}
            onClick={() => aboutPersonal("mainScreen")}
          >
            <div className={style.logo}></div>
          </button>
          <nav className={style.menu}>
            <ul className={style.list}>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("services")}
              >
                Послуги
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("aboutTeam")}
              >
                Про нас
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => movePrices("prices")}
              >
                Ціни
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("feedback")}
              >
                Відгуки
              </button>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => movePortfolio("portfolio")}
              >
                Портфоліо
              </button>
            </ul>
            <button onClick={handleActive} className={style.btn}>
              Записатися
            </button>
          </nav>
          <div
            onClick={() => setBurgerActive(burgerActive ? false : true)}
            className={burgerActive ? style.burgerBtn : style.burgerBtnActive}
          ></div>

          <div className={burgerActive ? style.burgerActive : style.burger}>
            <nav className={style.burgerMenu}>
              <ul className={style.burgerList}>
                <button
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    setBurgerActive(burgerActive ? false : true);
                    aboutPersonal("services");
                  }}
                  className={style.navLink}
                >
                  Послуги
                </button>
                <button
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    setBurgerActive(burgerActive ? false : true);
                    aboutPersonal("aboutTeam");
                  }}
                  className={style.navLink}
                >
                  Про нас
                </button>
                <button
                  className={style.navLink}
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    movePrices("prices");
                    setBurgerActive(burgerActive ? false : true);
                  }}
                >
                  Ціни
                </button>
                <button
                  className={style.navLink}
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    aboutPersonal("feedback");
                    setBurgerActive(burgerActive ? false : true);
                  }}
                >
                  Відгуки
                </button>
                <button
                  className={style.navLink}
                  style={{ backgroundColor: "#f9f9f9" }}
                  onClick={() => {
                    movePortfolio("portfolio");
                    setBurgerActive(burgerActive ? false : true);
                  }}
                >
                  Портфоліо
                </button>
              </ul>
              <button onClick={handleActive} className={style.btn}>
                Записатися
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
