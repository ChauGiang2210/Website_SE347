import { memo } from "react";
import "./order.scss";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Order = () =>
{
    return (
        <div>
            <div className="row">
                <div className='banner-left'>
                    <h3>THÔNG TIN SẢN PHẨM </h3>
                </div>
                <div className='banner-right'>
                    {/* <h3>img</h3> */}
                </div>
            </div>
            <div className="row">
                <img className="product-image" src={process.env.PUBLIC_URL + '/son-demo.jpg'} alt="product-image" />
                <div className="Product-info">
                    <p id="p-name">Son Kem Black Rouge Air Fit Velvet Tint Ver 2 36.6g</p>
                    <p>Thương hiệu: </p>
                    <p>Loại sản phẩm: </p>
                    <p>Giá thành: </p>
                </div>
                <div className="buy">
                    <table>
                        <tr>
                        <form>
                            <td>Số lượng:</td>
                            <td><input name="sl" type='number' id='DuDoan' size='20' maxlength='10' class="text"></input></td>
                        </form>
                        </tr>
                        <tr>
                            <td><p>Thêm vào giỏ hàng: </p></td>
                            <td><Link to={""}><MdOutlineShoppingCart className='icon' /></Link></td>
                        </tr>
                    </table>

                </div>
            </div>
            <div className='Product-dis'>
                <h3>Mô tả sản phẩm: </h3>
                <br/>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
    )
};
export default memo(Order);