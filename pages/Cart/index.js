import CartCard from "@/component/cartCard/CartCard"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Cart = () => {
    const { cart } = useSelector(state => state.cart)
    
    const router = useRouter()
    useEffect(() => {
        const isSignup = localStorage.getItem("token")
        if (!isSignup) {
            router.push("/auth/Signup")
            return
        }
    }, [])

    return (
        <CartCard items={cart} />
    )
}

export default Cart