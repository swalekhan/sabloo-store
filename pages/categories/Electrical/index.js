import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { electricBannerAssets, electricBrand, electricCategory } from "@/utils/data/categoriesData"

const Electrical = () => {
    return (
      <>
      <HeroBanner items={electricBannerAssets}/>
      <Category items={electricCategory} title="Electrical & Lighting Products" />
      <Register/>
      <Brand items={electricBrand} title="Top Electrical & Lighting Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou  title="Why Buy Electrical & Lightings From Sabloo Stores?" />
      <OurStore/>
      </>
    )
  }

export default Electrical