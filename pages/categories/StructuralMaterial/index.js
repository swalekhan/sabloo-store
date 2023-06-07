import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Head from "next/head"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { customer, structuralBannerAssets, structuralBrand, structuralCategory } from "@/utils/data/categoriesData"

const StructuralMaterial = () => {
    return (
      <>
      <Head>
        <title>Structural Material</title>
        <meta name="description" content="Discover a comprehensive range of high-quality structural materials for your construction and building projects. Explore our collection of durable and reliable materials, including steel, concrete, timber, and composite materials. From beams and columns to slabs and walls, we offer a wide selection of structural components to meet your specific needs. Our materials are designed to provide strength, stability, and longevity, ensuring the structural integrity and safety of your projects. Choose from our trusted range of structural materials and build with confidence." />
      </Head>

      <HeroBanner items={structuralBannerAssets}/>
      <Category items={structuralCategory} title="Structural Materials Products" />
      <Register/>
      <Brand items={structuralBrand} title="Top Structural Materials Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou title="Why Buy Structural Materials From Sabloo Stores?" />
      <CustomerStory items={customer}/>
      <OurStore/>
      </>
    )
  }
  
  export default StructuralMaterial