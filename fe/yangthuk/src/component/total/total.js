import { memo } from "react";
import "./total.scss"

const Total = () =>
{
    return (
        <div className='total row'>
            <h3>TỔNG CỘNG</h3>
            <form>
            <table className="col-1 total-table">
                <tr>
                    <td>Tổng đơn giá: </td>
                    <td>xxxx</td>
                </tr>
                <tr>
                    <td>Địa chỉ: </td>
                    <td><textarea id="address" name="address" rows="4" cols="20" maxlength="60" class="text" border="10px" required="required" wrap="soft"></textarea></td>
                </tr>
                <tr>
                    <td>SĐT nhận hàng: </td>
                    <td><input name="Phone" type='tel' id='Phone' size='18' maxlength='10' class="text" border="5px"></input></td>
                </tr>
                <tr>
                    <td colspan="2" align="center"><input class="button" type="submit" name="btnDangNhap" id="btnDangNhap" value="Thanh toán"></input></td>
                </tr>
            </table>
            </form>
        </div>
    )
};
export default memo(Total);