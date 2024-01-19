import { memo } from "react";
import "./header.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Header = () =>
{
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="#" className="navbar-brand">YangThuk Comestic</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page" >Trang chủ</a>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link" >Kho hàng</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/cartmanage" className="nav-link" >Đơn hàng</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/usermanage" className="nav-link">Tài khoản</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success btn-custom" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
};
export default memo(Header);