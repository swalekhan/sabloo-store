import Image from "next/image";
import style from "./Brand.module.css"

const Brand = ({ items,title }) => {
    return (
        
        <div className={style.brand}>
            <h3 className="heading">{title}</h3>
            <div className={style.brand_div}>
                {items.map((item, i) => (
                    <img src={item.img} alt="pic" key={i}/>
                ))}
            </div>
        </div>
    )
}

export default Brand;