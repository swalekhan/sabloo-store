import CartCard from "@/component/cartCard/CartCard"
import { useSelector } from "react-redux"
import Head from "next/head"

const Cart = () => {
    const { cart } = useSelector(state => state.cart)

    return (
        <>
            <Head>
                <title>Cart</title>
                <meta name="description" content="Discover a wide selection of high-quality wooden materials for your construction and woodworking projects. Explore our range of hardwoods, softwoods, plywood, and engineered wood products. From structural beams to decorative finishes, our wooden materials offer versatility, durability, and natural beauty. Choose from our curated collection and bring the warmth and timeless appeal of wood to your next project." />
            </Head>

            <CartCard items={cart} />
        </>

    )
}

export default Cart