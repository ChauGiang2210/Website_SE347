import { memo,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { Link } from "react-router-dom";
import Delete from "component/delete/index";

const CartManage = () =>
{
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
    const name = "Châu Giang"
    const address = "Bến Tre"
    const phone = "0915 303 xxx"
    const list_product = "toner, kem chống nắng"
    const price = "500.000 VNĐ"
    return (
        <>
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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
            </div>
            {isDeleteModalVisible && (
                <Delete onClose={() => setDeleteModalVisible(false)} onConfirm={handleDeleteConfirm} />
            )}
        </>
    )

};
export default memo(CartManage);