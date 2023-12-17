import { memo,useState,useEffect } from "react";
import "./style.scss";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

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
            <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
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
                <li><Link to={""} className="btn"><MdOutlineShoppingCart className='icon' /></Link></li>
                <li><Link to={""} className="btn"><FaRegUser className='icon' /></Link></li>
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
        <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move1.jpg"}
            id="move1"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move2.jpg"}
            id="move2"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move3.jpg"}
            id="move3"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move4.jpg"}
            id="move4"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move5.jpg"}
            id="move1"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move6.jpg"}
            id="move2"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move7.jpeg"}
            id="move2"
          />
          <img
            className={`move ${isHovered ? "zoomed" : ""}`}
            src={process.env.PUBLIC_URL + "/move8.jpg"}
            id="move2"
          />
          {/* ... (Các ảnh khác trong marquee) */}
        </marquee>
    </div>
    </div>
    </div>
    );
};
export default memo(Header);