import CartCard from "@/component/cartCard/CartCard"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Cart = () => {
    const { cart } = useSelector(state => state.cart)
    const isSignup = localStorage.getItem("token")
    const router = useRouter()
    useEffect(() => {
        if (!isSignup) {
            router.push("/auth/Signup")
            return
        }
    }, [isSignup])

    return (
        <CartCard items={cart} />
    )
}

export default Cart