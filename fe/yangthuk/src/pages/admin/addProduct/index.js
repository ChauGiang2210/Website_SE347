import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const AddProduct = () =>
{
    return (
        <div className='addUser'>
            <h3>THÊM SẢN PHẨM</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Tên mặt hàng:</span>
            <input type="text" className="form-control" placeholder="Nhập tên mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="mb-3">
            <label for="formFile" className="form-label">Hình ảnh mặt hàng:</label>
            <input className="form-control" type="file" id="formFile"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nhà sản xuất:</span>
            <input type="text" className="form-control" placeholder="Nhập tên nhà sản xuất" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Số lượng:</span>
            <input type="number" className="form-control" placeholder="Nhập số lượng mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary btn_cus">Thêm mặt hàng</button>
            </div>
                    </div>
    )
};
export default memo(AddProduct);