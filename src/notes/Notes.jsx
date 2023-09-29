import style from "./notes.module.scss";
import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";

import pF1 from "/src/assets/img/Flag.svg";
import pF2 from "/src/8Block/flags/Slovakia.svg";
import pF3 from "/src/8Block/flags/Czech.svg";
import pF4 from "/src/8Block/flags/Hungary.svg";

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Notes() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let [box, setBox] = useState(false);
  let [flag, setFlag] = useState(0);

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
      data.append("name", name);
      data.append("phone", phone);
      data.append("code", code);

      const response = await axios.post("http://localhost:5000/submit", data);

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
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className={style.eighthBlock}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Запишись на візит онлайн
            </motion.h2>
            <form onSubmit={handleSubmit} className={style.form}>
              <motion.div
                custom={2}
                variants={textAnimation}
                className={style.inputs}
              >
                <div className={style.first}>
                  <p className={style.text}>Ваше ім’я:</p>
                  <input
                    type="text"
                    name="name"
                    className={style.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={style.second}>
                  <div className={style.numberBox}>
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
                      <div
                        onClick={() => setFlag((flag = 0))}
                        className={style.contFlag}
                      >
                        <p>Україна</p>
                        <div className={style.ukr}></div>
                      </div>
                      <div
                        onClick={() => setFlag((flag = 1))}
                        className={style.contFlag}
                      >
                        <p>Словаччина</p>
                        <div className={style.slov}></div>
                      </div>
                      <div
                        onClick={() => setFlag((flag = 2))}
                        className={style.contFlag}
                      >
                        <p>Чехія</p>
                        <div className={style.chech}></div>
                      </div>
                      <div
                        onClick={() => setFlag((flag = 3))}
                        className={style.contFlag}
                      >
                        <p>Угорщина</p>
                        <div className={style.hug}></div>
                      </div>
                    </div>
                    <p className={style.text}>{code}</p>
                  </div>
                  <input
                    style={{ display: "none" }}
                    type="text"
                    name="code"
                    value={code}
                  />
                  <input
                    type="tel"
                    name="phone"
                    className={style.number}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </motion.div>
              <motion.button
                custom={3}
                variants={textAnimation}
                type="submit"
                className={style.btn}
              >
                Записатись
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Notes;
