import CartCard from "@/component/cartCard/CartCard"
import { useSelector } from "react-redux"

const Cart = () => {
    const { cart } = useSelector(state => state.cart)

    return (
        <CartCard items={cart} />
    )
}

export default Cart