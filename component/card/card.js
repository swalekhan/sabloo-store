import style from './Card.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Card = ({ addCartHandler, ...data }) => {
    const item = data
    const afterDiscountPrice = (item?.price - (item?.price * item?.discount) / 100).toFixed(2)

    const [inputQuant, setInputQuant] = useState(1)
    const [subTotl, setSubTotal] = useState(afterDiscountPrice)
    const { cart } = useSelector(state => state.cart)
    const {isLogin} = useSelector(state => state.auth)
    const findCartItem = cart?.find((e) => e._id === item._id)
    const router = useRouter();

    useEffect(() => {
        setSubTotal((inputQuant * afterDiscountPrice).toFixed(2))
    }, [inputQuant])

    //..................... add_to_cart handler...........................
    const addToCartHandler = (e) => {
        e.stopPropagation()
        if (!isLogin) {
            router.push("/auth/Signup")
            return
        }
 // ..............callBack...........................
        addCartHandler({
            ...item,
            quantity: inputQuant
        })
    }

    return (
        <div className={style.card_wrapper} onClick={()=>{router.push(`/ProductDetails/${item?._id}`)}}>
            <div className={style.card_mobile}>
                <div className={style.card_header}>
                    <img src={item?.imgUrl} alt='pic' />
                    <h4 className={style.disccount}>{item?.discount >= 1 ? item?.discount + "% OFF" : "new"}</h4>
                </div>

                <div className={style.card_main}>
                    <div className={style.card_main_top}>
                        <h4>{item?.name.length>=52?`${item?.name?.substring(0,52)}...`:item?.name}</h4>
                        <h5>Brand: <span>{item?.brand}</span></h5>
                    </div>

                    <div className={style.card_main_middle}>
                        <div>
                            <h4>MRP:<span>&#8377;{item?.price}</span></h4>
                            <p>(Incl. of all taxes)</p>
                        </div>
                        <h2> &#8377;{afterDiscountPrice}</h2>
                    </div>
                    {findCartItem?.quantity >= 1 ? (<p className={style.item_added}>{findCartItem.quantity} Items present in your cart</p>) : (<h5 className={style.item_added}>MOQ : 1</h5>)}
                </div>
            </div>

            <div className={style.card_footer}>
                <div className={style.footer_middle}>
                    <div className={style.card_footer_btn} onClick={(e) => (e.stopPropagation())}>
                        <button className={`${style.minus_btn} ${inputQuant <= 1 ? style.btn_disabled : ""}`} onClick={() => setInputQuant(+inputQuant - 1)} disabled={inputQuant <= 1}>-</button>
                        <input type='number'  min={1} max={100} value={inputQuant} required onChange={(e)=>setInputQuant(e.target.value)}/>
                        <button className={style.plus_btn} onClick={() => setInputQuant(+inputQuant + 1)}>+</button>
                    </div>
                    <div>
                        <p>sub Total : &#8377;{subTotl}</p>
                    </div>
                </div>
                <button type='submit' onClick={addToCartHandler} className={style.add_to_cart_btn}>Add {findCartItem?.quantity >= 1 ? "MORE" : "to Cart"}</button>
            </div>
        </div>
    )
}

export default Card