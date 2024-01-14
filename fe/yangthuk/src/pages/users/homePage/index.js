import { memo, useEffect } from "react";
import "./style.scss";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Product from "../../../component/product/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllProducts } from "../../../services/product";

const HomePage = () => {
    const [products, setProducts] = React.useState([]);
    const fetchAllProducts = async () => {
        const res = await getAllProducts();
        // console.log(res);
        if (res?.data?.data) setProducts(res.data.data)
    }
    useEffect(() => {
        fetchAllProducts()
    }, []);

    return (
        <div className="Home">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb dir">
                <li className="breadcrumb-item"><a href="/" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}}>Trang chủ</a></li>
                </ol>
            </nav>
            
            <div>
                <div className='row'>
                    <div className="col-1 body-left">
                        <nav id="menu">
                            <base target="mainframe" />
                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Sắp xếp theo thứ tự &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mới nhất</a></li>
                                <li><a className="dropdown-item" href="#">Giá từ thấp đến cao</a></li>
                                <li><a className="dropdown-item" href="#">Giá từ cao đến thấp</a></li>
                                
                            </ul>
                            </div>

                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Thương hiệu &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Unilever</a></li>
                                <li><a className="dropdown-item" href="#">Romand</a></li>
                                <li><a className="dropdown-item" href="#">Simple</a></li>
                                <li><a className="dropdown-item" href="#">Black Rouge</a></li>
                                <li><a className="dropdown-item" href="#">Maybelline</a></li>
                                <li><a className="dropdown-item" href="#">L'oreal</a></li>
                            </ul>
                            </div>

                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Loại sản phẩm &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Làm sạch</a></li>
                                <li><a className="dropdown-item" href="#">Toner/lotion</a></li>
                                <li><a className="dropdown-item" href="#">Serum</a></li>
                                <li><a className="dropdown-item" href="#">Dưỡng ẩm</a></li>
                                <li><a className="dropdown-item" href="#">Chống nắng</a></li>
                                <li><a className="dropdown-item" href="#">Trang điểm</a></li>
                            </ul>
                            </div>

                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                HOT DEAL &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Giảm giá 20%</a></li>
                                <li><a className="dropdown-item" href="#">Mua 1 tặng 1</a></li>
                            </ul>
                            </div>
                        </nav>
                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                    </div>
                    <div className="col-2 body-right">
                        {/* <Product name={"Son kem Black Rouge"} price={"239.000 VNĐ"} brand={"Black Rouge"} srcImg={process.env.PUBLIC_URL + '/move1.jpg'}/> */}
                        {products.map((item, index) => (
                            <Product key={index} name={item.name} price={item.price} brand={item.brand} srcImg={item.image}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomePage);
