import React from 'react';
import "./Bacola.css"
import Homebanner from './pages/Homebanner';
import banner from "../assets/banner.jpg"
import img1 from "../assets/offer1.webp"
import img2 from "../assets/offer2.webp"
import img3 from "../assets/offer3.webp"
import img4 from "../assets/offer4.webp"
import img5 from "../assets/offer5.webp"
import img6 from "../assets/offer6.webp"
import Slider from 'react-slick';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Bacola = () => {

  var productslider = {
    dots: true,
    arrow:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
      <Homebanner />

      <section>
        <div className="herosection">
          <div className="left">
            <img src={banner} alt="" />
          </div>
          <div className="right">
            <div className="heading">
              <h3>Best Offers</h3>
              <span>dont Miss The Current Offers Until The End of June</span>
            </div>
            <div className="viewall">
              <Button>View All</Button>
            </div>
            <div className="product">
              <Slider {...productslider}>
                <div className="item product-item">
                  <div className="imagewrapper">
                    <img src={img1} alt="img" className='w-100' />
                  </div>
                </div>
              </Slider>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}
export default Bacola