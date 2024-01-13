import { memo } from "react";
import "./style.scss";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Product from "../../../component/product/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Popper.js

const HomePage = () => {
    return (
        <div className="Home">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb dir">
                    <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                </ol>
            </nav>
            
            <div>
                <div className='row'>
                    <div className="col-1 body-left">
                        <nav id="menu">
                            <base target="mainframe" />
                            <div class="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Sắp xếp theo thứ tự: &nbsp;
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Mới nhất</a></li>
                                <li><a class="dropdown-item" href="#">Giá từ thấp đến cao</a></li>
                                <li><a class="dropdown-item" href="#">Giá từ cao đến thấp</a></li>
                                
                            </ul>
                            </div>

                            <div class="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Thương hiệu: &nbsp;
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Unilever</a></li>
                                <li><a class="dropdown-item" href="#">Romand</a></li>
                                <li><a class="dropdown-item" href="#">Simple</a></li>
                                <li><a class="dropdown-item" href="#">Black Rouge</a></li>
                                <li><a class="dropdown-item" href="#">Maybelline</a></li>
                                <li><a class="dropdown-item" href="#">L'oreal</a></li>
                            </ul>
                            </div>

                            <div class="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Loại sản phẩm: &nbsp;
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Làm sạch</a></li>
                                <li><a class="dropdown-item" href="#">Toner/lotion</a></li>
                                <li><a class="dropdown-item" href="#">Serum</a></li>
                                <li><a class="dropdown-item" href="#">Dưỡng ẩm</a></li>
                                <li><a class="dropdown-item" href="#">Chống nắng</a></li>
                                <li><a class="dropdown-item" href="#">Trang điểm</a></li>
                            </ul>
                            </div>

                            <div class="btn-group dropend" style={{margin: "2%", width: "200px"}}>
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                HOT DEAL: &nbsp;
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Giảm giá 20%</a></li>
                                <li><a class="dropdown-item" href="#">Mua 1 tặng 1</a></li>
                            </ul>
                            </div>
                            {/* <a href="">Thương hiệu <SlArrowRight /></a>
                            <a href="">Loại sản phẩm <SlArrowRight /></a>
                            <a href="">Loại da <SlArrowRight /></a>
                            <a href="">HOT DEAL <SlArrowRight /></a> */}
                        </nav>
                        <img className='banner img-fluid' src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                    </div>
                    <div className="col-2 body-right">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomePage);
