import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Head from "next/head"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { electricBannerAssets, electricBrand, electricCategory, customer } from "@/utils/data/categoriesData"

const Electrical = () => {
  return (
    <>
      <Head>
        <title>Electricals and Lighting</title>
        <meta name="description" content="Discover a wide range of electricals and lighting solutions for your home or business. Explore our collection of high-quality electrical products, including switches, outlets, wiring accessories, and more. Illuminate your space with our diverse range of lighting options, including LED fixtures, chandeliers, lamps, and decorative lighting. Enhance the ambiance, functionality, and energy efficiency of your space with our innovative electricals and lighting solutions." />
      </Head>

      <HeroBanner items={electricBannerAssets} />
      <Category items={electricCategory} title="Electrical & Lighting Products" />
      <Register />
      <Brand items={electricBrand} title="Top Electrical & Lighting Brands" />
      <Sugggested title="You may also like" />
      <WhyFromYou title="Why Buy Electrical & Lightings From Sabloo Stores?" />
      <CustomerStory items={customer} />
      <OurStore />
    </>
  )
}

export default Electrical