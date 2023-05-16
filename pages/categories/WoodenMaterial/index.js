import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { customer, woodenBannerAssets,woodenBrand,woodenCategory } from "@/utils/data/categoriesData"

const WoodenMaterial = () => {
    return (
      <>
      <HeroBanner items={woodenBannerAssets}/>
      <Category items={woodenCategory} title="Hardware & Tools Products" />
      <Register/>
      <Brand items={woodenBrand} title="Top Hardware & Tools Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou title="Why Buy Hardware & Tools from Sabloo Stores?" />
      <CustomerStory items={customer}/>
      <OurStore/>
      </>
    )
  }

export default WoodenMaterial