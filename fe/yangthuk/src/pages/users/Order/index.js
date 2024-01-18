import { memo, useEffect, useState } from "react";
import "./order.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../services/product";
import Loading from "../../../component/LoadingComponent";
import { useSelector, useDispatch } from "react-redux";
import { addOrderProduct, resetOrder } from "../../../redux/slides/orderSlide";

const Order = () => {
    const [numProduct, setNumproduct] = useState(1);
    const order = useSelector((state) => state.order)
    const user = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const fetchProductById = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        const res = await getProductById(id)
        return res
    }

    const { isLoading, data: product } = useQuery({ queryKey: ['product', id], queryFn: fetchProductById, retry: 3, retryDelay: 1000, enabled: !!id })

    // console.log('product', product.product)

    useEffect(() => {
        
    }, [numProduct])

    useEffect(() => {
        if(order.isSucessOrder) {
            alert('Đã thêm vào giỏ hàng')
        }
        return () => {
            // dispatch(resetOrder())
        }
    }, [order.isSucessOrder])

    const handleNumproductChange = (e) => {
        setNumproduct(Number(e.target.value))
        // console.log('quantity', quantity)
    }

    const handleOrderClick = () => {
        // console.log('order', product.product)
        if (!user?.id) {
            navigate('/login')
            return
        }
        
        const orderRedux = order?.orderItems?.find((item) => item.product === product.product?._id)
        if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && product?.product?.countInStock > 0)) {
            const item = {
                user: user.id,
                product: product.product._id,
                name: product.product.name,
                price: product.product.price,
                amount: numProduct,
                countInStock: product.product.countInStock,
            }
            // console.log('item', item)
            
            dispatch(addOrderProduct(item))
            // navigate('/')
        }
    }

    const breadcrumbDividerStyle = {
        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
    };
    
    const name = product?.product?.name;
    const description = product?.product?.description;
    const price = product?.product?.price;
    const brand = product?.product?.brand;
    const category = product?.product?.category;
    const imageUrl = process.env.PUBLIC_URL + '/son-demo.jpg';
    return (
        <Loading isLoading={isLoading}>
            <div>
                <nav style={breadcrumbDividerStyle} aria-label="breadcrumb">
                    <ol className="breadcrumb dir">
                        <li className="breadcrumb-item"><Link to={"/"} style={{ textDecoration: "none", color: "inherit", fontSize: '16px' }}>Trang chủ</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
                    </ol>
                </nav>
                <div className="banner">
                    <h3>THÔNG TIN SẢN PHẨM</h3>
                    <hr className="border border-secondary border-2 opacity-50"></hr>
                </div>
                <div className="row">
                    <img className="product-image" src={imageUrl} alt="product-image" />
                    <div className="Product-info">
                        <p id="p-name">{name}</p>
                        <p>Thương hiệu: {brand}</p>
                        <p>Loại sản phẩm: {category}</p>
                        <p>Giá thành: {price}</p>
                        <div className="buy">
                            <form className="form_buy">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Số lượng:</label>
                                    <input name="sl" type='number' id='sl' size='20' maxLength='10' className="form-control" min="1"
                                        value={numProduct}
                                        onChange={handleNumproductChange}
                                    />
                                </div>
                                <button type="button" className="btn_cus_ btn btn-outline-secondary"
                                    onClick={handleOrderClick}

                                >Thêm vào giỏ hàng
                                    <Link to={""}></Link></button>
                                {/* <button type="button" className="btn btn-outline-secondary btn_cus_">Mua Ngay
                                    <Link to={""}><MdOutlineShoppingCart className='icon-buy' /></Link></button> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className='Product-dis'>
                    <h3>Mô tả sản phẩm: </h3>
                    <br />
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </Loading>
    )
};
export default memo(Order);