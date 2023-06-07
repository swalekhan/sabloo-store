import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { repalceData } from "@/store/cartSlice";
import { signup } from "@/store/authSlice";
import { fetchData, putData } from "@/utils/commenFunc/commenFunc";

let firstNotPut = true;
const Layout = (props) => {
  const { cart } = useSelector(state => state.cart)
  const { isLogin } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // ....................singup.................................................handle_local storege in next js
  useEffect(() => {
    dispatch(signup(JSON.parse(localStorage.getItem("token"))))
  }, [])

  // ........getCArtData ...........................
  useEffect(() => {
    const getData = async () => {
      if (isLogin) {
        const data = await fetchData(`https://sabloo-store-backend.vercel.app/cart/${isLogin?.email?.toString()}`)
        if (data?.data?.cartItems.length >= 1) {  // if new user login then empty array come
          dispatch(repalceData(data?.data?.cartItems)) // cart will not change put request not send.
        }
      } else {
        dispatch(repalceData([]))
      }
    }
    getData()
  }, [isLogin])

  // ...............change _cart_data....................
  useEffect(() => {
    const updateData = async () => {
      if (isLogin) {
        const data = await putData(`https://sabloo-store-backend.vercel.app/cart/${isLogin?.email?.toString()}`, cart)
        console.log(data?.message, "put")
      }
    }
    if (firstNotPut) {
      firstNotPut = false; // expect first time it wwill run every cart change.
      return;
    }
    updateData()
  }, [cart])

  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;