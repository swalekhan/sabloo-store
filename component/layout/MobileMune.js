import { BiUserCircle } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import style from "./Navbar.module.css"
import Link from "next/link"
import { navLink } from '@/utils/data/data'

const MobileManu = ({ closeHnadler }) => {
    const isSignup = JSON.parse(localStorage.getItem("token"))
    return (
        <div className={style.mobile_manu} onClick={closeHnadler}>
            <div className={style.mobile_manu_inner} onClick={(e) => e.stopPropagation()}>
                <div className={style.mobile_header}>
                    <div className={style.mobile_header_left}>
                        <BiUserCircle />
                        <h4>{isSignup?.name ? isSignup?.name : "Hello"}</h4>
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
        </div>
    )
}

export default MobileManu