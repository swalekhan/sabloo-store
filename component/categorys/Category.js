


import Link from "next/link"
import style from "./Category.module.css"
import Image from "next/image"

const Category = ({ items, title }) => {
    return (
        <div className={style.Category}>
            <h3 className="heading"> {title}</h3>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
                        <Link href={item.url} className={style.item_content}>
                            <div className={style.Category_img}>
                                <Image src={item.img} alt={title} fill sizes="(max-width:650px) 100vw, 100vh" />
                            </div>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category