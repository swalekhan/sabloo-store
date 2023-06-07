import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Head from "next/head"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { customer, paintBannerAssets, paintBrand, paintCategory } from "@/utils/data/categoriesData"

const Paints = () => {
  return (
    <>
      <Head>
        <title>Paints and Surface Care</title>
        <meta name="description" content="Transform your spaces with our wide selection of paints and surface care products. Explore our range of high-quality paints in a variety of colors and finishes to bring new life to your walls, furniture, and surfaces. We also offer surface preparation and care solutions, including primers, sealers, and coatings, to ensure long-lasting and beautiful results. Whether you're renovating, decorating, or maintaining, our paints and surface care products provide the quality and durability you need for stunning and well-protected surfaces." />
      </Head>

      <HeroBanner items={paintBannerAssets} />
      <Category items={paintCategory} title="Paints & Surface Care Products" />
      <Register />
      <Brand items={paintBrand} title="Top Paints & Surface Care Brands" />
      <Sugggested title="You may also like" />
      <WhyFromYou title="Why Buy Paints From Sabloo Stores?" />
      <CustomerStory items={customer} />
      <OurStore />
    </>
  )
}

export default Paints