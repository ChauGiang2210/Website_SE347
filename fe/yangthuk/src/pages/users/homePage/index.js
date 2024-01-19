import { memo, useEffect } from "react";
import "./style.scss";
import React from "react";
// import { SlArrowRight } from "react-icons/sl";
import Product from "../../../component/product/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../services/product"
import { useState } from "react";
import Loading from "../../../component/LoadingComponent";
import { useSelector } from "react-redux";
import { resetSearch } from "../../../redux/slides/productSlide";
import { useDispatch } from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [categorys, setCategorys] = useState([]);
    const [brands, setBrands] = useState([]);
    const [skinTypes, setSkinTypes] = useState([]);
    const [productState, setProductState] = useState([])
    const [search, setSearch] = useState('');

    
    const fetchProductAll = async () => {
        setLoading(true)
        const res = await getAllProducts()
        // console.log('res', res)
        setLoading(false)
        return res
    }
    
    const { isSuccess ,isLoading, data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000 })
    // console.log('products', products.products)
    // console.log('url', process.env.PUBLIC_URL + '/logo.png')
    // products = products.products
    
    const product = useSelector((state) => state.product)
    // console.log('product', product.search)

    useEffect(() => {
        if (isSuccess) {
            setSearch(product?.search)
            if (product?.search!=='') {
                filterProducts('name', product?.search)
            }
            else {
                setProductState(products.products)
            }
            // filterProducts('name', search)
            // dispatch(resetSearch())

        }
    }, [product])
    
    const fetchProductAllCategory = async () => {
        setLoading(true)
        const res = await getAllProducts()
        if (!res?.success) {
            return
        }

        // console.log('res', res)
        const products = res.products;
        var categorys = [];
        var brands = [];
        var skinTypes = [];
    
        // // Lặp qua danh sách đối tượng
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
    
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

        setCategorys(categorys);
        setBrands(brands);
        setSkinTypes(skinTypes);
    
        // console.log('categorys', categorys)
        // console.log('brands', brands)
        // console.log('skinTypes', skinTypes)
        setLoading(false)
        return res
    }

    useEffect(() => {
        fetchProductAllCategory()
        if (isSuccess) {
            setProductState(products.products)
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            setProductState(products.products)
        }
    }, [isSuccess, isLoading])


    const sortProducts = (property, direction) => {
        const sortedProducts = [...productState].sort((a, b) => {
          if (direction === 'asc') {
            return a[property] - b[property];
          } else {
            return b[property] - a[property];
          }
        });
    
        setProductState(sortedProducts);
        console.log('sortedProducts', sortedProducts)
      };

    const filterProducts = (property, value) => {
        const filteredProducts = [...products.products].filter((product) => product[property] === value);
    
        setProductState(filteredProducts);
        console.log('filteredProducts', filteredProducts)
      }



    return (
        <Loading isLoading={isLoading || loading}>
        <div className="Home">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb dir">
                    <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: '16px' }}>Trang chủ</Link></li>
                </ol>
            </nav>

            <div>
                <div className='row'>
                    <div className="col-1 body-left d-none d-sm-block">
                        <nav id="menu">
                            <base target="mainframe" />
                            <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sắp xếp theo thứ tự &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    {/* <li><Link to="#" className="dropdown-item" 
                                        
                                    >Mới nhất</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Giá từ thấp đến cao</Link></li>
                                    <li><Link to="#" className="dropdown-item" >Giá từ cao đến thấp</Link></li> */}
                                    <li><button className="btn"
                                    onClick={() => sortProducts('price', 'desc')}
                                    >Giá từ cao tới thấp</button></li>
                                    <li><button className="btn"
                                    onClick={() => sortProducts('price', 'asc')}
                                    >Giá từ thấp tới cao</button></li>

                                </ul>
                            </div>

                            <div className="btn-group dropend" style={{ margin: "2%", width: "200px" }}>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Thương hiệu &nbsp;
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        // brands.map((brand,index) => (
                                        //     <li key={index}><Link to="#" className="dropdown-item" >{brand}</Link></li>
                                        // ))
                                        brands.map((brand,index) => (
                                            <li key={index}>
                                            <button className="btn" onClick={() => filterProducts('brand', brand)}>{brand}</button>
                                            </li>
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
                                        // categorys.map((category,index) => (
                                        //     <li key={index}><Link to="#" className="dropdown-item" >{category}</Link></li>
                                        // ))
                                        categorys.map((category,index) => (
                                            <li key={index}>
                                            <button className="btn" onClick={() => filterProducts('category', category)}>{category}</button>
                                            </li>
                                        ))
                                    }
                                    {/* <li>
                                    <button onClick={() => filterProducts('category', 'Skincare')}>Lọc sản phẩm Skincare</button>
                                    </li> */}
                                        
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
                                        skinTypes.map((skinType,index) => (
                                            <li key={index}>
                                                <button className="btn" onClick={() => filterProducts('skinType', skinType)}>{skinType}</button>
                                            </li>
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
                            {isLoading ? <p>Loading...</p>:
                            productState.map((product) => (
                                <Product key={product._id} id={product._id} name={product.name} price={product.price} brand={product.brand} srcImg={process.env.PUBLIC_URL + product.imageUrl} />
                                // <Product key={product._id} name={product.name} price={product.price} brand={product.brand} srcImg={process.env.PUBLIC_URL + '/move1.jpg'} />
                            ))}
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        </Loading>
    );
};

export default memo(HomePage);
