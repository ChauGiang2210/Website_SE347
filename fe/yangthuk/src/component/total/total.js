import { memo, useEffect, useState } from "react";
import "./total.scss"
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../redux/slides/orderSlide";
import { useMutationHook } from '../../hooks/useMutationHook';
import { addOrder as addOrderService } from '../../services/order';
import { useNavigate } from "react-router-dom";


const Total = ({ total, addresses, orderItems }) => {
    // console.log('total', total)
    // console.log('addresses', addresses)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.user)

    const [addressId, setAddressId] = useState('')
    const [address, setAddress] = useState({})

    const mutation = useMutationHook(
        (data) => {
            return addOrderService(data)
        }
    )

    const { data, isSuccess, isError } = mutation

    // console.log('data', data.order)

    useEffect(() => {
        if (isError || (isSuccess && !data?.success)) {
            alert('Thanh toán thất bại')
        }
        if (isSuccess && data?.success) {
            alert('Thanh toán thành công')
            navigate('/')
        }
        if (data?.success) {
            alert('Thanh toán thành công')
            navigate('/')
        }
    }, [isSuccess, isError])


    useEffect(() => {
        if (addresses?.length > 0) {
            setAddressId(addresses[0]._id)
        }
    }, [addresses])

    useEffect(() => {
        // console.log('address', addressId)
        setAddress(addresses?.find((address) => address._id === addressId))
        // console.log('address', address)

    }, [addressId])

    const handleOnChangeAddress = (e) => {
        setAddressId(e.target.value)
        // console.log('address', addressId)
    }

    const handleOnClick = () => {
        // alert('Thanh toán thành công')
        // console.log('address', address)
        // console.log('total', total)

        const order = {
            shippingAddress: { fullName: address.fullName, phone: address.phone, address: address.address },
            paymentMethod: 'Thanh toán khi nhận hàng',
            itemsPrice: total.itemsPrice,
            shippingPrice: total.shippingPrice,
            taxPrice: total.taxPrice,
            totalPrice: total.totalPrice,
            isPaid: false,
            paidAt: '',
            isDelivered: false,
            deliveredAt: '',
        }

        // console.log('order', order)
        dispatch(addOrder(order))
        
        const orderObject = {
            ...order,
            user: user.id,
            orderItems: orderItems.map((item) => {
                return {
                    product: item.product,
                    name: item.name,
                    price: item.price,
                    qty: item.amount,
                }
        })
        }
        console.log('orderObject', orderObject)

        mutation.mutate(orderObject)
    }
    

    return (
        <div className='addUser'>
            {/* <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Thành tiền:</span>
                <input type="number" className="form-control" placeholder="_" aria-label="-" aria-describedby="basic-addon1" />
            </div> */}

            <p className="card-text">Giá sản phẩm: {total?.itemsPrice + " đồng"}</p>
            <p className="card-text">Phí vận chuyển: {total?.shippingPrice + " đồng"}</p>
            <p className="card-text">Thuế: {total?.taxPrice + " đồng"}</p>
            <p className="card-text">Tổng tiền: {total?.totalPrice + " đồng"}</p>


            <select className="form-select" aria-label="Default select example"
                value={addressId}
                onChange={handleOnChangeAddress}
            >
                {
                    addresses?.map((address, index) => (
                        <option key={index} value={address._id}>
                            <p className="card-text">Tên người nhận: {address?.fullName}</p>
                            <p className="card-text">Địa chỉ giao hàng: {address?.address}</p>
                            <p className="card-text">Số điện thoại: {address?.phone}</p>
                        </option>
                    ))
                }
                {/* <option value="admin">Admin</option> */}
            </select>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Địa chỉ:</span>
                <input type="text" className="form-control" placeholder="Nhập địa chỉ giao hàng" aria-label="-" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Số điện thoại:</span>
                <input type="number" className="form-control" placeholder="Nhập số điện thoại giao hàng" aria-label="-" aria-describedby="basic-addon1" />
            </div>

            <div className="col-auto col d-flex justify-content-center" >
                <button type="button" className="btn btn-primary btn_cus"
                    onClick={handleOnClick}
                >THANH TOÁN</button>
            </div>
        </div>
    )
};
export default memo(Total);