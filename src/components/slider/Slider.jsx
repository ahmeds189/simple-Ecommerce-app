import sliderData from "./sliderData";
import "./Slider.scss";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const next = () => {
    slide < 5 ? setSlide(slide + 1) : setSlide(0);
  };
  const prev = () => {
    slide > 0 ? setSlide(slide - 1) : setSlide(sliderData.length - 1);
  };

  const goToSlide = (slideIndex) => {
    setSlide(slideIndex);
  };

  const background = {
    backgroundImage: `url(${sliderData[slide].url})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <section className="slider">
      <h1>Our Collections</h1>
      <div style={background} className="slider-img"></div>

      <div className="slider-nav">
        <button onClick={prev}>
          {<FaArrowLeft style={{ fontSize: "2rem" }} />}
        </button>
        <div className="point">
          {sliderData.map((img, slideIndex) => {
            return (
              <span
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              ></span>
            );
          })}
        </div>

        <button onClick={next}>
          {<FaArrowRight style={{ fontSize: "2rem" }} />}
        </button>
      </div>
    </section>
  );
};

export default Slider;
