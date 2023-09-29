import { useState } from "react";
import { serts } from "./MaksSert/sert.data.js";
import { valSerts } from "./ValeraSert/ValSert.data.js";
import { photos } from "./Gallery/gal.data.js";
import style from "../css/sixthBlock.module.css";
import { motion } from "framer-motion";

import arrow1 from "/src/assets/img/arrow1.png";
import arrow2 from "/src/assets/img/arrow2.png";

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

function SixthBlock() {
  let [btnActive, setBtnActive] = useState(0);
  let [btnActiveS, setBtnActiveS] = useState(0);

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.sixthBlock} id={"aboutTeam"}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Наша команда
            </motion.h2>
            <div className={style.team}>
              <div className={style.maks}>
                <motion.div
                  custom={2}
                  variants={textAnimation}
                  className={style.img}
                ></motion.div>
                <motion.h4
                  custom={3}
                  variants={textAnimation}
                  className={style.name}
                >
                  <span>Прийма Максим Борисович</span> <br /> Стоматолог-хірург,
                  ортопед
                </motion.h4>
                <motion.p
                  custom={4}
                  variants={textAnimation}
                  className={style.info}
                >
                  Власник стоматології Прімадент. Вирішив стати лікарем ще у 4
                  роки як його батько. <br /> Пройшов більше 50 курсів з
                  хірургії та естетичної стоматології. <br /> Спеціалізується на
                  повному відновленні зубного ряду за допомогою дентальних
                  імплантатів в методиках all-on-4, all-on-6 та на безпечній
                  зміні усмішки керамічними вінірами.
                </motion.p>
                <motion.div
                  custom={5}
                  variants={textAnimation}
                  // initial="hidden"
                  // whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                  className={style.buttons}
                >
                  <motion.button
                    className={btnActive === 1 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActive((btnActive = 1))}
                  >
                    Сертифікати
                  </motion.button>
                  <motion.button
                    className={btnActive === 2 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActive((btnActive = 2))}
                  >
                    Галерея
                  </motion.button>
                  <motion.button
                    className={
                      btnActive === 0 ? style.btnCloseMinus : style.btnClose
                    }
                    onClick={() => setBtnActive((btnActive = 0))}
                  >
                    {" "}
                    <img src={btnActive === 0 ? arrow1 : arrow2} alt="" />{" "}
                  </motion.button>
                </motion.div>
                <div
                  className={
                    btnActive === 1
                      ? style.sertificates
                      : style.sertificatesMinus
                  }
                >
                  {serts.map((sert, index) => (
                    <img
                      key={sert.id}
                      src={sert.path}
                      className={style.image}
                      alt=""
                    />
                  ))}
                </div>
                <div
                  className={
                    btnActive === 2 ? style.gallery : style.galleryMinus
                  }
                >
                  {photos.map((photo) => (
                    <img
                      key={photo.id}
                      src={photo.path}
                      className={style.image}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <div className={style.valera}>
                <motion.div
                  custom={2}
                  variants={textAnimation}
                  className={style.img}
                ></motion.div>
                <motion.h4
                  custom={3}
                  variants={textAnimation}
                  className={style.name}
                >
                  <span>Валерій Малець</span> <br /> Лікар-стоматолог терапевт
                </motion.h4>
                <motion.p
                  custom={4}
                  variants={textAnimation}
                  className={style.info}
                >
                  Виконує такі маніпуляції як: професійна гігієна; кюретаж;
                  відбілювання зубів; лікуванню карієсу та художньому
                  відновленню анатомії зуба; лікуванню та переліковуванню
                  кореневих каналів.
                  <br /> Головний девіз «Я сприймаю стоматологію як мистецтво: у
                  рамках цієї професії можна створювати шедеври, яким би
                  респектнув сам Да Вінчі.»
                </motion.p>
                <motion.div
                  custom={5}
                  variants={textAnimation}
                  className={style.buttons}
                >
                  <button
                    className={btnActiveS === 1 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActiveS((btnActiveS = 1))}
                  >
                    Сертифікати
                  </button>
                  <button
                    className={btnActiveS === 2 ? style.btnMinus : style.btn}
                    onClick={() => setBtnActiveS((btnActiveS = 2))}
                  >
                    Галерея
                  </button>
                  <button
                    className={
                      btnActiveS === 0 ? style.btnCloseMinus : style.btnClose
                    }
                    onClick={() => setBtnActiveS((btnActiveS = 0))}
                  >
                    {" "}
                    <img
                      src={
                        btnActiveS === 0
                          ? "../src/assets/img/arrow1.png"
                          : "../src/assets/img/arrow2.png"
                      }
                      alt=""
                    />{" "}
                  </button>
                </motion.div>
                <div
                  className={
                    btnActiveS === 1
                      ? style.sertificates
                      : style.sertificatesMinus
                  }
                >
                  {valSerts.map((valSert, index) => (
                    <img
                      key={valSert.id}
                      src={valSert.path}
                      className={style.image}
                      alt=""
                    />
                  ))}
                </div>
                <div
                  className={
                    btnActiveS === 2 ? style.gallery : style.galleryMinus
                  }
                >
                  {/* <div className={style.image}></div>
                  <div className={style.image}></div>
                  <div className={style.image}></div>
                  <div className={style.image}></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default SixthBlock;
