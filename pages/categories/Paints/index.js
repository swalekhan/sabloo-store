import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { paintBannerAssets,paintBrand,paintCategory } from "@/utils/data/categoriesData"

const Paints = () => {
  return (
    <>
      <HeroBanner items={paintBannerAssets} />
      <Category items={paintCategory} title="Paints & Surface Care Products" />
      <Register />
      <Brand items={paintBrand} title="Top Paints & Surface Care Brands" />
      <Sugggested title="You may also like" />
      <WhyFromYou title="Why Buy Paints From Sabloo Stores?" />
      <OurStore />
    </>
  )
}

export default Paints