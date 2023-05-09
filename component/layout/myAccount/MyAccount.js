
import { BiUserCircle } from "react-icons/Bi"
import { AiOutlineClose } from "react-icons/Ai"
import style from "./MyAccount.module.css"
import Link from "next/link"
import {myAccount} from '@/data/data'

const MyAccount = ({ closeHnadler }) => {
    return (
        <div className={style.mobile_manu} onClick={closeHnadler}>
            <div className={style.mobile_manu_inner} onClick={(e) => e.stopPropagation()}>
                <div className={style.mobile_header}>
                    <div className={style.mobile_header_left}>
                        <BiUserCircle />
                        <h4>My Account</h4>
                    </div>
                    <div className={style.mobile_header_right}>
                        <AiOutlineClose onClick={closeHnadler} />
                    </div>
                </div>

                <div className={style.mobile_main}>
                    <ul>
                        {myAccount.map((item, i) => (
                            <li key={i}> <Link href={item.url} onClick={closeHnadler}>{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;