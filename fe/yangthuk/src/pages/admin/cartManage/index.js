import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { Link } from "react-router-dom";

const CartManage = () =>
{
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
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                    
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                    <td>{list_product}</td>
                    <td>{price}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )

};
export default memo(CartManage);