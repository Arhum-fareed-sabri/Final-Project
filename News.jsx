import React from "react";
import { Mail } from "lucide-react";
import './Newsletter.css'
import discount from '../../assets/discountnews.webp'
import { IoShirtOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";



const Newsletter = () => {
  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="text-content">
            <p className="small-heading">$20 discount for your first order</p>
            <h2>Join our newsletter and get...</h2>
            <p className="subtext">
              Join our email subscription now to get updates on promotions and coupons.
            </p>
            <div className="email-form">
              <div className="input-group">
                <Mail className="icon" />
                <input type="email" placeholder="Your email address" />
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
          <div className="image-content">
            <img
              src={discount}
              alt="discount"
            />
          </div>
        </div>
      </div>
      <div className="newsbottom">
        <span><IoShirtOutline /><h3>Everyday Best products</h3></span>
        <span><CiDeliveryTruck /><h3>Free delivery for order $70</h3></span>
        <span><CiDiscount1 /><h3>Daily Mega Discounts Offers</h3></span>
        <span><CiBadgeDollar /><h3>Best price on the market</h3></span>
      </div>
    </>
  );
};

export default Newsletter;
