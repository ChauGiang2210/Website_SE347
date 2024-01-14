import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LikedProduct = () =>
{
    return (
        <>
            <div className="card mb-3" style={{width: "70%", margin:"10px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + '/son-demo.jpg'} className="img-fluid rounded-start" alt="..."style={{ maxWidth: "170px" }}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Tên sản phẩm: Son kem Blackrouge</h5>
                    <p className="card-text">Thương hiệu: BlackRouge</p>
                    <p className="card-text">Loại sản phẩm: Son</p>
                    <p className="card-text">Giá: 139.000 VNĐ</p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
};
export default memo(LikedProduct);