import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddAddress = () =>
{
    return (
        <>
            <div className="input-group mb-3" style={{width: "80%"}}>
            <span className="input-group-text" id="fullName">Tên người nhận</span>
            <input type="text" className="form-control" placeholder="Nhập tên người nhận" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="form-floating" style={{width: "80%"}}>
            <input type="phone" className="form-control" id="phone" placeholder="Nhập số điện thoại người nhận"/>
            <label htmlFor="floatingPassword">Số điện thoại</label>
            </div>
            <div className="form-floating mb-3" style={{width: "80%"}}>
            <input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ người nhận"/>
            <label htmlFor="floatingInput">Địa chỉ</label>
            </div>
        </>
    )
};
export default memo(AddAddress);