import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { customer, tilesBannerAssets,tilesBrand,tilesCategory } from "@/utils/data/categoriesData"

const Tiles = () => {
  return (
    <>
      <HeroBanner items={tilesBannerAssets} />
      <Category items={tilesCategory} title="Tiles & Flooring Products" />
      <Register />
      <Brand items={tilesBrand} title="Top Tiles & Flooring Brands" />
      <Sugggested title={"You may also like"} />
      <WhyFromYou title="Why Buy Tiles & Flooring From Sabloo Stores?" />
      <CustomerStory items={customer}/>
      <OurStore />
    </>
  )
}

export default Tiles