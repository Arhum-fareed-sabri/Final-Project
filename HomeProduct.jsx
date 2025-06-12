import React, { useEffect, useState } from "react";
import { Dialog, Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import './HomeProduct.css';

const HomeProduct = ({ open, onClose, product }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [mainImage, setMainImage] = useState(product.img);

useEffect(() => {
  setMainImage(product.img);
}, [product]);


  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <div className="product-modal">
        <button onClick={onClose} className="close-button">
          <IoMdClose />
        </button>

        {/* Left: Images */}
        <div className="product-images">
          <img src={mainImage} alt={product.title} className="main-image" />
          <div className="thumbnail-container">
            <img src={product.img} alt="thumb1" onClick={() => setMainImage(product.img)} />
            <img src={product.bot} alt="thumb2" onClick={() => setMainImage(product.bot)} />
          </div>
        </div>

        {/* Right: Info */}
        <div className="product-details">
          <h2>{product.title}</h2>
          <div className="review-stars">★★★★☆ <span>(12 reviews)</span></div>
          
          <div className="price">
            <span className="current-price">${product.price}</span>
          </div>

          <div className={`stock-status ${product.inStock ? 'stock-in' : 'stock-out'}`}>
            {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
          </div>

          <p className="product-description">
            {product.description || 'A premium, delicious product to enrich your meals. Made with care and high-quality ingredients.'}
          </p>

          <div className="quantity-cart">
            <div className="quantity-box">
              <button onClick={decreaseQty}>-</button>
              <div>{quantity}</div>
              <button onClick={increaseQty}>+</button>
            </div>

            <button className="add-to-cart-button">Add to Cart</button>

            <button
              className={`wishlist-button ${wishlist ? 'active' : ''}`}
              onClick={() => setWishlist(!wishlist)}
            >
              <AiOutlineHeart />
            </button>
          </div>

          <div className="product-category">
            Category: <strong>{product.category}</strong>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default HomeProduct;
