import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import cat1 from "../../assets/1cat.webp"
import cat2 from "../../assets/2cat.webp"
import cat3 from "../../assets/3cat.jpg"
import cat4 from "../../assets/4cat.jpg"
import cat5 from "../../assets/5cat.webp"
import cat6 from "../../assets/6cat.webp"
import cat7 from "../../assets/7cat.webp"
import cat8 from "../../assets/8cat.webp"
import "./HomeCat.css"

const HomeCat = () => {
    return (
        <>
            <div className="homecat">
                <div className="container">
                        <div className="heading">
                            <h3 style={{ color: 'purple',fontWeight: 'bold', fontFamily:'Georgia',fontSize:'34px' }}>Featured Categories</h3>
                        </div>
                    <div className="product-row">
                        <Swiper modules={[Navigation]}
                            navigation={true}
                            spaceBetween={50}
                            slidesPerView={5}
                            slidesPerGroup={1}
                            className="myswiper shadow"
                        >
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat1} alt="" />
                                <p>Signature <br />
                                    <span>Unstiched</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat2} alt="" />
                                <p>Luxe <br />
                                    <span>Unstiched</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat3} alt="" />
                                <p>Luxary <br />
                                    <span>Ready to Wear</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat4} alt="" />
                                <p>Printed <br />
                                    <span> Ready to wear</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat5} alt="" />
                                <p>Matching Seprates <br />
                                    <span>Ready to Wear </span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat6} alt="" />
                                <p>Summer'25 <br />
                                    <span>WEST</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat7} alt="" />
                                <p>Accessories <br />
                                    <span>Eid II</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={cat8} alt="" />
                                <p>Daily <br />
                                    <span>Unstiched</span>
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCat;