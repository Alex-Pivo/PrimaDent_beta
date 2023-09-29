import style from "../css/modalWindow.module.css";
import { useState } from "react";
import axios from "axios";

import pF1 from "/src/assets/img/Flag.svg";
import pF2 from "/src/8Block/flags/Slovakia.svg";
import pF3 from "/src/8Block/flags/Czech.svg";
import pF4 from "/src/8Block/flags/Hungary.svg";

const Modal = ({ active, setActive }) => {
  let [box, setBox] = useState(false);
  let [flag, setFlag] = useState(0);
  let [phone, setPhone] = useState("");

  let pathFlag;
  let code;

  if (flag === 0) {
    pathFlag = pF1;
    code = "+380";
  } else if (flag === 1) {
    pathFlag = pF2;
    code = "+421";
  } else if (flag === 2) {
    pathFlag = pF3;
    code = "+420";
  } else if (flag === 3) {
    pathFlag = pF4;
    code = "+36";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("code", code);

      const response = await axios.post("http://localhost:5000/submit2", data);

      if (response.status === 200) {
        console.log("Данные успешно отправлены в Telegram");
      } else {
        console.log("Произошла ошибка");
      }
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={active ? style.active : style.modal}
      >
        <p className={style.title}>Залиште свій номер і ми зателефонуємо вам</p>
        <div className={style.inputBox}>
          <div
            onClick={() => setBox(box ? false : true)}
            className={box ? style.flagBoxActive : style.flagBox}
          >
            <div
              className={style.flag}
              style={{
                backgroundImage: `url(${pathFlag})`,
              }}
            ></div>
            <div className={style.arrow}></div>
            <div onClick={() => setFlag((flag = 0))} className={style.contFlag}>
              <p>Україна</p>
              <div className={style.ukr}></div>
            </div>
            <div onClick={() => setFlag((flag = 1))} className={style.contFlag}>
              <p>Словаччина</p>
              <div className={style.slov}></div>
            </div>
            <div onClick={() => setFlag((flag = 2))} className={style.contFlag}>
              <p>Чехія</p>
              <div className={style.chech}></div>
            </div>
            <div onClick={() => setFlag((flag = 3))} className={style.contFlag}>
              <p>Угорщина</p>
              <div className={style.hug}></div>
            </div>
          </div>
          <p className={style.text}>{code}</p>
          <input
            style={{ display: "none" }}
            type="text"
            name="code"
            value={code}
          />
          <input
            className={style.input}
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className={style.btn}>Зателефонуйте нам</button>
        <p className={style.text}>
          Наш номер: <br /> +38 (050) 628 32 86
        </p>
      </form>
    </>
  );
};

export default Modal;
