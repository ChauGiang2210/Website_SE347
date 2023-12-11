import { memo } from "react";
import "./style.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";

const Header = () =>
{
    return (
    <div className="header_top">
    <div>
        <div className='row'>
            <div className="col-1 header-top-left">
            <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
            </div>
            <div className="col-2 header-top-right">
            <ul>
                <li><Link to={""}><IoSearch /></Link></li>
                <li><Link to={""}><MdOutlineShoppingCart /></Link></li>
                <li><Link to={""}><FaRegUser /></Link></li>
            </ul>
            </div>
        </div>
    </div>
    </div>
    );
};
export default memo(Header);