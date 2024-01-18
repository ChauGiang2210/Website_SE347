import { memo, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { useMutationHook } from '../../hooks/useMutationHook';
import { updateUser } from "../../services/user";
import { updateUser as updateUserRedux } from "../../redux/slides/userSlide";
import { useDispatch } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const mutation = useMutationHook(
        (data) => {
            const { id, ...rests } = data
            return updateUser(id, rests)
        }
    )

    const { data, isSuccess } = mutation

    useEffect(() => {
        setUsername(user.username)
        setEmail(user.email)
        setPassword('')
        setRole(user.role)
    }, [user])

    useEffect(() => {
        if (mutation.isError || (isSuccess && !data?.success)) {
            alert("Cập nhật thất bại");
        }
        if (isSuccess && data?.success) {
            alert("Cập nhật thành công")
            // console.log(data);
            dispatch(updateUserRedux(data.user))
        }
        else {
            // alert("Cập nhật thất bại")
        }
    }, [isSuccess])

    const handleUsernameChange = () => {
        return (e) => {
            setUsername(e.target.value);
        }
    }

    const handleEmailChange = () => {
        return (e) => {
            setEmail(e.target.value);
        }
    }

    const handlePasswordChange = () => {
        return (e) => {
            setPassword(e.target.value);
        }
    }

    const handleOnChangeRole = () => {
        return (e) => {
            setRole(e.target.value)
        }
    }

    function isValidForm() {
        return email &&
            email.trim() !== "" &&
            password &&
            password.trim() !== ""
            ? true
            : false;
    }

    const handleOnClickUpdate = async () => {
        mutation.mutate({ id: user?.id, username, email, password, role })
    }


    return (
        <>
            <table className="table table-borderless" style={{ width: "50%" }}>
                <tbody>
                    <tr>
                        <td>Họ và tên: </td>
                        <td><input type="text" value={username} 
                            onChange={handleUsernameChange()} /></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type="text" value={email} 
                            onChange={handleEmailChange()} /></td>
                    </tr>
                    <tr>
                        <td>Mật khẩu: </td>
                        <td><input type="text" value={password} 
                            onChange={handlePasswordChange()} /></td>
                    </tr>
                    <tr>
                        <td>Quyền: </td>
                        <td><select className="form-select" aria-label="Default select example" 
                                    value={role}
                                    onChange={handleOnChangeRole()}
                                    >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="button" className="btn btn-primary"
                                onClick={handleOnClickUpdate}
                                disabled={!isValidForm()}
                                >Cập nhật</button></td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
};
export default memo(Profile);