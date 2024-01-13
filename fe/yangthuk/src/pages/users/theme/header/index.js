import { memo,useState,useEffect } from "react";
import "./style.scss";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Routes, Route} from "react-router-dom"
import cart from "pages/users/cart";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () =>
{
  return (
  <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" >
      {/* style={{backgroundColor: "rgba(3,140,127,0.5)", padding: "0.5%"}} */}
        <a class="navbar-brand" href="#">YangThuk</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Trang chủ</a>
            </li>
            <li class="nav-item">
              <Link to = "/order" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}}><a class="nav-link" >Sản phẩm</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">Quản lý</a>
            </li>
            <li class="nav-item">
              <Link to = "/user" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}}><a class="nav-link" >User</a></Link>
            </li>
          </ul>
              
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success btn_cus" type="submit">Search</button>
          </form>
          <Link to ={"/cart"}><button class="btn btn-link btn_icon" type="submit" style={{textDecoration: "none", color: "black" ,fontSize: '16px'}}><MdOutlineShoppingCart className='icon' />Giỏ hàng</button></Link>
          <Link to ={"/login"}><button class="btn btn-link btn_icon" type="submit"style={{textDecoration: "none", color: "black" ,fontSize: '16px'}}><FaRegUser className='icon' />Log in</button></Link>
        </div>
      </div>
    </nav>
    <div className="Head-Image-container" >
        <img className='mp' src={process.env.PUBLIC_URL + '/mypham.jpg'} alt="Logo" />
    </div>
    </>)
};
export default memo(Header);