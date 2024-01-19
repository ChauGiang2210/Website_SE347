import { memo, useEffect, useState } from "react";
// import Banner from "component/banner/banner";
import "./cart.scss"
import Total from "component/total/total";
import CartProduct from "component/cartProduct/cartProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllAddresssByUser } from "../../../services/address";

const Cart = () => {
    const [orderItems, setOrderItems] = useState([])
    const [total, setTotal] = useState({})
    const [addresses, setAddresses] = useState([])
    const breadcrumbDividerStyle = {
        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
    };

    const order = useSelector((state) => state.order);
    const user = useSelector((state) => state.user);
    // console.log('order', order)

    useEffect(() => {
        if (order?.orderItems?.length > 0) {
            setOrderItems(order.orderItems)
            console.log('orderItems', orderItems)
        }
    }, [order])

    useEffect(() => {
        if (order?.orderItems?.length > 0) {
            const itemsPrice = order?.orderItems?.reduce((a, c) => a + c.price * c.amount, 0)
            const shippingPrice = itemsPrice > 200000 ? 0 : 20000
            const taxPrice = Math.round(0.1 * itemsPrice)
            const totalPrice = itemsPrice + shippingPrice + taxPrice
            setTotal({
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice
            })
            // console.log('total', total)
        }
    }, [order])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await handleGetAllAddress(order.user);
                setAddresses(res);
                console.log('res',res);
            } catch (error) {
                console.error("Error fetching address:", error);
            }
        }

        fetchData();
    }, [user])

    const handleGetAllAddress = async (id) => {
        const res = await getAllAddresssByUser(id);
        // console.log(res.addresss);
        return res.addresss;
    }

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
                    {
                        orderItems?.map((item, index) => (
                            <CartProduct key={index} name={item.name} brand={item.brand} type={item.category} price={item.price} amount={item.amount} img={process.env.PUBLIC_URL + "/cart1.jpg"}></CartProduct>
                        ))
                    }
                    {/* <CartProduct name={"son kem black rouge"} brand={"Black rouge"} type={"son"} price={"139.000 VNĐ"} img={process.env.PUBLIC_URL + "/cart1.jpg"}></CartProduct>
                    <CartProduct name={"son kem black rouge"} brand={"Black rouge"} type={"son"} price={"139.000 VNĐ"} img={process.env.PUBLIC_URL + "/cart1.jpg"}></CartProduct> */}
                </div>
                <div className="cartRight">
                    <h3>THÀNH TIỀN</h3>
                    <Total total={total} addresses={addresses} orderItems={orderItems}/>
                </div>
            </div>
        </div>
    )
};
export default memo(Cart);