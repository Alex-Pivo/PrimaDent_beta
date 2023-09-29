import style from "../../css/secondBlock.module.css";
import { cards } from "./cards.data.js";
import { motion } from "framer-motion";

const blocksAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

function Card() {
  const pathes = [
    "../src/2Block/cards/img/macbook.svg",
    "../src/2Block/cards/img/human.svg",
    "../src/2Block/cards/img/book.svg",
    "../src/2Block/cards/img/mono.svg",
  ];
  return (
    <>
      <motion.div className={style.container__cards}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={blocksAnimation}
            custom={index + 1}
            className={style.card}
          >
            <div className={style.pic__container}>
              <img className={style.pic} src={pathes[card.id - 1]} />
            </div>
            <h4 className={style.card__title}>{card.title}</h4>
            <p className={style.card__text}>{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Card;
