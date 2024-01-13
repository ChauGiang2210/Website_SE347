import { memo } from "react";
import Banner from "component/banner/banner";
import "./cart.scss"
import Total from "component/total/total";
import CartProduct from "component/cartProduct/cartProduct";

const Cart = () =>
{
    return (
        <div>
            <Banner>
                GIỎ HÀNG
            </Banner>
            <div className='cart row'>
                    {/* <div className="col-1 cart-left">
                        <Total/>
                        <img className='banner' src={process.env.PUBLIC_URL + '/banner.jpg'} alt="banner" />
                    </div>
                    <div className="col-2 cart-right">
                        <h3>DANH SÁCH MUA HÀNG</h3>
                        <div>
                        <CartProduct index={1}>
                        </CartProduct>
                        </div>
                    </div> */}
                    <div className="cartLeft">
                        <h3>DANH SÁCH MUA HÀNG</h3>
                        <CartProduct index={1}></CartProduct>
                        <CartProduct index={0}></CartProduct>
                    </div>
                    <div className="cartRight">
                        <h3>TỔNG CỘNG</h3>
                        <Total/>
                    </div>
                </div>
        </div>
    )
};
export default memo(Cart);