import EighthBlock from "../8Block/EighthBlock";
import Footer from "../9Footer/Footer";
import Tooth from "./Tooth";
import style from "../css/portfolio.module.css";
import { toothes } from "./tooth.data";
import { useState } from "react";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -25,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Portfolio() {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.portfolio} id={"portfolio"}>
          <div className={style.titleBox}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Портфоліо
            </motion.h2>
            <motion.p
              custom={2}
              variants={textAnimation}
              className={style.text}
            >
              Історії наших пацієнтів, де ви можете ознайомитися з їхнім
              досвідом на власні очі
            </motion.p>
          </div>
          {toothes.map((tooth) => (
            <Tooth key={tooth.id} tooth={tooth}></Tooth>
          ))}
        </div>
      </motion.section>
      <EighthBlock></EighthBlock>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
