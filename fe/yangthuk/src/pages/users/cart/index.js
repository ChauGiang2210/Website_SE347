import { memo } from "react";
import Banner from "component/banner/banner";
import "./cart.scss"
import Total from "component/total/total";
import CartProduct from "component/cartProduct/cartProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () =>
{
    const breadcrumbDividerStyle = {
        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
      };
    return (
        <div>
            <nav style={breadcrumbDividerStyle} aria-label="breadcrumb">
            <ol className="breadcrumb dir" >
                <li className="breadcrumb-item"><a href="/" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}}>Trang chủ</a></li>
                <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
            </ol>
            </nav>
            <div class="banner">
            <h3>THÔNG TIN SẢN PHẨM</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            </div>
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
                        <h3>THÀNH TIỀN</h3>
                        <Total/>
                    </div>
                </div>
        </div>
    )
};
export default memo(Cart);