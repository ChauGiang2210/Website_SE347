import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const History = ({ address, date, detail, status, price}) =>
{
    return (
        <>
            <div class="card mb-3" style={{width: "80%", margin: "10px"}}>
            <h5 class="card-header">Đơn hàng</h5>
            <div class="card-body">
                <p class="card-text">Ngày giao hàng: {date}</p>
                <p class="card-text">Địa chỉ giao hàng: {address}</p>
                <p class="card-text">Chi tiết đơn hàng: {detail}</p>
                <p class="card-text">Thành tiền: {price}</p>
                <p class="card-text">Trạng thái đơn hàng: {status}</p>
            </div>
            </div>
        </>
    )
};
export default memo(History);