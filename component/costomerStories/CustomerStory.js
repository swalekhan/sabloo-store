import style from './CustomerStory.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CustomerStory = ({items}) => {
    return (
        <>
        <h3 className="heading">Customers Stories</h3>
        <Carousel showArrows={false} autoPlay={false} infiniteLoop={true} showThumbs={false} >
            {items.map((item, i) => (
                <div className={style.customer_story} key={i}>
                    <img src={item.quote} alt="pic" className={style.quote} />
                    <div className={style.customer_content}>
                        <p>"One thing that distinguishes Hippo Stores from others is their pricing. Whether you buy a single product or in bulk, all products are available at wholesale prices. You will find all building products under one roof."</p>
                    </div>
                    <div className={style.customer_info}>
                        <img src={item.customerImg} alt="pic" className={style.customer_img} />
                        <div className={style.customer_name}>
                            <h4>{item.customerName}</h4>
                            <p>{item.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
        </>
    )
}

export default CustomerStory;