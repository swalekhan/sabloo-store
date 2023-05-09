import Link from "next/link"
import style from './Navbar.module.css'
import { FiSearch } from "react-icons/fi"
import { FaStore } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileManu from "./MobileMune"
import { useState } from "react"
import { useSelector } from "react-redux"
import { navLink } from '../../data/data'
import { useRouter } from "next/router"
import MyAccount from "./myAccount/MyAccount"

const Navbar = () => {
    const [ShowMobileMenu, setShowMobileMenu] = useState(false)
    const [showMyAccount, setShowMyAccount] = useState(false);
    const { cart } = useSelector(state => state.cart)
    const router = useRouter()

    const closeHnadler = (event) => {
        setShowMobileMenu(!ShowMobileMenu)
    }

    const myAccountHandler = () => {
        setShowMyAccount(!showMyAccount)
    }
    return (
        <>
            {ShowMobileMenu && <MobileManu closeHnadler={closeHnadler} />}
            {showMyAccount && <MyAccount  closeHnadler={myAccountHandler}/>}

            <nav className={style["navbar"]}>
                <div className={style.nav_inner}>

                    <div className={style.nav_left}>
                        <GiHamburgerMenu onClick={() => setShowMobileMenu(!ShowMobileMenu)} />
                        <Link href="/"><img src="logo/logo.png.png" /></Link>
                    </div>

                    <div className={style.search}>
                        <input type="text" placeholder="Search by Model, Brand, Category, etc" />
                        <FiSearch className={style.search_icon} />
                    </div>

                    <div className={style.nav_right}>
                        <Link href="/ContactUs" className={style.nav_right_icon}>
                            <FaStore />
                            <p>Store Locator</p>
                        </Link>
                        <Link href="/Cart" className={style.nav_right_icon}>
                            <HiShoppingCart />
                            <h6 id={cart.length < 1 ? style.cartItem : ""}>{cart.length}</h6>
                            <p>Cart</p>
                        </Link>
                        <div href="/Cart" className={style.nav_right_icon}>
                            <FaUserAlt onClick={myAccountHandler} />
                            <p>Login | sign Up</p>
                        </div>
                    </div>
                </div>

                {/* link.............. */}
                <ul className={style.nav_links}>
                    {navLink.map((item, i) => (
                        <li key={i} className={style.nav_link} onClick={() => router.push(item.url)}>
                            {/* remove first home link */}
                            {i >= 1 ? item.name : ""}
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}

export default Navbar