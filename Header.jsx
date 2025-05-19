import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import CountryDrop from './components/pages/Countrydrop';
import { MyContext } from './App';




const Header = () => {

    const Context = useContext(MyContext)

    return (
        <>
            <header className="head">
                <div className="top-strip">
                    <div className="container">
                        <p>Due to the<b> COVID 19 </b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="logo">
                        <Link to={"/"} className='logo-link'><img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="location">
                        {
                            Context.CountryList?.length !== 0 && <CountryDrop />
                        }

                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="Search For Products..." />
                        <Button><FaSearch /></Button>
                    </div>
                    <div className="user">
                        <Button className='circle mr-3'><LuUserRound /></Button>
                        <div className="cartTab ml-auto cartTab d-flex align-items-center">
                            <span className="price">$0.00</span>
                            <div className="cart-logo"></div>
                            <Button><IoBagOutline /></Button>
                            <span className='count d-flex align-item-center jusitify-content-center'>0</span>
                        </div>
                    </div>
                </nav>

                <nav className="nav-two">
                    {/* <div className="btn">
                        <Button className='allcategoies'>
                            <GiHamburgerMenu />
                            <span className='text'>ALL CATEGORIES</span>
                            <FaAngleDown />
                        </Button>
                    </div> */}
                    <div className="nav-links">
                        <li><Link to="/" className='link'><Button>Home</Button></Link></li>
                        <li><Link to="/" className='link'><Button>Mens</Button></Link>
                            <div className="submenue shadow">
                                <Link to='/' className='sub-link'><Button>Clothing</Button></Link>
                                <Link to='/' className='sub-link'><Button>FootWear</Button></Link>
                                <Link to='/' className='sub-link'><Button>Watches</Button></Link>
                                <Link to='/' className='sub-link'><Button>Bags & Backpacks</Button></Link>
                                <Link to='/' className='sub-link'><Button>Sunglasses & Frames</Button></Link>
                            </div>
                        </li>
                        <li><Link to="/" className='link'><Button>Womens</Button></Link>
                            <div className="submenue shadow">
                                <Link to='/' className='sub-link'><Button>Clothing</Button></Link>
                                <Link to='/' className='sub-link'><Button>FootWear</Button></Link>
                                <Link to='/' className='sub-link'><Button>Handbags, Bags & Wallets</Button></Link>
                                <Link to='/' className='sub-link'><Button>Jewellery</Button></Link>
                                <Link to='/' className='sub-link'><Button>Watches & Wearables</Button></Link>
                            </div>
                        </li>
                        <li><Link to="/" className='link'><Button>Kids</Button></Link>
                            <div className="submenue shadow">
                                <Link to='/' className='sub-link'><Button>Boys Clothing</Button></Link>
                                <Link to='/' className='sub-link'><Button>Girls Clothing</Button></Link>
                                <Link to='/' className='sub-link'><Button>Footwear</Button></Link>
                                <Link to='/' className='sub-link'><Button>Toys & Games</Button></Link>
                                <Link to='/' className='sub-link'><Button>Kids Accessories</Button></Link>
                            </div>
                        </li>
                        <li><Link to="/" className='link'><Button>Beauty</Button></Link></li>
                        <li><Link to="/" className='link'><Button>Blog</Button></Link></li>
                        <li><Link to="/" className='link'><Button>Contact Us</Button></Link></li>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header