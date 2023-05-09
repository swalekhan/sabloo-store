import style from "./WhyFromYou.module.css"
import { whyFromYou } from "@/data/data"
const WhyFromYou = ({title}) => {
    return (
        <div className={style.whyFromYou}>
            <h3 className='heading'>{title}</h3>
            <div className={style.whyFromYou_content}>
                {whyFromYou.map((item, i) => (
                    <div className={style.whyFromYou_item} key={i}>
                        <div className={style.whyFromYou_img}>
                            <img src={item.img} alt='pic' />
                        </div>
                        <h4>{item.content}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyFromYou