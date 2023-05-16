import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HeroBanner = ({ items }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false}>
            {items?.map((item, i) => (
                <div key={i}>
                    <picture>
                        <source media="(max-width:650px)" srcSet={item.mobImg} />
                        <img src={item.deskImg} />
                    </picture>
                </div>
            ))}
        </Carousel>
    )
}

export default HeroBanner