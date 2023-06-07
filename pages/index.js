import HeroBanner from "@/component/Header/HeroBanner";
import Brand from "@/component/brand/Brand";
import Head from "next/head";
import Category from "@/component/categorys/Category";
import CustomerStory from "@/component/costomerStories/CustomerStory";
import Promises from "@/component/ourPromises/Promises";
import Register from "@/component/register/Register";
import WhyFromYou from "@/component/whyFromYou/WhyFromYou";
import { homeCategory, homeBannerAssets, homeBrand, customer } from "@/utils/data/categoriesData";

export default function Home() {
  return (
    <>

      <Head>
        <title>Sabloo Marble</title>
        <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
        </Head>

      <HeroBanner items={homeBannerAssets} />
      <Category items={homeCategory} title={"Shop by Category"} />
      <CustomerStory items={customer} />
      <Brand items={homeBrand} title={"Shop By Popular Brand"} />
      <Promises />
      <WhyFromYou title="Why Buy Products From Sabloo Stores?" />
      <Register />
    </>
  )
}
