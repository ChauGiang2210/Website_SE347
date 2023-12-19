import { memo,useState,useEffect } from "react";
import "./style.scss";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Routes, Route} from "react-router-dom"
import cart from "pages/users/cart";



const Header = () =>
{
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
    <div>
    <div className="header_top">
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className='row'>
            <div className="col-1 header-top-left">
            <Link to ={"/"}> <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /> </Link>
            </div>
            <div className="col-2 header-top-right">
            <ul>
            <div className="search">
            <form >
              <input
                type="text"
                name="search"
                placeholder="Tìm kiếm ..."
                //defaultValue={setSearch}
               // onChange={(e) => setSearch(e.target.value)}
              ></input>
              
              {/* <button type="submit" onClick={(e) => SearchProduct(e)}>Search</button> */}
            </form>
            
        </div>
        {/* <li><IoSearch className="iosearch"/></li> */}
                {/* <li ><Link to={""} className="btn">< IoSearch className='icon' /></Link></li> */}
                <li><Link to={"/cart"} className="bton"><MdOutlineShoppingCart className='icon' /></Link></li>
                <li><Link to={"/login"} className="bton"><FaRegUser className='icon' /></Link></li>
            </ul>
            </div>
        </div>
    </div>

    </div >
    <div className="head-content">
    <div className="Head-Image container">
        <img className='mp' src={process.env.PUBLIC_URL + '/mypham.jpg'} alt="Logo" />
    </div>
    <div className="move-image">
        <marquee
          behavior="alternate"
          width="100%"
          loop="-1"
          direction="right"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {Array.from({ length: 8 }, (_, index) => (
            <img
              key={`move${index + 1}`}
              className={`move ${isHovered ? "zoomed" : ""}`}
              src={process.env.PUBLIC_URL + `/move${index + 1}.jpg`}
              id={`move${index + 1}`}
            />
          ))}
        </marquee>
    </div>
    </div>

    </div>
    );
};
export default memo(Header);