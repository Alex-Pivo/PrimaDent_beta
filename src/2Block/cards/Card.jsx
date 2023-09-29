import style from "../../css/secondBlock.module.css";
import { cards } from "./cards.data.js";
import { motion } from "framer-motion";
import { useState } from "react";

// import pic1 from "/src/2Block/cards/img/macbook.svg";
// import pic2 from "/src/2Block/cards/img/human.svg";
// import pic3 from "/src/2Block/cards/img/book.svg";
// import pic4 from "/src/2Block/cards/img/mono.svg";

// import {pics} from [
//   {
//     pic1: "/src/2Block/cards/img/macbook.svg",
//   },
//   {
//     pic2: "/src/2Block/cards/img/human.svg",
//   },
//   {
//     pic3: "/src/2Block/cards/img/book.svg",
//   },
//   {
//     pic4: "/src/2Block/cards/img/mono.svg",
//   },
// ];

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
  let [active, setActive] = useState();
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
              <img className={style.pic} src={card.image} />
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
