import { memo, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "component/profile/index";
import Address from "component/address/index";
import History from "component/history/index";
import LikedProduct from "component/likedProduct/index";
import AddAddress from "component/addAddress/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllAddresssByUser } from "../../../services/address";
import { getAllOrdersByUser } from "../../../services/order";

const UserInfo = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)

    const [address, setAddress] = useState([])
    const [order, setOrder] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await handleGetAllAddress(user.id);
                setAddress(res);
                console.log('address', res);
            } catch (error) {
                console.error("Error fetching address:", error);
            }
        };
    
        fetchData();
    }, [user])

    const handleGetAllAddress = async (id) => {
        const res = await getAllAddresssByUser(id);
        return res.addresss;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await handleGetAllOrder(user.id);
                setOrder(res);
                console.log('orderres',res);
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        };
    
        fetchData();
        console.log('my-orer', order);
    }, [user])

    const handleGetAllOrder = async (id) => {
        const res = await getAllOrdersByUser(id);
        console.log('res.orders', res.orders);
        return res.orders;
    }


    return (
        <>
            <div className="banner">
            <h3>HỒ SƠ NGƯỜI DÙNG</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Hồ sơ</button>
                <button className="nav-link" id="nav-address-tab" data-bs-toggle="tab" data-bs-target="#nav-address" type="button" role="tab" aria-controls="nav-address" aria-selected="false">Địa chỉ</button>
                <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history" type="button" role="tab" aria-controls="nav-history" aria-selected="false">Lịch sử mua hàng</button>
                <button className="nav-link" id="nav-like-tab" data-bs-toggle="tab" data-bs-target="#nav-like" type="button" role="tab" aria-controls="nav-like" aria-selected="false">Yêu thích</button>
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
            <Profile></Profile>
            </div>
            <div className="tab-pane fade show active" id="nav-address" role="tabpanel" aria-labelledby="nav-address-tab" tabIndex="0" style={{margin:"10px"}}>

            {
                address.map((item, index) => {
                    return (
                        <Address key={index} fullName={item.fullName} phone={item.phone} address={item.address} />
                        // <Address fullName={item.fullName} phone={item.phone} address={item.address} />
                    )
                })
            }
            {/* <Address fullName={"Châu Giang"} phone={"0915 303 xxx"} address={"Phú Hưng, tp.Bến Tre, Bến Tre"} />
            <Address fullName={"Ngọc Thức"} phone={"0915 303 xxx"} address={"Thốt Nốt, Cần Thơ"} /> */}
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <p>THÊM ĐỊA CHỈ NHẬN HÀNG</p>
            <AddAddress />

            </div>
            <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab" tabIndex="0">
                {
                    order.map((item, index) => {
                        return (
                            <History key={index} date={item.createdAt.split("T")[0]} status={item.isDelivered?'Đã giao':(item.isPaid?'Đã thanh toán':'Chưa thanh toán')} address={item.shippingAddress.address} detail={item.orderItems.map((orderItem)=>(orderItem.name)).join(", ")} price={item.totalPrice} />
                        )
                    })
                }
            {/* <History date={"22/10/2023"} status={"Done"} address={"Châu Giag, Phú Hưng, tp. Bến Tre, Bến Tre"} detail={"Son Ofelia"} price="239.000 vnđ" ></History> */}
            </div>
            
            <div className="tab-pane fade" id="nav-like" role="tabpanel" aria-labelledby="nav-like-tab" tabIndex="0">
            <LikedProduct/>
            </div>
            </div>
            </div>
            
        </>
    )
};
export default memo(UserInfo);