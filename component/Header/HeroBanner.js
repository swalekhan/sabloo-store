import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";


const HeroBanner = ({ items }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false}>
            {items?.map((item, i) => (
                <div key={i}>
                    <picture>
                        <source media="(max-width:650px)" srcSet={item?.mobImg} />
                        <source  srcSet={item?.deskImg} />
                        <Image src={item.deskImg} alt="banner"  width={500} height={400} />
                    </picture>
                </div>
            ))}
        </Carousel>
    )
}

export default HeroBanner