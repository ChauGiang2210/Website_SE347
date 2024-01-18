import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const FixProduct = () =>
{
    
    return (
        <div className='addUser'>
            <h3>CHỈNH SỬA THÔNG TIN SẢN PHẨM</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <div className="input-group mb-3">
            <span className="input-group-text" id="name">Tên mặt hàng:</span>
            <input type="text" className="form-control" placeholder="Nhập tên mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Hình ảnh mặt hàng:</label>
            <input className="form-control" type="file" id="imageUrl"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="brand">Thương hiệu:</span>
            <input type="text" className="form-control" placeholder="Nhập tên nhà sản xuất" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="skinType">Loại da:</span>
            <input type="text" className="form-control" placeholder="Nhập loại da phù hợp" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="description">Mô tả:</span>
            <input type="text" className="form-control" placeholder="Nhập mô tả mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
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
export default memo(FixProduct);