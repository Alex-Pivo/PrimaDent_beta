import style from "../css/footer.module.css";
import MapComponent from "../MapComponent/MapComponent";
import { motion } from "framer-motion";

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

function Footer() {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <footer className={style.footer}>
          <div className={style.info}>
            <motion.a
              custom={1}
              variants={textAnimation}
              href="tel:+38(050)6283286"
              className={style.number}
            >
              +38 (050) 628 32 86
            </motion.a>
            <motion.p
              custom={2}
              variants={textAnimation}
              className={style.text}
            >
              Чекаємо на вас у нашому затишному кабінеті за адресою вул.
              Мукачівська 4, що у трьох хвилинах ходьби від площі Петефі.
            </motion.p>
            <MapComponent></MapComponent>

            <motion.div
              custom={3}
              variants={textAnimation}
              className={style.mailTime}
            >
              <p className={style.mail}>пн-пт: 8.00 - 20.00</p>
              <p className={style.time}>made by Y.tech</p>
            </motion.div>
          </div>
          <motion.div
            custom={1}
            variants={textAnimation}
            className={style.links}
          >
            <a href="https://t.me/drMaxPryima" className={style.telega}></a>
            <a
              href="https://www.instagram.com/primadent.uzh/"
              className={style.insta}
            ></a>
            <a
              href="https://www.facebook.com/primadent.uzh"
              className={style.facebook}
            ></a>
          </motion.div>
          <motion.div
            custom={3}
            variants={textAnimation}
            className={style.mailTimeInvis}
          >
            <p className={style.mail}>пн-пт: 8.00 - 20.00</p>
            <p className={style.time}>made by Y.tech</p>
          </motion.div>
        </footer>
      </motion.section>
    </>
  );
}

export default Footer;
