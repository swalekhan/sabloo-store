


import Link from "next/link"
import style from "./Category.module.css"

const Category = ({ items,title }) => {
    return (
        <div className={style.Category}>
            <h3 className="heading"> {title}</h3>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
                        <Link href={item.url} className={style.item_content}>
                        <img src={item.img} alt="pic" />
                        <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category