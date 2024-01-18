import { memo } from "react";
// import Banner from "component/banner/banner";
import "./cart.scss"
import Total from "component/total/total";
import CartProduct from "component/cartProduct/cartProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    const breadcrumbDividerStyle = {
        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
    };

    const order = useSelector((state) => state.order);


    return (
        <div>
            <nav style={breadcrumbDividerStyle} aria-label="breadcrumb">
                <ol className="breadcrumb dir" >
                    <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: '16px' }}>Trang chủ</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                </ol>
            </nav>
            <div className="banner">
                <h3>THÔNG TIN SẢN PHẨM</h3>
                <hr className="border border-secondary border-2 opacity-50"></hr>
            </div>
            <div className='cart row'>
                <div className="cartLeft">
                    <h3>DANH SÁCH MUA HÀNG</h3>
                    <CartProduct name={"son kem black rouge"} brand={"Black rouge"} type={"son"} price={"139.000 VNĐ"} img={process.env.PUBLIC_URL + "/cart1.jpg"}></CartProduct>
                    <CartProduct name={"son kem black rouge"} brand={"Black rouge"} type={"son"} price={"139.000 VNĐ"} img={process.env.PUBLIC_URL + "/cart2.jpg"}></CartProduct>
                </div>
                <div className="cartRight">
                    <h3>THÀNH TIỀN</h3>
                    <Total />
                </div>
            </div>
        </div>
    )
};
export default memo(Cart);