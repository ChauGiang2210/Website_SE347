import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const AddUser = () =>
{
    return (
        <div className='addUser'>
            <h3>THÊM THÔNG TIN NGƯỜI DÙNG</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">User Name:</span>
            <input type="text" class="form-control" placeholder="Nhập tên người dùng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Nhập Email" aria-label="Nhập Email" aria-describedby="basic-addon2"/>
            <span class="input-group-text" id="basic-addon2">@gmail.com</span>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Password:</span>
            <input type="text" class="form-control" placeholder="Nhập mật khẩu" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Password:</span>
            <input type="text" class="form-control" placeholder="Nhập lại mật khẩu" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Phân quyền:</label>
            <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </select>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Địa chỉ:</span>
            <input type="text" class="form-control" placeholder="Nhập địa chỉ" aria-label="." aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Số điện thoại:</span>
            <input type="phone" class="form-control" placeholder="Nhập số điện thoại liên lạc" aria-label="-" aria-describedby="basic-addon1"/>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary btn_cus">Thêm người dùng</button>
            </div>
                    </div>
    )
};
export default memo(AddUser);