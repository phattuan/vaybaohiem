import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

//==== import img ======
import banner_1 from "../../assets/images/banner/banner-1.jpg";
import banner_2 from "../../assets/images/banner/banner-2.png";
import banner_3 from "../../assets/images/banner/banner-3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="banner">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={2000}>
            <img className="d-block img-banner" src={banner_1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block img-banner" src={banner_2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block img-banner" src={banner_3} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
