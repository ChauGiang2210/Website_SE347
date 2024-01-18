import { memo, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import React, { useState } from "react";
import { useMutationHook } from '../../../hooks/useMutationHook';
import { addProduct, getAllProducts } from "../../../services/product";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const AddProduct = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [skinType, setSkinType] = useState("");
    const [description, setDescription] = useState("");
    const [countInStock, setCountInStock] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const mutation = useMutationHook(
        (data) => {
            return addProduct(data)
        }
    )

    const { data, isSuccess, isError } = mutation

    const fetchProductAll = async () => {
        const res = await getAllProducts()
        // console.log('res', res)
        return res
    }

    // const { data:products } = useQuery({ queryKey: ['products'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000 })
    // // console.log('products', products.products)
    // var names = [];

    // // Lặp qua danh sách đối tượng
    // for (var i = 0; i < products.products.length; i++) {
    //     var product = products.products[i];
    //     names.push(product.name);
    // }

    // console.log('names', names)

    useEffect(() => {
        if (isError || (isSuccess && !data?.success)) {
            // console.log('data', data)
            alert("Thêm sản phẩm thất bại");
        }
        if (isSuccess && data?.success) {
            // console.log('data', data)
            alert("Thêm sản phẩm thành công")
            navigate("/admin")
        }

    }, [isSuccess, isError])

    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }

    const handleOnChangeBrand = (e) => {
        setBrand(e.target.value)
    }

    const handleOnChangeSkinType = (e) => {
        setSkinType(e.target.value)
    }

    const handleOnChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleOnChangeCountInStock = (e) => {
        setCountInStock(e.target.value)
    }

    const handleOnChangeImg = (e) => {
        setImgUrl(e.target.value)
    }

    const handleOnChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleOnChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleOnClickAddProduct = async () => {
        // console.log('name', name)
        // console.log('brand', brand)
        // console.log('skinType', skinType)
        // console.log('description', description)
        // console.log('quantity', countInStock)
        // console.log('imgUrl', imgUrl)
        const rating = null

        // if (names.includes(name)) {
        //     alert("Tên sản phẩm đã tồn tại")
        //     return
        // }

        var pathArray = imgUrl.split("\\");
        var tenFile = pathArray[pathArray.length - 1];
        const imgUrlName = "/" + tenFile;

        const product = {
            name,
            brand, 
            skinType, 
            description, 
            countInStock, 
            imageUrl: imgUrlName, 
            price, 
            category, 
            rating
        }
        // console.log('product', product)

        mutation.mutate(product)
    }

    return (
        <div className='addUser'>
            <h3>THÊM SẢN PHẨM</h3>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <div className="input-group mb-3">
                <span className="input-group-text" id="name">Tên mặt hàng:</span>
                <input type="text" className="form-control" placeholder="Nhập tên mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={name}
                    onChange={handleOnChangeName}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="name">Giá mặt hàng:</span>
                <input type="number" className="form-control" placeholder="Nhập giá mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={price}
                    onChange={handleOnChangePrice}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Hình ảnh mặt hàng:</label>
                <input className="form-control" type="file" id="imageUrl"
                    value={imgUrl}
                    onChange={handleOnChangeImg}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="brand">Thương hiệu:</span>
                <input type="text" className="form-control" placeholder="Nhập tên nhà sản xuất" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={brand}
                    onChange={handleOnChangeBrand}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="brand">Loại sản phẩm:</span>
                <input type="text" className="form-control" placeholder="Nhập loại sản phẩm" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={category}
                    onChange={handleOnChangeCategory}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="skinType">Loại da:</span>
                <input type="text" className="form-control" placeholder="Nhập loại da phù hợp" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={skinType}
                    onChange={handleOnChangeSkinType}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="description">Mô tả:</span>
                <input type="text" className="form-control" placeholder="Nhập mô tả mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={description}
                    onChange={handleOnChangeDescription}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Số lượng:</span>
                <input type="number" className="form-control" placeholder="Nhập số lượng mặt hàng" aria-label="Nhập tên người dùng" aria-describedby="basic-addon1"
                    value={countInStock}
                    onChange={handleOnChangeCountInStock}
                />
            </div>

            <div className="col-auto">
                <button type="button" className="btn btn-primary btn_cus"
                    onClick={handleOnClickAddProduct}
                // disabled={name === "" || brand === "" || skinType === "" || description === "" || quantity === "" || imgUrl === ""}
                >Thêm mặt hàng</button>
            </div>
        </div>
    )
};
export default memo(AddProduct);