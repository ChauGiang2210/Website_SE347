import { memo } from "react";
import "./style.scss";
import React from "react";
// import { SlArrowRight } from "react-icons/sl";
import Product from "../../../component/product/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="Home">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb dir">
                <li className="breadcrumb-item"><Link to ="/" style={{textDecoration: "none", color: "inherit" ,fontSize: '16px'}}>Trang chủ</Link></li>
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
                                <li><Link to = "#" className="dropdown-item" >Mới nhất</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Giá từ thấp đến cao</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Giá từ cao đến thấp</Link></li>
                                
                            </ul>
                            </div>

                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Thương hiệu &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link to = "#" className="dropdown-item" >Unilever</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Romand</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Simple</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Black Rouge</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Maybelline</Link></li>
                                <li><Link to = "#" className="dropdown-item" >L'oreal</Link></li>
                            </ul>
                            </div>

                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Loại sản phẩm &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link to = "#" className="dropdown-item" >Làm sạch</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Toner/lotion</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Serum</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Dưỡng ẩm</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Chống nắng</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Trang điểm</Link></li>
                            </ul>
                            </div>

                            <div className="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                HOT DEAL &nbsp;
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link to = "#" className="dropdown-item" >Giảm giá 20%</Link></li>
                                <li><Link to = "#" className="dropdown-item" >Mua 1 tặng 1</Link></li>
                            </ul>
                            </div>
                            {/* <Link to = "#" href="">Thương hiệu <SlArrowRight /></Link>
                            <Link to = "#" href="">Loại sản phẩm <SlArrowRight /></Link>
                            <Link to = "#" href="">Loại da <SlArrowRight /></Link>
                            <Link to = "#" href="">HOT DEAL <SlArrowRight /></Link> */}
                        </nav>
                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                    </div>
                    <div className="col-2 body-right">
                        <Product name={"Son kem Black Rouge"} price={"239.000 VNĐ"} brand={"Black Rouge"} srcImg={process.env.PUBLIC_URL + '/move1.jpg'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomePage);
