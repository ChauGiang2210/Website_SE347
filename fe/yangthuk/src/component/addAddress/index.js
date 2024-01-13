import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddAddress = () =>
{
    return (
        <>
            <div class="input-group mb-3" style={{width: "80%"}}>
            <span class="input-group-text" id="basic-addon1">Tên người nhận</span>
            <input type="text" class="form-control" placeholder="Nhập tên người nhận" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="form-floating mb-3" style={{width: "80%"}}>
            <input type="text" class="form-control" id="floatingInput" placeholder="Nhập địa chỉ người nhận"/>
            <label for="floatingInput">Địa chỉ</label>
            </div>
            <div class="form-floating" style={{width: "80%"}}>
            <input type="phone" class="form-control" id="floatingPassword" placeholder="Nhập số điện thoại người nhận"/>
            <label for="floatingPassword">Số điện thoại</label>
            </div>
        </>
    )
};
export default memo(AddAddress);