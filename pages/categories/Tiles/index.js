import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Head from "next/head"
import Category from "@/component/categorys/Category"
import CustomerStory from "@/component/costomerStories/CustomerStory"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"
import { customer, tilesBannerAssets, tilesBrand, tilesCategory } from "@/utils/data/categoriesData"

const Tiles = () => {
  return (
    <>

      <Head>
        <title>Tiles and Flooring</title>
        <meta name="description" content="Transform your space with our exquisite selection of tiles and flooring solutions. Explore our wide range of high-quality tiles in various sizes, styles, and materials, including ceramic, porcelain, and natural stone. Whether you're looking for elegant flooring options, stylish backsplashes, or eye-catching accent tiles, we have the perfect choice for you. Our flooring solutions include hardwood, laminate, vinyl, and tile flooring, offering durability, beauty, and easy maintenance. Create a stunning and functional space with our exceptional tiles and flooring products." />
      </Head>

      <HeroBanner items={tilesBannerAssets} />
      <Category items={tilesCategory} title="Tiles & Flooring Products" />
      <Register />
      <Brand items={tilesBrand} title="Top Tiles & Flooring Brands" />
      <Sugggested title={"You may also like"} />
      <WhyFromYou title="Why Buy Tiles & Flooring From Sabloo Stores?" />
      <CustomerStory items={customer} />
      <OurStore />
    </>
  )
}

export default Tiles