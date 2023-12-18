import { memo } from "react";
import Banner from "component/banner/banner";
import "./cart.scss"
import Total from "component/total/total";

const Cart = () =>
{
    return (
        <div>
            <Banner>
                GIỎ HÀNG
            </Banner>
            <div className='cart'>
            <div className='row'>
                    <div className="col-1 body-left">
                        <Total/>
                        <img className='banner' src={process.env.PUBLIC_URL + '/banner.jpg'} alt="banner" />
                    </div>
                    <div className="col-2 body-right">
                        <h3>DANH SÁCH MUA HÀNG</h3>
                        <div>
                            <img></img>
                            <p>Tên sản phẩm: </p>
                            <p>Giá thành: </p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
};
export default memo(Cart);