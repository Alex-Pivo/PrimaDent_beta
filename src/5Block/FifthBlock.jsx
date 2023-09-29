import style from "../css/fifthBlock.module.css";
import { services } from "../5Block/diagnostic/services.data.js";
import Service from "./diagnostic/Service.jsx";

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

function FifthBlock() {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={style.fifthBlock} id={"services"}>
          <div className={style.container}>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className={style.title}
            >
              Наші послуги
            </motion.h2>
            <div className={style.services}>
              {services.map((service) => (
                <Service key={service.id} service={service}></Service>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default FifthBlock;
