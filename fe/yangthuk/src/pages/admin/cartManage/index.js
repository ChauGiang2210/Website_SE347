import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { Link } from "react-router-dom";

const CartManage = () =>
{
    return (
        <>
            <div class="Manage">
            <h3>QUẢN LÝ ĐƠN HÀNG</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            <Link to ="/admin/cartmanage/addorder"><button type="button" class="btn btn-outline-secondary btn_cus">Thêm đơn hàng</button></Link>
            {/* <button type="button" class="btn btn-outline-secondary btn_cus">Xóa sản phẩm</button>
            <button type="button" class="btn btn-outline-secondary btn_cus">Sửa sản phẩm</button> */}
            <table class="table table-striped table-hover">
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
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><a href="#" class="card-link">Xóa</a></td>
                    <td><a href="#" class="card-link">Sửa</a></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><a href="#" class="card-link">Xóa</a></td>
                    <td><a href="#" class="card-link">Sửa</a></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><a href="#" class="card-link">Xóa</a></td>
                    <td><a href="#" class="card-link">Sửa</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )

};
export default memo(CartManage);