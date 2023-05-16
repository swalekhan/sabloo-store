import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { bathAndBannerAssets, bathAndBrand, bathAndCategory, customer } from "@/utils/data/categoriesData"

const BathAndFitting = () => {
    return (
      <>
      <HeroBanner items={bathAndBannerAssets}/>
      <Category items={bathAndCategory} title="Sanitaryware & Bath Fittings Products" />
      <Register/>
      <Brand items={bathAndBrand} title="Top Sanitaryware & Bath Fittings Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou title="Why Buy Sanitaryware & Bath Fittings FromWhy Buy Sanitaryware & Bath Fittings From" />
      <CustomerStory items={customer}/>
      <OurStore/>
      </>
    )
  }
  
  export default BathAndFitting