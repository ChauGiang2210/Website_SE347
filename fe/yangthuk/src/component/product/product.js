import { memo } from "react";
import "./product.scss"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({name, brand, price, srcImg}) => {
    return (
        <div >
        <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card"><Link to={"/order"}>
            <img src={srcImg} className="card-img-top" alt="..."/>
            <div className="card-body product-content">
              <h5 className="card-title ">{name}</h5>
              <p className="card-text">Thương hiệu: {brand}</p>
              <p className="card-text">Giá thành: {price}</p>
            </div>
            </Link>
          </div>
        </div>
     
        </div>
    )
};
export default memo(Product);