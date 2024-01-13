import { memo } from "react";
import "./header.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () =>
{
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">YangThuk Comestic</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Trang chủ</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/"></a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/admin">Kho hàng</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin/cartmanage">Đơn hàng</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin/usermanage">Tài khoản</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success btn-custom" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
};
export default memo(Header);