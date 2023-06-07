import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Head from "next/head"
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
      <Head>
        <title>Wooden Material</title>
        <meta name="description" content="Explore our extensive collection of high-quality wooden materials for your construction and woodworking projects. Discover a wide range of timber products, including hardwoods, softwoods, plywood, and engineered wood. From structural beams and boards to decorative finishes and veneers, our wooden materials offer versatility, beauty, and durability. Whether you're building furniture, cabinets, or architectural structures, our premium wood products provide the natural warmth and timeless appeal that only wood can offer. Choose from our curated selection and bring the beauty of wood to your projects." />
      </Head>
      
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