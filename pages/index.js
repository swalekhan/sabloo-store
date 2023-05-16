import HeroBanner from "@/component/Header/HeroBanner";
import Brand from "@/component/brand/Brand";
import Category from "@/component/categorys/Category";
import CustomerStory from "@/component/costomerStories/CustomerStory";
import Promises from "@/component/ourPromises/Promises";
import Register from "@/component/register/Register";
import WhyFromYou from "@/component/whyFromYou/WhyFromYou";
import { homeCategory,homeBannerAssets,homeBrand, customer} from "@/utils/data/categoriesData";

export default function Home() {
  return (
    <>
      <HeroBanner items={homeBannerAssets}/>
      <Category items={homeCategory} title={"Shop by Category"} />
      <CustomerStory items={customer} />
      <Brand items={homeBrand} title={"Shop By Popular Brand"}/>
      <Promises/>
      <WhyFromYou  title="Why Buy Products From Sabloo Stores?" />
      <Register/>
    </>
  )
}
