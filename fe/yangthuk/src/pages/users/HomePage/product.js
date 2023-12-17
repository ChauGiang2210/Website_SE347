import { memo } from "react";

const Product = () =>
{
    return (
        <div className="product">
            <img className='product-img' src={process.env.PUBLIC_URL + '/move1.jpg'}></img>
            <p className="name">Name</p>
            <p className="price">Price</p>
        </div>
    )
};
export default memo(Product);