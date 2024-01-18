import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const AddUser = () =>
{
    return (
        <div className='addUser'>
            <h3>THÊM THÔNG TIN NGƯỜI DÙNG</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">User Name:</span>
            <input type="text" className="form-control" placeholder="Nhập tên người dùng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nhập Email" aria-label="Nhập Email" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">@gmail.com</span>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Password:</span>
            <input type="text" className="form-control" placeholder="Nhập mật khẩu" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Password:</span>
            <input type="text" className="form-control" placeholder="Nhập lại mật khẩu" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">Phân quyền:</label>
            <select className="form-select" id="inputGroupSelect01">
                <option defaultValue={0}>Choose...</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </select>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary btn_cus">Thêm người dùng</button>
            </div>
                    </div>
    )
};
export default memo(AddUser);