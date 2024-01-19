import { memo } from "react";
import "./cartProduct.scss";

const CartProduct = ({ name, brand, category, price, amount, img }) => {
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
                <img src={img} className="img-fluid rounded-start" alt="..."style={{ maxWidth: "100px" }}/>
                </div>
                <div className="col-md-8">
                <div className="card-body" style={{lineHeight: "1"}}>
                    <h5 className="card-title ">{name} 
                    <a className='tick'>
                   {/* <input type="checkbox" id="accept" /> */}
                   </a></h5>
                    {/* <p className="card-text">Thương hiệu: {brand}</p>
                    <p className="card-text">Loại sản phẩm: {category}</p> */}
                    <p className="card-text">Giá: {price}</p>
                    <p className="card-text">Số lượng: {amount}</p>
                    {/* <form>
                   <p><span>Số lượng: &nbsp;</span>
                   <input name="sl" type='number' id='sl' size='20' maxLength='10' className="text" min="1"></input>
                   </p>
               </form> */}
             </div>
                </div>
            </div>
            </div>
  );
};

export default memo(CartProduct);
