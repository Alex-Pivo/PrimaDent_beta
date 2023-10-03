import style from "../css/header.module.css";
import "../css/header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ active, setModal }) {
  const [burgerActive, setBurgerActive] = useState(true);
  let [price, setPriceActive] = useState(true);
  let [port, setPortActive] = useState(true);
  let [serv, setServActive] = useState(true);
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

      if (partList === "services") {
        setServActive(serv === true);
        linkServ(serv);
      }

      setPriceActive((price = false));
      linkPrcies(price);

      setPortActive((port = false));
      linkPort(port);

      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    } else {
      scrollToSection(partList);
    }
  };

  const linkPrcies = (price) => {
    if (price === true) {
      $(function () {
        $("#linkPrice").css({
          color: "#305381",
          textDecoration: "underline",
        });
      });
    } else {
      $(function () {
        $("#linkPrice").css({
          color: "#282828",
          textDecoration: "none",
        });
      });
    }
  };

  const linkPort = (port) => {
    if (port === true) {
      $(function () {
        $("#linkPort").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });
    } else {
      $(function () {
        $("#linkPort").css({
          textDecoration: "none",
          color: "#282828",
        });
      });
    }
  };

  const linkServ = (serv) => {
    if (serv === true) {
      $(function () {
        $("#serv").css({
          textDecoration: "underline",
          color: "#305381",
        });
      });
    } else {
      $(function () {
        $("#serv").css({
          textDecoration: "none",
          color: "#282828",
        });
      });
    }
  };

  const movePrices = (partList) => {
    if (location.pathname !== "prices") {
      nav("/prices");

      setPriceActive((price = true));
      linkPrcies(price);

      setPortActive((port = false));
      linkPort(port);

      setTimeout(() => {
        scrollToSection(partList);
      }, 100);
    }
  };

  const movePortfolio = (partList) => {
    if (location.pathname !== "portfolio") {
      nav("/portfolio");

      setPortActive((port = true));
      linkPort(port);

      setPriceActive((price = false));
      linkPrcies(price);

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
            id="mainS"
          >
            <div className={style.logo}></div>
          </button>
          <nav className={style.menu}>
            <ul className={style.list}>
              <button
                className={style.navLink}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => aboutPersonal("services")}
                id="serv"
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
                id="linkPrice"
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
                id="linkPort"
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
