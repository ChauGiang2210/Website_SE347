import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const AddOrder = () =>
{
    return (
        <div className='addUser'>
            <h3>THÊM ĐƠN HÀNG</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Tên khách hàng:</span>
            <input type="text" class="form-control" placeholder="Nhập tên khách hàng" aria-label="-" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Địa chỉ:</span>
            <input type="text" class="form-control" placeholder="Nhập địa chỉ giao hàng" aria-label="-" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Số điện thoại:</span>
            <input type="number" class="form-control" placeholder="Nhập số điện thoại giao hàng" aria-label="-" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Danh sách hàng hóa:</span>
            <input type="text" class="form-control" placeholder="Nhập danh sách hàng hóa:" aria-label="-" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Thành tiền:</span>
            <input type="number" class="form-control" placeholder="_" aria-label="-" aria-describedby="basic-addon1"/>
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary btn_cus">Thêm đơn hàng</button>
            </div>
                    </div>
    )
};
export default memo(AddOrder);