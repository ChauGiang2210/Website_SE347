import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () =>
{
    return (
        <>
            <table class="table table-borderless" style={{width: "50%"}}>
            <tbody>
                <tr>
                <td>Họ và tên: </td>
                <td>Châu Giang</td>
                </tr>
                <tr>
                <td>Email: </td>
                <td>chaugiang2210@gmail.com</td>
                </tr>
                {/* <tr>
                <td>Địa chỉ: </td>
                <td>Phú Hưng, tp.Bến Tre, Bến Tre</td>
                </tr>
                <tr>
                <td>Số điện thoại: </td>
                <td>0915 303 xxx</td>
                </tr> */}
                <tr>
                </tr>
            </tbody>
            </table>
        </>
    )
};
export default memo(Profile);