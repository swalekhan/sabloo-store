import HeroBanner from "@/component/Header/HeroBanner";
import Brand from "@/component/brand/Brand";
import Category from "@/component/categorys/Category";
import CustomerStory from "@/component/costomerStories/CustomerStory";
import Promises from "@/component/ourPromises/Promises";
import Register from "@/component/register/Register";


// let arr = [
//   { id: 1, name: "Tiles", url: "/Tiles" },
//   { id: 2, name: "Paints", url: "paints" },
//   { id: 3, name: "Bath&Fitting", url: "/Bath&Fitting" },
//   { id: 4, name: "Sheets", url: "/Sheets" },
//   { id: 5, name: "Electriconik", url: "/" },
// ]
const category = [
  { id: 1, title: "Tiles", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqNDA5NmFpaHNoaXNleHoyZHB3ODVkdjNyMHVkIiwiZmlsZW5hbWUiOiJXb29kZW4gRmxvb3Jpbmcud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6Imo0MDk2YWloc2hpc2V4ejJkcHc4NWR2M3IwdWQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.jE1C2lD989oNfsKXolW45vhMXJ6394nNhPu3FrjHfI4" },
  { id: 1, title: "Paints", url: "paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqaWIxb2Jvcnl3anl6ZXoyczU4aXMxOXdvcDRqIiwiZmlsZW5hbWUiOiJQYWludC5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImppYjFvYm9yeXdqeXplejJzNThpczE5d29wNGoiLCJjb252ZXJ0X3dlYnAiOnRydWV9.x3GpveE4aaCYUdJSdIeL-gFJCkZJxy9KBDFTtoht3FQ" },
  { id: 1, title: "Bath&Fitting", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJneGFma3ExZWMwN2J1c3dsNWI1cDQ0cDJmazRsIiwiZmlsZW5hbWUiOiJCYXRoIEZpdHRpbmdzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJneGFma3ExZWMwN2J1c3dsNWI1cDQ0cDJmazRsIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QIc6zgqUmpye4lJSTX5jzWWxe7XjsciH7BSHxe-B_yY" },
  { id: 1, title: "Sheets", url: "/Sheets", img: "assets/desk6.png.webp" },
  { id: 1, title: "Light", url: "/Light", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJpb2dyaG0xemwxOWlxMXNrcW54ejlodGVtYmtoIiwiZmlsZW5hbWUiOiJMaWdodGluZy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiaW9ncmhtMXpsMTlpcTFza3FueHo5aHRlbWJraCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.wMAYYcyRWMOSIg-W8rGXMBNhKtd_t-w6cyJKPZtRHu0" },
  { id: 1, title: "Sanitaryware", url: "/Sanitaryware", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1d215Nm8zYXd4YnY1OGJ2ZDU1cDNxZWk4ZnA0IiwiZmlsZW5hbWUiOiJTYW5pdGFyeXdhcmUud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6IjV3bXk2bzNhd3hidjU4YnZkNTVwM3FlaThmcDQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.Cg25Zk_skHG00WAraSawEFVn8LrbhKPPuyi-cuKrj7w" },
  { id: 1, title: "Plumming", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ5cnpkNGx3NmFqOWUzNHNxMG9vOGk0bTNrdjlwIiwiZmlsZW5hbWUiOiJQbHVtYmluZy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoieXJ6ZDRsdzZhajllMzRzcTBvbzhpNG0za3Y5cCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.dFVfaIV4VpKULriP0yRrUR5UYZibg0hcEOtWzaoiWpI" },
  { id: 1, title: "Switch & wire", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2MTN2ZXBidnhqemNzYTJkcDc3bTF1M2g1MXp6IiwiZmlsZW5hbWUiOiJTd2l0Y2hlcyAmIFdpcmVzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJ2MTN2ZXBidnhqemNzYTJkcDc3bTF1M2g1MXp6IiwiY29udmVydF93ZWJwIjp0cnVlfQ.qNYyEvh26T6LYemMwvCn_wvh9sTaLF_e4ocME10VOKw" },
]

const brand = [
  { id: 1, img: "brand/Havells.webp" },
  { id: 1, img: "brand/Hindware.webp" },
  { id: 1, img: "brand/Kajaria-Ceramics.webp" },
  { id: 1, img: "brand/KOHLER.webp" },
  { id: 1, img: "brand/Orient-Bell.webp" },
  { id: 1, img: "brand/QUBA.webp" },
  { id: 1, img: "brand/Simero.webp" },
  { id: 1, img: "brand/Somany-ceramics.webp" },
  { id: 1, img: "brand/Tamron.webp" },
  { id: 1, img: "brand/Yale.webp" },
  { id: 1, img: "brand/Virgo-logo.webp" },
]

const customer = [
  { id: 1, customerImg: "https://b2b.hippostores.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlNnRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7f6b9939242b0f38671a2e77b46e648ca087d73e/Saurabh-Gupta.webp", CustomerStatment: '"One thing that distinguishes Hippo Stores from others is their pricing. Whether you buy a single product or in bulk, all products are available at wholesale prices. You will find all building products under one roof."', customerName: "Punit Kharbanda", designation: "SGS Hardware (Reseller)", quote: "https://www.hippostores.com/images/home_page/icon_ionic_ios_quote.svg" },
  { id: 1, customerImg: "https://b2b.hippostores.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlNnRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7f6b9939242b0f38671a2e77b46e648ca087d73e/Saurabh-Gupta.webp", CustomerStatment: '"One thing that distinguishes Hippo Stores from others is their pricing. Whether you buy a single product or in bulk, all products are available at wholesale prices. You will find all building products under one roof."', customerName: "Punit Kharbanda", designation: "SGS Hardware (Reseller)", quote: "https://www.hippostores.com/images/home_page/icon_ionic_ios_quote.svg" },
  { id: 1, customerImg: "https://b2b.hippostores.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlNnRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7f6b9939242b0f38671a2e77b46e648ca087d73e/Saurabh-Gupta.webp", CustomerStatment: '"One thing that distinguishes Hippo Stores from others is their pricing. Whether you buy a single product or in bulk, all products are available at wholesale prices. You will find all building products under one roof."', customerName: "Punit Kharbanda", designation: "SGS Hardware (Reseller)", quote: "https://www.hippostores.com/images/home_page/icon_ionic_ios_quote.svg" },
  { id: 1, customerImg: "https://b2b.hippostores.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlNnRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7f6b9939242b0f38671a2e77b46e648ca087d73e/Saurabh-Gupta.webp", CustomerStatment: '"One thing that distinguishes Hippo Stores from others is their pricing. Whether you buy a single product or in bulk, all products are available at wholesale prices. You will find all building products under one roof."', customerName: "Punit Kharbanda", designation: "SGS Hardware (Reseller)", quote: "https://www.hippostores.com/images/home_page/icon_ionic_ios_quote.svg" },
]

  const bannerAssets = [
    {id:1, mobImg:"assets/mob1.png.webp", deskImg:"assets/desk1.png.webp"},
    {id:1, mobImg:"assets/mob2.png.webp", deskImg:"assets/desk2.png.webp"},
    {id:1, mobImg:"assets/mob3.png.webp", deskImg:"assets/desk3.png.webp"},
    {id:1, mobImg:"assets/mob4.png.webp", deskImg:"assets/desk4.png.webp"},
    {id:1, mobImg:"assets/mob5.png.webp", deskImg:"assets/desk5.png.webp"},
    {id:1, mobImg:"assets/mob6.png.webp", deskImg:"assets/desk6.png.webp"},
  ] 
export default function Home() {
  return (
    <>
      <HeroBanner items={bannerAssets}/>
      <Category items={category} title={"Shop by Category"} />
      <CustomerStory items={customer} />
      <Brand items={brand} title={"Shop By Popular Brand"}/>
      <Promises/>
      <Register/>
    </>
  )
}
