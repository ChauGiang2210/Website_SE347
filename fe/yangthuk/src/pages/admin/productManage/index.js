import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "component/banner/banner";
import "./style.scss";
import { Link } from "react-router-dom";

const ProductManage = () =>
{
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
                    <td><a href="#" className="card-link">Sửa</a></td>
                    <td><a href="#" className="card-link">Xóa</a></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><a href="#" className="card-link">Sửa</a></td>
                    <td><a href="#" className="card-link">Xóa</a></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><a href="#" className="card-link">Sửa</a></td>
                    <td><a href="#" className="card-link">Xóa</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )

};
export default memo(ProductManage);