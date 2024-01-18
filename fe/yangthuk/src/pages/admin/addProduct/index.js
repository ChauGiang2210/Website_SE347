import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [skinType, setSkinType] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imgUrl, setImgUrl] = useState("");

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

    const handleOnChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const handleOnChangeImg = (e) => {
        setImgUrl(e.target.value)
    }

    const handleOnClickAddProduct = () => {
        console.log('name', name)
        console.log('brand', brand)
        console.log('skinType', skinType)
        console.log('description', description)
        console.log('quantity', quantity)
        console.log('imgUrl', imgUrl)
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
                    value={quantity}
                    onChange={handleOnChangeQuantity}
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