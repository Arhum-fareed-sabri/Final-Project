import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/slider1.webp"
import slide2 from "../../assets/slide2.webp"
import slide3 from "../../assets/slider3.webp"
import slide4 from "../../assets/slider4.webp"
import "./Homebanner.css"
const Homebanner = () => {
    var settings = {
        // arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    };
    return (
        <>
            <div className="homebanner shadow">
                <Slider {...settings}>
                    <div className="item">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="item">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="item">
                        <img src={slide3} alt="" />
                    </div>
                    <div className="item">
                        <img src={slide4} alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}
export default Homebanner;