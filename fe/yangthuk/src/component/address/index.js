import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Address = ({name, phone, address}) =>
{
    return (
        <>
            <div class="card mb-3" style={{width: "80%"}}>
            <h5 class="card-header">{name}</h5>
            <div class="card-body">
                <p class="card-text">SĐT: {phone}</p>
                <p class="card-text">Địa chỉ: {address}</p>
            </div>
            </div>
        </>
    )
};
export default memo(Address);