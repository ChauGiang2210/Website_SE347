import { memo } from "react";
import "./total.scss"

const Total = () =>
{
    return (
            <div className='addUser'>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Thành tiền:</span>
                <input type="number" class="form-control" placeholder="_" aria-label="-" aria-describedby="basic-addon1"/>
                </div>
    
    
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Địa chỉ:</span>
                <input type="text" class="form-control" placeholder="Nhập địa chỉ giao hàng" aria-label="-" aria-describedby="basic-addon1"/>
                </div>
    
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Số điện thoại:</span>
                <input type="number" class="form-control" placeholder="Nhập số điện thoại giao hàng" aria-label="-" aria-describedby="basic-addon1"/>
                </div>
    
                <div class="col-auto col d-flex justify-content-center" >
                <button type="submit" class="btn btn-primary btn_cus">THANH TOÁN</button>
                </div>
                        </div>
    )
};
export default memo(Total);