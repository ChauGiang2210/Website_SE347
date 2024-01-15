import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Address = ({fullName, phone, address}) =>
{
    return (
        <>
            <div className="card mb-3" style={{width: "80%"}}>
            <h5 className="card-header">{fullName}</h5>
            <div className="card-body">
                <p className="card-text">SĐT: {phone}</p>
                <p className="card-text">Địa chỉ: {address}</p>
            </div>
            </div>
        </>
    )
};
export default memo(Address);