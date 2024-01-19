import { memo, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from "component/banner/banner";
import "./style.scss";
import { Link } from "react-router-dom";
import Delete from "component/delete/index";
import { getAllProducts } from "../../../services/product"
import { useQuery } from "@tanstack/react-query";
import Loading from "component/LoadingComponent";
import { updateProduct } from "../../../redux/slides/productSlide";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { useQuery } from "@tanstack/react-query";

const ProductManage = () =>
{
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);

    const fetchProductAll = async () => {
        const res = await getAllProducts()
        // console.log('res', res)
        return res
    }

    const { isLoading, data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000 })

    // console.log(products.products)

    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const handleDeleteClick = () => {
        // Mở modal xóa khi click vào liên kết "Xóa"
        setDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
        // Thực hiện hành động xóa ở đây
        // Đóng modal xóa
        setDeleteModalVisible(false);
    };

    // useEffect(() => {

    // }, [selected]);

    const handleUpdateClick = (id) => {
        // console.log('update', products.products)
        // function findIndexById(products, targetId) {
        //     return products.findIndex(product => product._id === targetId);
        //   }
        // const index = findIndexById(products.products, id)
        // console.log('index', index, id)
        // dispatch(updateProduct(products.products[index]))
        
    }

    return (
        <Loading isLoading={isLoading || loading}>

            <div className="Manage">
            <h3>QUẢN LÝ KHO HÀNG</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <Link to = "/admin/productmanage/addproduct"><button type="button" className="btn btn-outline-secondary btn_cus">Thêm sản phẩm</button></Link>
            {/* <button type="button" className="btn btn-outline-secondary btn_cus">Xóa sản phẩm</button>
            <button type="button" className="btn btn-outline-secondary btn_cus">Sửa sản phẩm</button> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên mặt hàng</th>
                    <th scope="col">Nhà sản xuất</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.products.map((product, index)=>(
                            <tr>
                    <th scope="row">{index}</th>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.countInStock}</td>
                    <td onClick={handleUpdateClick}><Link to = "/admin/productmanage/fixproduct" className="card-link"
                    onClick={handleUpdateClick}
                    >Sửa</Link></td>
                    <td><Link to ="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr>
                        ))
                    }
                    {/* <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><Link to ="/admin/productmanage/fixproduct" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><Link to ="/admin/productmanage/fixproduct" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link"onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{produce}</td>
                    <td>{quantity}</td>
                    <td><Link to ="/admin/productmanage/fixproduct" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link"onClick={handleDeleteClick}>Xóa</Link></td>
                    </tr> */}
                </tbody>
            </table>
            </div>
            {isDeleteModalVisible && (
                <Delete onClose={() => setDeleteModalVisible(false)} onConfirm={handleDeleteConfirm} />
            )}
        </Loading>
    )

};
export default memo(ProductManage);