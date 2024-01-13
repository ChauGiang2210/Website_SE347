import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const AddProduct = () =>
{
    return (
        <div className='addUser'>
            <h3>THÊM SẢN PHẨM</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Tên mặt hàng:</span>
            <input type="text" class="form-control" placeholder="Nhập tên mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>
            <div class="mb-3">
            <label for="formFile" class="form-label">Hình ảnh mặt hàng:</label>
            <input class="form-control" type="file" id="formFile"/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nhà sản xuất:</span>
            <input type="text" class="form-control" placeholder="Nhập tên nhà sản xuất" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Số lượng:</span>
            <input type="number" class="form-control" placeholder="Nhập số lượng mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary btn_cus">Thêm mặt hàng</button>
            </div>
                    </div>
    )
};
export default memo(AddProduct);