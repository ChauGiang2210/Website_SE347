import { memo } from "react";
import "./style.scss";
import React from "react";
// import { Link } from "react-router-dom";

const Footer = () =>
{
    return (
    <div className="footer">
    <div>
        <div className='row'>
            <div className="col-1 footer-left">
                <p><br/>Lê Châu Giang - 21520213
                <br/> Nguyễn Ngọc Thức - 21521506</p>
            </div>
            <div className="col-2 footer-right">
            <p>Trường Đại học Công nghệ thông tin
            <br/>Khoa Công nghệ phần mềm
            <br/>SE347.O12 - Công nghệ Web và ứng dụng</p>
            </div>
        </div>
    </div>
    </div>
    );
};
export default memo(Footer);