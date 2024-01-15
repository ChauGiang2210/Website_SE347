import { memo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from "component/banner/banner";
import "./style.scss";
import { Link } from "react-router-dom";
import Delete from "component/delete/index";

const ProductManage = () =>
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
    const name = "Toner Simple";
    const produce = "Simple";
    const quantity = "30";
    return (
        <>
            <div className="Manage">
            <h3>QUẢN LÝ KHO HÀNG</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <Link to = "/admin/productmanage/addproduct"><button type="button" className="btn btn-outline-secondary btn_cus">Thêm sản phẩm</button></Link>
            {/* <button type="button" className="btn btn-outline-secondary btn_cus">Xóa sản phẩm</button>
            <button type="button" className="btn btn-outline-secondary btn_cus">Sửa sản phẩm</button> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên mặt hàng</th>
                    <th scope="col">Nhà sản xuất</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><Link to ="/admin/productmanage/fixproduct" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><Link to ="/admin/productmanage/fixproduct" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link"onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><Link to ="/admin/productmanage/fixproduct" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link"onClick={handleDeleteClick}>Xóa</Link></td>
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
export default memo(ProductManage);