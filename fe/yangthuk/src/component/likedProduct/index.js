import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LikedProduct = () =>
{
    return (
        <>
            <div class="card mb-3" style={{width: "70%", margin:"10px"}}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src={process.env.PUBLIC_URL + '/son-demo.jpg'} class="img-fluid rounded-start" alt="..."style={{ maxWidth: "170px" }}/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm: Son kem Blackrouge</h5>
                    <p class="card-text">Thương hiệu: BlackRouge</p>
                    <p class="card-text">Loại sản phẩm: Son</p>
                    <p class="card-text">Giá: 139.000 VNĐ</p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
};
export default memo(LikedProduct);