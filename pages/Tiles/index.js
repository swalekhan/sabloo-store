import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"


const bannerAssets = [
  { id: 1, mobImg: "tiles/mobTile1.png.webp", deskImg: "tiles/deskTile1.png.webp" },
  { id: 1, mobImg: "tiles/mobTile2.png.webp", deskImg: "tiles/deskTile2.png.webp" },
]
const category = [
  { id: 1, title: "Wall Tiles", url: "/Products/Wall Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrMjRtN2tlOWptOTc0ZHJ2NHk2ZHMxYmY1ZDdlIiwiZmlsZW5hbWUiOiJXYWxsIFRpbGVzLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiazI0bTdrZTlqbTk3NGRydjR5NmRzMWJmNWQ3ZSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.8hEJogTH0k66wlCTlNZQJInC3Bo2Vj0TzI8wbBno2AA" },
  { id: 1, title: "Ceramic Tiles", url: "/Products/Ceramic Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJlOTI2eTF0cWp0Nm0zZ283am52aTQxOTNiZW40IiwiZmlsZW5hbWUiOiJDZXJhbWljIFRpbGVzLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiZTkyNnkxdHFqdDZtM2dvN2pudmk0MTkzYmVuNCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.ghAnu7QLDj9CREs9pGWGr6uVIZFYMcDJ4kDiyYpQCt8" },
  { id: 1, title: "Floor Tiles", url: "/Products/Floor Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrMmY3YXJoazNyanpyeGJ3Y2owbjl6eThoMWZxIiwiZmlsZW5hbWUiOiJGbG9vciBUaWxlcy5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImsyZjdhcmhrM3JqenJ4YndjajBuOXp5OGgxZnEiLCJjb252ZXJ0X3dlYnAiOnRydWV9.8hKKlMgo7a9GCbHr_FL7iBbVQGPDSc7F7LptoSBOSzE" },
  { id: 1, title: "Kitchen Tiles", url: "/Products/Kitchen Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJraWg4enozdWZnamkyZWR3OHJ0Z2toOG9jZGtoIiwiZmlsZW5hbWUiOiJLaXRjaGVuIFRpbGVzLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5Ijoia2loOHp6M3VmZ2ppMmVkdzhydGdraDhvY2RraCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.LAGKgRIb46iGvgEpllYFUBHkt8XQp0Lg-2ygvpYKOYA" },
  { id: 1, title: "Outdoor Tiles", url: "/Products/Outdoor Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvc3VlZWVrZ21sM2E2YXo2OGlxNHF0N2szcDJtIiwiZmlsZW5hbWUiOiJPdXRkb29yIFRpbGVzLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5Ijoib3N1ZWVla2dtbDNhNmF6NjhpcTRxdDdrM3AybSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.rUOVbNvoxUOQ1VO2bzKa--1UY5dJOw5AtZXecw7kNtU" },
  { id: 1, title: "Wooden Flooring", url: "/Products/Wooden Flooring", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJzOGFwajM5Mjd1ejgzM3J5OWh5YTRnOTI1dzlqIiwiZmlsZW5hbWUiOiJQbGFua3MucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJzOGFwajM5Mjd1ejgzM3J5OWh5YTRnOTI1dzlqIiwiY29udmVydF93ZWJwIjp0cnVlfQ.YPWzalprLwQXeXwUM9OZCafuw8oFQMoSFvP8PBA22Oo" },
  { id: 1, title: "Bathroom Tiles", url: "/Products/Bathroom Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJicDgxdDJuYmE1cWJhaTF4ZjhyOTk3Y3Z3cGh4IiwiZmlsZW5hbWUiOiJCYXRocm9vbS1UaWxlcy5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImJwODF0Mm5iYTVxYmFpMXhmOHI5OTdjdndwaHgiLCJjb252ZXJ0X3dlYnAiOnRydWV9.WSgCgdNTzkJoes9YjHil_9NsblLzL2hD3uCUzGwkoJ0" },
  { id: 1, title: "Cladding Tiles", url: "/Products/Cladding Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvZzV5eGp3b3Nnc3Fmb2M0bjNpbTN2cTR1OXZ1IiwiZmlsZW5hbWUiOiJDbGFkZGluZyBUaWxlcy5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6Im9nNXl4andvc2dzcWZvYzRuM2ltM3ZxNHU5dnUiLCJjb252ZXJ0X3dlYnAiOnRydWV9.1H03CvHV-70mQJ-_8eMoa-DOoExrwE5Y59SwjURIuYg" },
]

const brand = [
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI0MTY4MXd6aGdlM2tjeHN0dGU2M2t0ZXd5dmZqIiwiZmlsZW5hbWUiOiJTdW5oaGVhcnQgdGlsZXMucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiI0MTY4MXd6aGdlM2tjeHN0dGU2M2t0ZXd5dmZqIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QkQiVHdzIwCMl0Caf14QrVTenK1Z75xVXVz3z1ij2_g" },
  { id: 1, img: "brand/Hindware.webp" },
  { id: 1, img: "brand/Kajaria-Ceramics.webp" },
  { id: 1, img: "brand/KOHLER.webp" },
  { id: 1, img: "brand/Orient-Bell.webp" },
  { id: 1, img: "brand/QUBA.webp" },
  { id: 1, img: "brand/Simero.webp" },
  { id: 1, img: "brand/Somany-ceramics.webp" },
  { id: 1, img: "brand/Tamron.webp" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI5MndkZW50dXRjcnlrdmZlb3JreGlnMHN4b295IiwiZmlsZW5hbWUiOiJBR0wucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiI5MndkZW50dXRjcnlrdmZlb3JreGlnMHN4b295IiwiY29udmVydF93ZWJwIjp0cnVlfQ.8F0DpLcy6HAtjVWdMnTEVsMwDPy5AAn1YXm4y3F64rI" },
  { id: 1, img: "brand/Virgo-logo.webp" },
]

const Tiles = () => {
  return (
    <>
      <HeroBanner items={bannerAssets} />
      <Category items={category} title="Tiles & Flooring Products" />
      <Register />
      <Brand items={brand} title="Top Tiles & Flooring Brands" />
      <Sugggested title={"You may also like"} />
      <WhyFromYou title="Why Buy Tiles & Flooring From Sabloo Stores?" />
      <OurStore />
    </>
  )
}

export default Tiles