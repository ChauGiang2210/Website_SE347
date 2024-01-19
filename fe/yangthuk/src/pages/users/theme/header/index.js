import { memo, useEffect, useState } from "react";
import "./style.scss";
import { FaRegUser } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
// import {Routes, Route} from "react-router-dom"
// import cart from "pages/users/cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from "component/logOut/index";
import { useSelector } from "react-redux";
// import { logout } from "../../../../services/user"
// import { useDispatch } from "react-redux";
// import { resetUser } from "../../../../redux/slides/userSlide";

const Header = () => {
  // const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const user = useSelector(state => state.user)
  // console.log(user.username || false);
  useEffect(() => {
    setUsername(user.username)
  }, [user])
  // const handleLogout = async () => {
  //   alert("Bạn đã đăng xuất");
  //   dispatch(resetUser())
  //   const res = await logout();
  //   console.log(res);
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("cartItems");
  //   localStorage.removeItem("user");
  //   // window.location.reload();
  // };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          {/* style={{backgroundColor: "rgba(3,140,127,0.5)", padding: "0.5%"}} */}
          <Link className="navbar-brand" to={"/"}>YangThuk</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Trang chủ</a>
              </li>
              <li className="nav-item">
                <Link to="/order" style={{ textDecoration: "none", color: "inherit", fontSize: '16px' }} className="nav-link" >Sản phẩm</Link>
              </li> */}
              {/* <li className="nav-item">
              <a className="nav-link" href="/admin">Quản lý</a>
            </li>
            <li className="nav-item">
              <Link to = "/user" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}} className="nav-link" >User</Link>
            </li> */}
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success btn_cus" type="submit">Search</button>
            </form>
            <Link to={"/cart"}><button className="btn btn-link btn_icon" type="submit" style={{ textDecoration: "none", color: "black", fontSize: '16px' }}><MdOutlineShoppingCart className='icon' />Giỏ hàng</button></Link>
            {
              user.username
                ? <LogOut username={username}/>
                : <Link to="/login"><button className="btn btn-link btn_icon" type="submit" style={{ textDecoration: "none", color: "black", fontSize: '16px' }}><FaRegUser className='icon' />Log in</button></Link>
            }
            {/* <Link to={"/login"}><button className="btn btn-link btn_icon" type="submit" style={{ textDecoration: "none", color: "black", fontSize: '16px' }}><FaRegUser className='icon' />Log in</button></Link>
            <LogOut /> */}
          </div>
        </div>
      </nav>
      <div className="Head-Image-container" >
        <img className='mp' src={process.env.PUBLIC_URL + '/mypham.jpg'} alt="Logo" />
      </div>
    </>)
};
export default memo(Header);