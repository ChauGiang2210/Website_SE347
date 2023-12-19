import { memo } from "react";
import "./product.scss"
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product"><Link to={"/order"}>
            <img className='product-img' src={process.env.PUBLIC_URL + '/move1.jpg'}></img>
            <p className="name">Name</p>
            <p className="price">Price</p></Link>
        </div>
    )
};
export default memo(Product);