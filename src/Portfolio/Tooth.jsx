import style from "../css/portfolio.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.6 },
  }),
};

function Tooth({ tooth }) {
  $(function () {
    $("#draggable1").draggable({
      axis: "x",
      containment: "parent",
    });
    $("#draggable2").draggable({
      axis: "x",
      containment: "parent",
    });
    $("#draggable3").draggable({
      axis: "x",
      containment: "parent",
    });
    $("#draggable4").draggable({
      axis: "x",
      containment: "parent",
    });
  });
  var poss = $("#draggable1").position();
  let initialState = [0, 0, 0, 0];
  console.log(poss);
  let [active, setActive] = useState(initialState);

  let line = $(`#line`).width();
  let display;
  if (active > 0) {
    display = "block";
  } else display = "none";

  let shtov = "< Штовхай >";

  return (
    <>
      <motion.div
        custom={tooth.id}
        variants={textAnimation}
        className={style.photosBox}
      >
        <h2 className={style.name}>{tooth.name}</h2>

        <div className={style.photos}>
          <div
            className={style.photoLeft}
            style={{
              backgroundImage: `url("${tooth.pathLeft}")`,
            }}
          >
            <div
              className={style.photoRight}
              style={{
                width: `${active}px`,
              }}
            >
              <div
                className={style.photoTooth}
                style={{
                  backgroundImage: `url("${tooth.pathRight}")`,
                }}
              ></div>
            </div>
            <div
              onPointerMove={() => {
                var p = $(`#draggable${tooth.id}`).position();
                var pos = p.left;
                var pLeft = $(`#draggable${tooth.id}`).width();
                setActive((active = pos + pLeft / 2));
              }}
              className={style.circle}
              id={`draggable${tooth.id}`}
            >
              <p className={style.circleText}>{shtov}</p>
            </div>
            <div
              id="line"
              className={style.line}
              style={{
                left: `${active - line / 2}px`,
                display: `${display}`,
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Tooth;
