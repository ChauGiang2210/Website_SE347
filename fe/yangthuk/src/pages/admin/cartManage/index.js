import { memo,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { Link } from "react-router-dom";
import Delete from "component/delete/index";
import { getAllOrders } from "../../../services/order"
import Loading from "../../../component/LoadingComponent";
import { useQuery } from "@tanstack/react-query";

const CartManage = () =>
{
    const [loading, setLoading] = useState(false);

    const fetchOrderAll = async () => {
        const res = await getAllOrders()
        // console.log('res', res)
        return res
    }

    const { isSuccess, isLoading, data: orders } = useQuery({ queryKey: ['orders'], queryFn: fetchOrderAll, retry: 3, retryDelay: 1000 })
    // console.log(orders.orders)


    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const handleDeleteClick = () => {
        // Mở modal xóa khi click vào liên kết "Xóa"
        setDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
        // Thực hiện hành động xóa ở đây
        // Đóng modal xóa
        setDeleteModalVisible(false);
    };
    // const name = "Châu Giang"
    // const address = "Bến Tre"
    // const phone = "0915 303 xxx"
    // const list_product = "toner, kem chống nắng"
    // const price = "500.000 VNĐ"
    return (
        <Loading isLoading={isLoading||loading}>
            <div className="Manage">
            <h3>QUẢN LÝ ĐƠN HÀNG</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <Link to ="/admin/cartmanage/addorder"><button type="button" className="btn btn-outline-secondary btn_cus">Thêm đơn hàng</button></Link>
            {/* <button type="button" className="btn btn-outline-secondary btn_cus">Xóa sản phẩm</button>
            <button type="button" className="btn btn-outline-secondary btn_cus">Sửa sản phẩm</button> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Danh sách hàng hóa</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.orders?.map((order, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{order.shippingAddress.fullName}</td>
                                <td>{order.shippingAddress.address}</td>
                                <td>{order.shippingAddress.phone}</td>
                                <td>{order.orderItems.map((orderItem)=>orderItem.name).join(", ")}</td>
                                <td>{order.totalPrice}</td>
                                <td><Link to ="/admin/cartmanage/fixorder" className="card-link">Sửa</Link></td>
                                <td><Link to ="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                    <td>{list_product}</td>
                    <td>{price}</td>
                    <td><Link to ="/admin/cartmanage/fixorder" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr>
                    
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                    <td>{list_product}</td>
                    <td>{price}</td>
                    <td><Link to ="/admin/cartmanage/fixorder" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr> */}
                </tbody>
            </table>
            </div>
            {isDeleteModalVisible && (
                <Delete onClose={() => setDeleteModalVisible(false)} onConfirm={handleDeleteConfirm} />
            )}
        </Loading>
    )

};
export default memo(CartManage);