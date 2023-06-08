import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import style from "./HeroBanner.module.css"

const HeroBanner = ({ items }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false}>
            {items?.map((item, i) => (
                <div key={i} className={style.hero_banner}>
                    <picture >
                        <source media="(max-width:650px)" srcSet={item?.mobImg} />
                        <source  srcSet={item?.deskImg} />
                        <Image src={item.deskImg} alt="banner"  fill sizes="100vw" placeholder="blur" blurDataURL="/mob1.png.webp"  />
                    </picture>
                </div>
            ))}
        </Carousel>
    )
}

export default HeroBanner