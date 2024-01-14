import { memo } from "react";
import "./cartProduct.scss";

const CartProduct = ({ index }) => {
  return (
    // <div className="row cartProduct">
    //   <img
    //     key={`cart${index + 1}`}
    //     className="cartImage"
    //     src={process.env.PUBLIC_URL + `/cart${index + 1}.jpg`}
    //     id={`cart${index + 1}`}
    //     alt={`cart${index + 1}`}
    //   />
    //   <div className="cartInfo">
    //     <p>Tên sản phẩm: </p>
    //     <p>Giá thành: </p>
    //     <form>
    //         <p><span>Số lượng: &nbsp;</span>
    //         <input name="sl" type='number' id='sl' size='20' maxlength='10' class="text" min="1"></input>
    //         </p>
    //     </form>
    //   </div>
    //   <div className='tick'>
    //         <input type="checkbox" id="accept" />
    //   </div>
    // </div>
    <div className="card mb-3 cartProduct" style={{width: "auto", margin:"10px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + `/cart${index + 1}.jpg`} className="img-fluid rounded-start" alt="..."style={{ maxWidth: "170px" }}/>
                </div>
                <div className="col-md-8">
                <div className="card-body" style={{lineHeight: "1"}}>
                    <h5 className="card-title ">Tên sản phẩm: Son kem Blackrouge 
                    <a className='tick'>
                   <input type="checkbox" id="accept" />
                   </a></h5>
                    <p className="card-text">Thương hiệu: BlackRouge</p>
                    <p className="card-text">Loại sản phẩm: Son</p>
                    <p className="card-text">Giá: 139.000 VNĐ</p>
                    <form>
                   <p><span>Số lượng: &nbsp;</span>
                   <input name="sl" type='number' id='sl' size='20' maxLength='10' className="text" min="1"></input>
                   </p>
               </form>
               
             
             </div>
                </div>
            </div>
            </div>
  );
};

export default memo(CartProduct);
