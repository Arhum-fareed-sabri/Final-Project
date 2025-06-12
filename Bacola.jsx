import React, { useEffect, useRef, useState } from 'react';
import './Bacola.css';
import Slider from 'react-slick';
import Button from '@mui/material/Button';
import { MdOutlineFullscreen } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

import Homebanner from './pages/Homebanner';
import HomeCat from './pages/HomeCat';
import Newsletter from './pages/News';
import HomeProduct from './pages/HomeProduct';

import banner from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';

import img1 from '../assets/offer1.webp';
import bot1 from '../assets/offer1..webp';
import img2 from '../assets/offer2.webp';
import bot2 from '../assets/offer2..webp';
import img3 from '../assets/offer3.webp';
import bot3 from '../assets/offer3..webp';
import img4 from '../assets/offer4.webp';
import bot4 from '../assets/offer4..webp';
import img5 from '../assets/offer5.webp';
import bot5 from '../assets/offer5..webp';
import img6 from '../assets/offer6.webp';
import bot6 from '../assets/offer6..webp';
import img7 from '../assets/offer7.webp';
import bot7 from '../assets/bot7.webp';
import img8 from '../assets/offer8.webp';
import bot8 from '../assets/bot8.webp';
import img9 from '../assets/offer9.webp';
import bot9 from '../assets/bot9.webp';
import img10 from '../assets/offer10.webp';
import bot10 from '../assets/bot10.webp';

import emb from '../assets/emb.webp';
import emb1 from '../assets/emb1.webp';
import emb2 from '../assets/emb2.webp';
import embbot2 from '../assets/embbot2.jpg';
import emb3 from '../assets/emb3.webp';
import embbot3 from '../assets/embbot3.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Bacola = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const herosection2Ref = useRef(null);

  useEffect(() => {
    if (showAll && herosection2Ref.current) {
      herosection2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showAll]);

  const productSliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const embSliderSettings = {
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
  };

  const renderProductItem = (img, bot, title, category, price, hideIcons = false) => {
    const product = { img, bot, title, category, price };

    return (
      <div className="item product-item">
        <div className="overfl">
          <div className="imagewrapper">
            <img src={img} alt={title} />
            <img src={bot} alt="Bottom" />
            {!hideIcons && (
              <div className="image-actions">
                <button
                  className="icon-btn"
                  onClick={() => {
                    setSelectedProduct(product);
                    setModalOpen(true);
                  }}
                >
                  <MdOutlineFullscreen />
                </button>
                <button className="icon-btn"><AiOutlineHeart /></button>
              </div>
            )}
          </div>
          <div className="details">
            <h4>{title}</h4>
            <span>{category}</span>
            <p><span className="fare">{price}</span></p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Homebanner />
      <HomeCat />
      <div className="herosection">
        <div className="left">
          <img src={banner} alt="Banner" />
        </div>

        <div className="right">
          <div className="heading">
            <h3>Best Offers</h3>
            <span>Don't miss the current offers until the end of June</span>
          </div>

          <div className="product">
            <Slider {...productSliderSettings}>
              {renderProductItem(img1, bot1, 'Regular Fit Cotton Jacquard Kurta', 'Menswear Stitched', 'Rs.4,495.00')}
              {renderProductItem(img2, bot2, 'Printed Cambric Shirt 2 Piece', 'Ready To Wear', 'Rs.1,995.00')}
              {renderProductItem(img3, bot3, 'Shoulder Padded T-Shirt 2 Piece', 'Women Western', 'Rs.1,245.00')}
              {renderProductItem(img4, bot4, '3 Piece - Embroidered Blended Net Suit', 'Unstitched Eid II - New Arrivals', 'Rs.9,990.00')}
              {renderProductItem(img5, bot5, '3 Piece - Embroidered Raw Silk Suit', 'Menswear Stitched', 'Rs.8,590.00')}
              {renderProductItem(img6, bot6, 'Embroidered Cotton Kurta Full Suit', 'Menswear Stitched', 'Rs.3,590.00')}
            </Slider>
          </div>

          <div className="viewall">
            <Button onClick={() => setShowAll(prev => !prev)}>
              {showAll ? 'Close All' : 'View All'}
            </Button>

            <div className={`sec-product-wrapper ${showAll ? 'open' : ''}`}>
              <div className="sec-product">
                <Slider {...productSliderSettings}>
                  {renderProductItem(img7, bot7, 'Polka Dot Printed Pj Set', 'Sleepwear', 'Rs.2,995.00', true)}
                  {renderProductItem(img8, bot8, 'Dyed Cotton Trousers', 'Unstitched', 'Rs.1,043.00', true)}
                  {renderProductItem(img9, bot9, 'Unisex T-Shirt only T-Shirt', 'Women Western', 'Rs.1,145.00', true)}
                  {renderProductItem(img10, bot10, 'Cropped Kimono T-Shirt', 'Women Western', 'Rs.687.00', true)}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: showAll ? '450px' : '0',
          transition: 'margin-top 0.5s ease',
        }}
        ref={herosection2Ref}
      >
        <div className="herosection2">
          <div className="left2">
            <img src={banner2} alt="Emb Banner" />
            <h3>
              Embroided suits<br />
              <span> Ready to wear</span>
            </h3>
          </div>
          <div className="right2">
            <Slider {...embSliderSettings}>
              <div className="emb-products">
                <img src={emb} alt="Emb 1" className="emb" />
                <img src={emb1} alt="Emb Bot 1" className="embbot" />
              </div>
              <div className="emb-products">
                <img src={emb2} alt="Emb 2" className="emb" />
                <img src={embbot2} alt="Emb Bot 2" className="embbot" />
              </div>
              <div className="emb-products">
                <img src={emb3} alt="Emb 3" className="emb" />
                <img src={embbot3} alt="Emb Bot 3" className="embbot" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <Newsletter />

      {/* Modal */}
      <HomeProduct
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
};

export default Bacola;
