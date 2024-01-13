import { memo } from "react";
import "./order.scss";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Banner from "component/banner/banner";
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () =>
{
    const breadcrumbDividerStyle = {
        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
      };
    return (
        <div>
            {/* <div className="row">
                <div className='banner-left'>
                    <h3>THÔNG TIN SẢN PHẨM </h3>
                </div>
                <div className='banner-right'>
                </div>
            </div> */}
           <nav style={breadcrumbDividerStyle} aria-label="breadcrumb">
            <ol className="breadcrumb dir">
                <li className="breadcrumb-item"><a href="/" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}}>Trang chủ</a></li>
                <li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
            </ol>
            </nav>
            <div class="banner">
            <h3>THÔNG TIN SẢN PHẨM</h3>
            <hr class="border border-secondary border-2 opacity-50"></hr>
            </div>
            <div className="row">
                <img className="product-image" src={process.env.PUBLIC_URL + '/son-demo.jpg'} alt="product-image" />
                <div className="Product-info">
                    <p id="p-name">Son Kem Black Rouge Air Fit Velvet Tint Ver 2 36.6g</p>
                    <p>Thương hiệu: </p>
                    <p>Loại sản phẩm: </p>
                    <p>Giá thành: </p>
                <div className="buy">
                    {/* <form>
                    <table className="table_order" cellPadding={"10px"} cellSpacing={"10px"}>
                        <tr></tr>
                        <tr>
                            <td>Số lượng:</td>
                            <td><input name="sl" type='number' id='sl' size='20' maxlength='10' class="text" min="1" value="1"></input></td>
                        </tr>
                        <tr>
                        <td><button type="button" className="btn btn-outline-secondary btn_cus">Thêm vào giỏ hàng
                            <Link to={""}><MdOutlineShoppingCart className='icon-buy' /></Link></button></td>
                        <td><button type="button" className="btn btn-outline-secondary btn_cus">Mua Ngay
                            <Link to={""}><MdOutlineShoppingCart className='icon-buy' /></Link></button></td>
                        </tr>
                    </table>
                    </form> */}
                    <form className="form_buy">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Số lượng:</label>
                        <input name="sl" type='number' id='sl' size='20' maxlength='10' class="form-control" min="1"></input>
                    </div>
                    <button type="button" className="btn_cus_ btn btn-outline-secondary">Thêm vào giỏ hàng
                            <Link to={""}></Link></button>
                    <button type="button" className="btn btn-outline-secondary btn_cus_">Mua Ngay
                            <Link to={""}><MdOutlineShoppingCart className='icon-buy' /></Link></button>
                    </form>
                </div>
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