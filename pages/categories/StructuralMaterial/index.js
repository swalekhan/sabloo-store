import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { structuralBannerAssets, structuralBrand, structuralCategory } from "@/utils/data/categoriesData"

const StructuralMaterial = () => {
    return (
      <>
      <HeroBanner items={structuralBannerAssets}/>
      <Category items={structuralCategory} title="Structural Materials Products" />
      <Register/>
      <Brand items={structuralBrand} title="Top Structural Materials Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou title="Why Buy Structural Materials From Sabloo Stores?" />
      <OurStore/>
      </>
    )
  }
  
  export default StructuralMaterial