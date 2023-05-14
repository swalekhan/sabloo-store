import { MdDeleteForever } from "react-icons/md"
import style from './CartCard.module.css'
import { useDispatch, useSelector } from "react-redux"
import { increamnetQuantity, decreamentQuantity, removeItem, getTotal } from "@/store/cartSlice"
import { useEffect } from "react"
import { useRouter } from "next/router"

const CartCard = ({ items }) => {
    const dispatch = useDispatch()
    let { totalAmount, totalQuantity, cart } = useSelector(state => state.cart)
    const router = useRouter()

    useEffect(() => {
        dispatch(getTotal())
    }, [cart])

    return (
        <div className={style.CartCard}>
            <div className={style.CartCard_grid}>
                {items.map((item, i) => (
                    <div className={style.CartCard_wrapper} key={i} onClick={()=>router.push(`/ProductDetails/${item?.id}`)}>
                        <div className={style.CartCard_header}>
                            <img src={item?.imgUrl} alt={item?.title} />
                        </div>

                        <div className={style.CartCard_main}>
                            <h4>{item?.title}</h4>
                            <h5>{item?.brand} | SKU :<span>{item?.model}</span></h5>
                            <h6>${item?.price}</h6>
                            <div className={style.main_middle}>
                                <div className={style.main_input} onClick={(e)=> e.stopPropagation()}>
                                    <button className={`${style.minus_btn} ${item?.quantity <= 1 ? style.btn_disabled : ""}`} onClick={() => dispatch(decreamentQuantity(item?.id))} disabled={item?.quantity <= 1}>-</button>
                                    <span>{item?.quantity} </span>
                                    <button className={style.plus_btn} onClick={() => dispatch(increamnetQuantity(item?.id))}>+</button>
                                </div>
                                <div className={style.main_subtotle}>
                                    <p>Sub Total</p>
                                    <h4>${item?.quantity * (item?.price - (item?.price * item?.discount) / 100)}</h4>
                                </div>
                            </div>
                        </div>

                        <div className={style.CartCard_footer}>
                            <div className={style.footer_content}>
                                <h4>Delivery Plan</h4>
                                <h5>For 5 quantity delivary date : 07 May 2023</h5>
                                <p>*subject to payment clearance today</p>
                            </div>
                            <MdDeleteForever onClick={(e) =>{ e.stopPropagation(), dispatch(removeItem(item.id))}} />
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
                        <p>${totalAmount}</p>
                    </div>
                    <div className={style.main_discount}>
                        <h5>NO. of Items</h5>
                        <p>NAN</p>
                    </div>
                    <div className={style.main_total_amount}>
                        <h5>Total Amount</h5>
                        <p>${totalAmount}</p>
                    </div>
                </div>

                <div className={style.payment_footer}>
                    <button onClick={()=>alert(totalAmount)}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard