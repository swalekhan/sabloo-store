import { MdDeleteForever } from "react-icons/md"
import style from './CartCard.module.css'
import { useDispatch, useSelector } from "react-redux"
import { increamnetQuantity, decreamentQuantity, removeItem, getTotal } from "@/store/cartSlice"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { calDiscount } from "@/utils/commenFunc/commenFunc"

const CartCard = ({ items }) => {
    const dispatch = useDispatch()
    let { totalAmount, totalQuantity, cart } = useSelector(state => state.cart)
    const router = useRouter()

    // ....................get totalAmount, totalQuantity ......................
    useEffect(() => {
        dispatch(getTotal())
    }, [cart])

    return (
        <section className={style.CartCard}>
            <div className={style.CartCard_grid}>
                {items?.map((item, i) => (
                    <div className={style.CartCard_wrapper} key={i} onClick={() => router.push(`/ProductDetails/${item?._id}`)}>
                        <div className={style.CartCard_header}>
                            <img src={item?.imgUrl[0]?item?.imgUrl[0]:'/logo/noImg.png.jpg'} alt={item?.name} />
                        </div>

                        <div className={style.CartCard_main}>
                            <h4>{item?.name.length>=35?`${item?.name?.substring(0,35)}...`:item?.name}</h4>
                            <h5>{item?.brand} | SKU :<span>{item?.model.length>=10?`${item?.model.substring(0,10)}...`:item?.model}</span></h5>
                            <h6> &#8377;{calDiscount(item?.price, item?.discount)}</h6>
                            <div className={style.main_middle}>
                                <div className={style.main_input} onClick={(e) => e.stopPropagation()}>
                                    <button className={`${style.minus_btn} ${item?.quantity <= 1 ? style.btn_disabled : ""}`} onClick={() => dispatch(decreamentQuantity(item?._id))} disabled={item?.quantity <= 1}>-</button>
                                    <span>{item?.quantity} </span>
                                    <button className={style.plus_btn} onClick={() => dispatch(increamnetQuantity(item?._id))}>+</button>
                                </div>
                                <div className={style.main_subtotle}>
                                    <p>Sub Total</p>
                                    <h4>&#8377;{(calDiscount(item?.price, item?.discount)*item?.quantity).toFixed(2)}</h4>
                                </div>
                            </div>
                        </div>

                        <div className={style.CartCard_footer}>
                            <div className={style.footer_content}>
                                <h4>Delivery Plan</h4>
                                <h5>For {item?.quantity} quantity delivary date : {`${new Date().getDate()+5}/${new Date().getMonth()+1}/ ${new Date().getFullYear()}` }</h5>
                                <p>*subject to payment clearance today</p>
                            </div>
                            <MdDeleteForever onClick={(e) => { e.stopPropagation(), dispatch(removeItem(item?._id)) }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* .......................totle payment...... */}

            <div className={style.CartCard_payment}>
                <div className={style.payment_header}>
                    <h4>Price details</h4>
                </div>

                <div className={style.payment_main}>
                    <div className={style.main_no_item}>
                        <h5>NO. of Items</h5>
                        <p>{totalQuantity}</p>
                    </div>
                    <div className={style.main_order_value}>
                        <h5>Order value</h5>
                        <p> &#8377; {totalAmount}</p>
                    </div>
                    <div className={style.main_discount}>
                        <h5>NO. of Items</h5>
                        <p>NAN</p>
                    </div>
                    <div className={style.main_total_amount}>
                        <h5>Total Amount</h5>
                        <p>&#8377; {totalAmount}</p>
                    </div>
                </div>

                <div className={style.payment_footer}>
                    <button onClick={() => alert(totalAmount)}>Checkout</button>
                </div>
            </div>
        </section>
    )
}

export default CartCard