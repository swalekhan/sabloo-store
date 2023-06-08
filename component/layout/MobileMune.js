import { BiUserCircle } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import style from "./Navbar.module.css"
import Link from "next/link"
import { navLink } from '@/utils/data/data'
import { useSelector } from "react-redux"

const MobileManu = ({ closeHnadler }) => {
    const {isLogin} = useSelector(state => state.auth)
    return (
        <section className={style.mobile_manu} onClick={closeHnadler} id="mobile_menu">
            <div className={style.mobile_manu_inner} onClick={(e) => e.stopPropagation()}>
                <div className={style.mobile_header}>
                    <div className={style.mobile_header_left}>
                        <BiUserCircle />
                        <h4>{isLogin?.displayName ? isLogin?.displayName : "Hello"}</h4>
                    </div>
                    <div className={style.mobile_header_right}>
                        <AiOutlineClose onClick={closeHnadler} />
                    </div>
                </div>

                <div className={style.mobile_main}>
                    <ul>
                        {navLink.map((item, i) => (
                            <li key={i}> <Link href={item.url} onClick={closeHnadler}>{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MobileManu