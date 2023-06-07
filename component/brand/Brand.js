import Image from "next/image";
import style from "./Brand.module.css"

const Brand = ({ items, title }) => {
    return (

        <div className={style.brand}>
            <h3 className="heading">{title}</h3>
            <div className={style.brand_div}>
                {items.map((item, i) => (
                    <div className={style.brand_img} key={i}>
                        <Image src={item.img ? item.img : "/logo/noImg.png.jpg"} alt="pic" fill sizes="(max-width:650px) 100px, 100px" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brand;