import Link from "next/link"
import style from './Navbar.module.css'
import { FiSearch } from "react-icons/fi"
import { FaStore } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileManu from "./MobileMune"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { navLink } from '../../utils/data/data'
import { useRouter } from "next/router"
import MyAccount from "./myAccount/MyAccount"

const Navbar = () => {
    const [showMyAccount, setShowMyAccount] = useState(false);
    const { cart } = useSelector(state => state.cart)
    const { isLogin } = useSelector(state => state.auth)
    const router = useRouter()

    // ................mobile_menu- show or hide...................................
    const closeHnadler = (event) => {
        const mobile_manu = document.getElementById("mobile_menu");
        mobile_manu.style.transform = "translate(-100vw)"
    }

    const showHandler = (e) => {
        const mobile_manu = document.getElementById("mobile_menu");
        mobile_manu.style.transform = "translate(0vw)"
    }

    // ....................profile menu - show and hide .............................
    const myAccountHandler = () => {
        if (!isLogin) { //if user login
            router.push("/auth/Signup")

        } else {
            setShowMyAccount(!showMyAccount)
        }
    }

    // ........................search handler.............
    const searchHandler = (e) => {
        e.preventDefault()
        const query = e.target.search.value.trim() //remove fide space
        if (query.length <= 0) {
            // ...empty feild......................
            return
        }
        router.push(`/search/${query}`)
        e.target.search.value = ""
    }

    // .........cart_handler.........................
    const cartHandler = () => {
        if (!isLogin) {
            router.push("/auth/Signup")
        } else {
            router.push("/Cart")
        }
    }

    return (
        <>
            {showMyAccount && <MyAccount closeHnadler={myAccountHandler} />}
            <MobileManu closeHnadler={closeHnadler} />
            <nav className={style["navbar"]}>
                <div className={style.nav_inner}>

                    <div className={style.nav_left}>
                        <GiHamburgerMenu onClick={showHandler} />
                        <Link href="/"><img src="/logo/logo.png.png" /></Link>
                    </div>

                    <form className={style.search} onSubmit={searchHandler}>
                        <input type="text" name="search" placeholder="Search by Model, Brand, Category, etc" required />
                        <button style={{ border: "0px", backgroundColor: "transparent" }} type="submit"><FiSearch className={style.search_icon} /></button>
                    </form>

                    <div className={style.nav_right}>
                        <Link href="/categories/ContactUs" className={style.nav_right_icon}>
                            <FaStore />
                            <p>Store Locator</p>
                        </Link>
                        <div className={style.nav_right_icon} onClick={cartHandler}>
                            <HiShoppingCart />
                            <h6 id={cart && cart?.length < 1 ? style.cartItem : ""}>{cart?.length}</h6>
                            <p>Cart</p>
                        </div>
                        <div className={style.nav_right_icon} onClick={myAccountHandler}>
                            <FaUserAlt />
                            {!isLogin? <p>Login | sign Up</p>:<p>Accont</p>}
                        </div>
                    </div>
                </div>

                {/* link.............. */}
                <ul className={style.nav_links}>
                    {navLink.map((item, i) => (
                        <li key={i} className={style.nav_link} id={`${router.pathname === item.url && "active"}`} onClick={() => router.push(item.url)}>
                            {/* remove first home link */}
                            {i >= 1 ? item?.name : ""}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar