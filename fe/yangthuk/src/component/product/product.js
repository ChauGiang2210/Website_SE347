import { memo } from "react";
import "./product.scss"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title ">Son Black Rouge</h5>
        <p class="card-text">Thương hiệu: Black Rouge</p>
        <p class="card-text">Giá thành: 168.000 VNĐ</p>
      </div>
      </Link>
    </div>
  </div>
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title ">Son Black Rouge</h5>
        <p class="card-text">Thương hiệu: Black Rouge</p>
        <p class="card-text">Giá thành: 168.000 VNĐ</p>
          </div>
      </Link>
    </div>
  </div>
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
      <h5 class="card-title ">Son Black Rouge</h5>
        <p class="card-text">Thương hiệu: Black Rouge</p>
        <p class="card-text">Giá thành: 168.000 VNĐ</p>
          </div>
      </Link>
    </div>
  </div>
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title ">Son Black Rouge</h5>
        <p class="card-text">Thương hiệu: Black Rouge</p>
        <p class="card-text">Giá thành: 168.000 VNĐ</p>
         </div>
      </Link>
    </div>
  </div>
</div>
    )
};
export default memo(Product);