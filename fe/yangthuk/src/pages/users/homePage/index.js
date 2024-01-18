import { memo } from "react";
import "./style.scss";
import React from "react";
// import { SlArrowRight } from "react-icons/sl";
import Product from "../../../component/product/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../services/product"

const HomePage = () => {

    const fetchProductAll = async () => {
        const res = await getAllProducts()
        // console.log('res', res)
        return res
    }

    const { isLoading, data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000 })
    // console.log('products', products.products)
    // console.log('url', process.env.PUBLIC_URL + '/logo.png')
    // products = products.products
    var categorys = [];
    var brands = [];
    var skinTypes = [];

    // Lặp qua danh sách đối tượng
    for (var i = 0; i < products.products.length; i++) {
        var product = products.products[i];

        // Lưu tên và giá trị vào mảng tương ứng
        categorys.push(product.category);
        brands.push(product.brand);
        skinTypes.push(product.skinType);
    }

    categorys = new Set(categorys);
    brands = new Set(brands);
    skinTypes = new Set(skinTypes);

    // Chuyển đổi Set thành mảng
    categorys = [...categorys];
    brands = [...brands];
    skinTypes = [...skinTypes];

    // console.log('categorys', categorys)
    // console.log('brands', brands)
    // console.log('skinTypes', skinTypes)

    return (
        <div className="Home">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb dir">
                    <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: '16px' }}>Trang chủ</Link></li>
                </ol>
            </nav>

            <div>
                <div className='row'>
                    <div className="col-1 body-left">
                        <nav id="menu">
                            <base target="mainframe" />
                            <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sắp xếp theo thứ tự &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" className="dropdown-item" >Mới nhất</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Giá từ thấp đến cao</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Giá từ cao đến thấp</Link></li>

                                </ul>
                            </div>

                            <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Thương hiệu &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        brands.map((brand) => (
                                            <li><Link to="#" className="dropdown-item" >{brand}</Link></li>
                                        ))
                                    }
                                    {/* <li><Link to="#" className="dropdown-item" >Unilever</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Romand</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Simple</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Black Rouge</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Maybelline</Link></li>
                                    <li><Link to="#" className="dropdown-item" >L'oreal</Link></li> */}
                                </ul>
                            </div>

                            <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Loại sản phẩm &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        categorys.map((category) => (
                                            <li><Link to="#" className="dropdown-item" >{category}</Link></li>
                                        ))
                                    }
                                    {/* <li><Link to="#" className="dropdown-item" >Làm sạch</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Toner/lotion</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Serum</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Dưỡng ẩm</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Chống nắng</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Trang điểm</Link></li> */}
                                </ul>
                            </div>

                            <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Loại da &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        skinTypes.map((skinType) => (
                                            <li><Link to="#" className="dropdown-item" >{skinType}</Link></li>
                                        ))
                                    }
                                    {/* <li><Link to="#" className="dropdown-item" >Làm sạch</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Toner/lotion</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Serum</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Dưỡng ẩm</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Chống nắng</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Trang điểm</Link></li> */}
                                </ul>
                            </div>

                            {/* <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    HOT DEAL &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" className="dropdown-item" >Giảm giá 20%</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Mua 1 tặng 1</Link></li>
                                </ul>
                            </div> */}
                        </nav>
                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                    </div>

                    <div className="col-2 body-right">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {isLoading && <p>Loading...</p>}
                            {products && products.products.map((product) => (
                                <Product key={product.id} name={product.name} price={product.price} brand={product.brand} srcImg={process.env.PUBLIC_URL + product.imageUrl} />
                            ))}
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomePage);
