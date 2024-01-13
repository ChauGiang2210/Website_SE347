import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "component/banner/banner";
import "./style.scss";
import { Link } from "react-router-dom";

const ProductManage = () =>
{
    return (
        <>
            <div class="Manage">
            <h3>QUẢN LÝ KHO HÀNG</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            <Link to = "/admin/productmanage/addproduct"><button type="button" class="btn btn-outline-secondary btn_cus">Thêm sản phẩm</button></Link>
            {/* <button type="button" class="btn btn-outline-secondary btn_cus">Xóa sản phẩm</button>
            <button type="button" class="btn btn-outline-secondary btn_cus">Sửa sản phẩm</button> */}
            <table class="table table-striped table-hover">
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
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><a href="#" class="card-link">Sửa</a></td>
                    <td><a href="#" class="card-link">Xóa</a></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><a href="#" class="card-link">Sửa</a></td>
                    <td><a href="#" class="card-link">Xóa</a></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td><a href="#" class="card-link">Sửa</a></td>
                    <td><a href="#" class="card-link">Xóa</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )

};
export default memo(ProductManage);