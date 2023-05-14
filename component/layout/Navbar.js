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
import { navLink } from '../../utils/data/data'
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
        const isSignup = localStorage.getItem("token")  //if user login
        if (!isSignup) {
            router.push("/auth/Signup")
            return
        }
        setShowMyAccount(!showMyAccount)
    }

    // ........................search handler.............
    const searchHandler = (e) => {
      e.preventDefault()
      const query = e.target.search.value.trim()
      if(query.length<=0){
        alert("please write something")
        return
      }
      router.push(`/search/${query}`)
    }

    return (
        <>
            {ShowMobileMenu && <MobileManu closeHnadler={closeHnadler} />}
            {showMyAccount && <MyAccount closeHnadler={myAccountHandler} />}

            <nav className={style["navbar"]}>
                <div className={style.nav_inner}>

                    <div className={style.nav_left}>
                        <GiHamburgerMenu onClick={() => setShowMobileMenu(!ShowMobileMenu)} />
                        <Link href="/"><img src="/logo/logo.png.png" /></Link>
                    </div>

                    <form className={style.search} onSubmit={searchHandler}>
                            <input  type="text" name="search" placeholder="Search by Model, Brand, Category, etc" required />
                            <button style={{border:"0px", backgroundColor:"transparent"}} type="submit"><FiSearch className={style.search_icon}/></button>
                    </form>

                    <div className={style.nav_right}>
                        <Link href="/categories/ContactUs" className={style.nav_right_icon}>
                            <FaStore />
                            <p>Store Locator</p>
                        </Link>
                        <Link href="/Cart" className={style.nav_right_icon}>
                            <HiShoppingCart />
                            <h6 id={cart.length < 1 ? style.cartItem : ""}>{cart.length}</h6>
                            <p>Cart</p>
                        </Link>
                        <div className={style.nav_right_icon} onClick={myAccountHandler}>
                            <FaUserAlt />
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