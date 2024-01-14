import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const History = ({ address, date, detail, status, price}) =>
{
    return (
        <>
            <div className="card mb-3" style={{width: "80%", margin: "10px"}}>
            <h5 className="card-header">Đơn hàng</h5>
            <div className="card-body">
                <p className="card-text">Ngày giao hàng: {date}</p>
                <p className="card-text">Địa chỉ giao hàng: {address}</p>
                <p className="card-text">Chi tiết đơn hàng: {detail}</p>
                <p className="card-text">Thành tiền: {price}</p>
                <p className="card-text">Trạng thái đơn hàng: {status}</p>
            </div>
            </div>
        </>
    )
};
export default memo(History);