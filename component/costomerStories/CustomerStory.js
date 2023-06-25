import style from './CustomerStory.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomerStory = ({ items }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className={style.customer_stories}>
            <h3 className="heading">Customers Stories</h3>

            <Carousel responsive={responsive}  itemClass="item-padding-left-40-px !important">
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
        </section>
    )
}

export default CustomerStory;