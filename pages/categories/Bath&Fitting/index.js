import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Head from "next/head"
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
      <Head>
        <title>Sanitaryware and Bath Fittings</title>
        <meta name="description" content="Discover a wide range of high-quality sanitaryware and bath fittings for your home. Browse our collection of stylish and functional products, including faucets, showers, toilets, basins, and more. Create a modern and elegant bathroom with our durable and innovative solutions. Explore our selection and elevate your bathing experience today." />
      </Head>
      
        <HeroBanner items={bathAndBannerAssets} />
        <Category items={bathAndCategory} title="Sanitaryware & Bath Fittings Products" />
        <Register />
        <Brand items={bathAndBrand} title="Top Sanitaryware & Bath Fittings Brands" />
        <Sugggested title="You may also like" />
        <WhyFromYou title="Why Buy Sanitaryware & Bath Fittings FromWhy Buy Sanitaryware & Bath Fittings From" />
        <CustomerStory items={customer} />
        <OurStore />
      
    </>
  )
}

export default BathAndFitting