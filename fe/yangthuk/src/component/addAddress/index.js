import { memo, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutationHook } from '../../hooks/useMutationHook';
import { addAddress } from "../../services/address";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const AddAddress = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const mutation = useMutationHook(
        (data) => {
            return addAddress(data)
        }
    )

    const { data, isSuccess, isError } = mutation

    useEffect(() => {
        if (isError || (isSuccess && !data?.success)) {
            alert("Thêm địa chỉ thất bại");
            console.log(data);
            navigate("/user")
        }
        if (isSuccess && data?.success) {
            alert("Thêm địa chỉ thành công")
            // console.log(data);
            // navigate("/user")
        }
        if (data?.success) {
            // alert("Thêm địa chỉ thành công")
            // console.log(data);
            navigate("/user")
        }
    }, [isSuccess, isError])

    const handleOnChangeFullName = (e) => {
        setFullName(e.target.value);
    }

    const handleOnChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleOnChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleOnClickAddAddress = () => {
        const userID = user.id
        console.log(userID, fullName, phone, address);
        mutation.mutate({ userID, fullName, phone, address })
    }


    return (
        <>
            <div className="input-group mb-3" style={{ width: "80%" }}>
                <span className="input-group-text" id="fullName">Tên người nhận</span>
                <input type="text" className="form-control" placeholder="Nhập tên người nhận" aria-label="Username" aria-describedby="basic-addon1" 
                    value={fullName}
                    onChange={handleOnChangeFullName}
                />
            </div>
            <div className="form-floating" style={{ width: "80%" }}>
                <input type="phone" className="form-control" id="phone" placeholder="Nhập số điện thoại người nhận" 
                    value={phone}
                    onChange={handleOnChangePhone}
                />
                <label htmlFor="floatingPassword">Số điện thoại</label>
            </div>
            <div className="form-floating mb-3" style={{ width: "80%" }}>
                <input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ người nhận" 
                    value={address}
                    onChange={handleOnChangeAddress}
                />
                <label htmlFor="floatingInput">Địa chỉ</label>
            </div>
            <button className="btn btn-outline-success btn_cus" type="button"
                onClick={handleOnClickAddAddress}
                disabled={!fullName || !phone || !address}
            >Thêm địa chỉ</button>
        </>
    )
};
export default memo(AddAddress);