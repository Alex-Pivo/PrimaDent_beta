import style from "../../css/fifthBlock.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Notes from "../../notes/Notes";

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Service({ service }) {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <Modal active={active} setActive={setActive}>
        <Notes></Notes>
      </Modal>
      <motion.div
        custom={service.id}
        variants={textAnimation}
        className={style.service}
      >
        <h4 className={style.serviceTitle}>{service.title}</h4>
        <p className={style.serviceText}>{service.text}</p>
        <div className={style.boxes}>
          <button className={style.btn} onClick={handleActive}>
            Записатись
          </button>
          <p className={style.price}>{service.price}</p>
        </div>
      </motion.div>
    </>
  );
}

export default Service;
