import { memo } from "react";
import "./cartProduct.scss";

const CartProduct = ({ index }) => {
  return (
    <div className="row cartProduct">
      <img
        key={`cart${index + 1}`}
        className="cartImage"
        src={process.env.PUBLIC_URL + `/cart${index + 1}.jpg`}
        id={`cart${index + 1}`}
        alt={`cart${index + 1}`}
      />
      <div className="cartInfo">
        <p>Tên sản phẩm: </p>
        <p>Giá thành: </p>
        <form>
            <p><span>Số lượng: &nbsp;</span>
            <input name="sl" type='number' id='sl' size='20' maxlength='10' class="text" min="1"></input>
            </p>
        </form>
      </div>
      <div className='tick'>
            <input type="checkbox" id="accept" />
      </div>
    </div>
  );
};

export default memo(CartProduct);
