import { memo } from "react";
import "./style.scss";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const HomePage = () =>
{
    return (
        <div className="Home">
        <div>
            <div className='row'>
                <div className="col-1 body-left">
                    <nav id="menu">
                        <base target="mainframe"/>
                        <a href="">Giá từ cao đến thấp <SlArrowRight /></a>
                        <a href="">Thương hiệu <SlArrowRight /></a>
                        <a href="">Loại sản phẩm <SlArrowRight /></a>
                        <a href="">Loại da <SlArrowRight /></a>
                        <a href="">HOT DEAL <SlArrowRight /></a>
                    </nav>
                    <img className='banner' src={process.env.PUBLIC_URL + '/banner.jpg'} alt="banner" />
                </div>
                <div className="col-2 body-right">
                <p>hihi</p>
                </div>
            </div>
        </div>
        </div>
    );
};
export default memo(HomePage);