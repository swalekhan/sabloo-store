import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"

  const bannerAssets = [
    {id:1, mobImg:"sanitaryware/mobSanitaryware1.png.webp", deskImg:"sanitaryware/deskSanitaryware1.png.webp"},
    {id:1, mobImg:"sanitaryware/mobSanitaryware2.png.webp", deskImg:"sanitaryware/deskSanitaryware2.png.webp"},
    {id:1, mobImg:"sanitaryware/mobSanitaryware3.png.webp", deskImg:"sanitaryware/deskSanitaryware3.png.webp"},
    ] 
  const category = [
    { id: 1, title: "Pluming", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvZzE1Y3M0cWt1eGRocDFzMjJ0Zm5xb2p2c2JpIiwiZmlsZW5hbWUiOiJQbHVtYmluZy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5Ijoib2cxNWNzNHFrdXhkaHAxczIydGZucW9qdnNiaSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.ioRU6XLKgpPhHaFJpXKWiiCliStxB-Nxv3rjlFBnxls" },
    { id: 1, title: "Faucets", url: "paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrbHd2cjVidzlxNjAyNmFxZWozbjlnM3o5MmJsIiwiZmlsZW5hbWUiOiJGQVVDRVRzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJrbHd2cjVidzlxNjAyNmFxZWozbjlnM3o5MmJsIiwiY29udmVydF93ZWJwIjp0cnVlfQ.4nLfwlt226VFub66mc9DLF2muHBltgr25pbbKGEecQA" },
    { id: 1, title: "Vanity", url: "/Sheets", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrZWdyanJhbnZqdHUxOXkxbWN0aGdpdDY2aGlsIiwiZmlsZW5hbWUiOiJWQU5JVFkud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6ImtlZ3JqcmFudmp0dTE5eTFtY3RoZ2l0NjZoaWwiLCJjb252ZXJ0X3dlYnAiOnRydWV9.zEr_puSw_tL_CgMuAzQiIPm6GwbTxNxcU1wK7O8QbdE" },
    { id: 1, title: "Shower", url: "/Light", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJuYXd1ZDFtMDh0eGFxbnljZDlpYjlpZDFxaWx5IiwiZmlsZW5hbWUiOiJTSE9XRVJzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJuYXd1ZDFtMDh0eGFxbnljZDlpYjlpZDFxaWx5IiwiY29udmVydF93ZWJwIjp0cnVlfQ._pEI2xDW7FJzzsyNpUZkG6etTfD3oSxzLBZJMiQA4PU" },
    { id: 1, title: "Bath Fitting", url: "/sanitarywareware", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJienVoeGhtMTdsMWRwOXcycW12YnFiZDJocHNwIiwiZmlsZW5hbWUiOiJCQVRILUZJVFRJTkdTLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJienVoeGhtMTdsMWRwOXcycW12YnFiZDJocHNwIiwiY29udmVydF93ZWJwIjp0cnVlfQ.oNLnXrgqCEegS3CRzfSdGJT6ShnXiSQQFNVNVwC1QvE" },
    { id: 1, title: "Wash Basins", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJsb2x3Z3M3djUxdTUyZGRuemZvYjZtcWhodXp4IiwiZmlsZW5hbWUiOiJXQVNIIEJBU0lOLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJsb2x3Z3M3djUxdTUyZGRuemZvYjZtcWhodXp4IiwiY29udmVydF93ZWJwIjp0cnVlfQ.00W3dYVqDUXubQg_J5g5mMcyX_7W0uyyBfa8av2xZf0" },
    { id: 1, title: "Water Closets", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjMTJtODh3eWZzNWM2dzdydnhvbXNlYTV6MTU4IiwiZmlsZW5hbWUiOiJXQy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiYzEybTg4d3lmczVjNnc3cnZ4b21zZWE1ejE1OCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.QyrfCIMbkE2MVy6_V5Nq38gdNi3ct4CYVXwedrN0Hi4" },
    { id: 1, title: "Concealed Tanks", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJwMGFxcWNqM2c3c2U0dnJkYTFvdjBobHVoajU2IiwiZmlsZW5hbWUiOiJDT05DRUFMRUQtVEFOS1Mud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6InAwYXFxY2ozZzdzZTR2cmRhMW92MGhsdWhqNTYiLCJjb252ZXJ0X3dlYnAiOnRydWV9._g51ISxlzTuLZitd6kwI-ix88cHOook950lJ3jtbcu8" },
  ]

  const brand = [
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI0MTY4MXd6aGdlM2tjeHN0dGU2M2t0ZXd5dmZqIiwiZmlsZW5hbWUiOiJTdW5oaGVhcnQgdGlsZXMucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiI0MTY4MXd6aGdlM2tjeHN0dGU2M2t0ZXd5dmZqIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QkQiVHdzIwCMl0Caf14QrVTenK1Z75xVXVz3z1ij2_g" },
    { id: 1, img: "brand/Hindware.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJtb21oYmZ3ZXphYTR6eWw2cm80bTJkNXVubjU1IiwiZmlsZW5hbWUiOiJKYXF1YXIucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJtb21oYmZ3ZXphYTR6eWw2cm80bTJkNXVubjU1IiwiY29udmVydF93ZWJwIjp0cnVlfQ.Y12iHWzDRiXgm43omlySpMTWm4mXiyFrNdHs2sVgarw" },
    { id: 1, img: "brand/KOHLER.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwcjFwam5xaHZtcDAzYXZraHI4M3M1N3lzczRnIiwiZmlsZW5hbWUiOiJQbHVtYmVyIGJhdGh3YXJlLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiMHIxcGpucWh2bXAwM2F2a2hyODNzNTd5c3M0ZyIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.YDjjmEBALhd5AKoZfuPls5USQ47z0jkctJo48J_9aag" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvcTFodzVkb3l0bDZmenc2dDcyOTl0ZTRqanc0IiwiZmlsZW5hbWUiOiJTVVBSRU1FLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5Ijoib3ExaHc1ZG95dGw2Znp3NnQ3Mjk5dGU0amp3NCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.ohdulaOj9KlYdCoHT-JWAlPLqefj-vquXUHiMzVmwek" },
    { id: 1, img: "brand/Simero.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJoNDJsbG9yNDgzbW5objBmM3VyZHJvd2Y1NDE0IiwiZmlsZW5hbWUiOiJDRVJBLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiaDQybGxvcjQ4M21uaG4wZjN1cmRyb3dmNTQxNCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.BwdrLNZ4fKSv6kjrXUJ0YEiS6cfiZRSbYpQ4DbDClc4" },
    { id: 1, img: "brand/Tamron.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI5MndkZW50dXRjcnlrdmZlb3JreGlnMHN4b295IiwiZmlsZW5hbWUiOiJBR0wucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiI5MndkZW50dXRjcnlrdmZlb3JreGlnMHN4b295IiwiY29udmVydF93ZWJwIjp0cnVlfQ.8F0DpLcy6HAtjVWdMnTEVsMwDPy5AAn1YXm4y3F64rI" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJncmM5bndxNXo4dnk2Y2QwejJtYzJ1M2U4b2thIiwiZmlsZW5hbWUiOiJWRUNUVVMucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJncmM5bndxNXo4dnk2Y2QwejJtYzJ1M2U4b2thIiwiY29udmVydF93ZWJwIjp0cnVlfQ.KeHEqW38FXzDwhwFrmBYDFBnT1S5blfn7CBR58Y_YgI" },
  ]

  const suggetedLink = [
    { id: 1, title: "Tiles", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqNDA5NmFpaHNoaXNleHoyZHB3ODVkdjNyMHVkIiwiZmlsZW5hbWUiOiJXb29kZW4gRmxvb3Jpbmcud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6Imo0MDk2YWloc2hpc2V4ejJkcHc4NWR2M3IwdWQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.jE1C2lD989oNfsKXolW45vhMXJ6394nNhPu3FrjHfI4" },
    { id: 1, title: "Paints", url: "/Paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqaWIxb2Jvcnl3anl6ZXoyczU4aXMxOXdvcDRqIiwiZmlsZW5hbWUiOiJQYWludC5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImppYjFvYm9yeXdqeXplejJzNThpczE5d29wNGoiLCJjb252ZXJ0X3dlYnAiOnRydWV9.x3GpveE4aaCYUdJSdIeL-gFJCkZJxy9KBDFTtoht3FQ" },
    { id: 1, title: "Electrical", url: "/Electrical", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwYXY1bmQ2MnJ5eW5rMTM2YWZweDJyaHlpa3RkIiwiZmlsZW5hbWUiOiJDYXRlZ29yeSBUaHVtYm5haWxfRWxlY3RyaWNhbHMgJiBMaWdodHMuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiMGF2NW5kNjJyeXluazEzNmFmcHgycmh5aWt0ZCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.IM7Q67_gBPCVJIrSDDORUk4LtorB4rIL6Va2919oAHg" },
    { id: 1, title: "WoodenMaterial", url: "/WoodenMaterial", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJiamtxdXVyN2k3MGthaWg0dG54OXphM2p6d21xIiwiZmlsZW5hbWUiOiJDYXRlZ29yeSBUaHVtYm5haWxfV29vZGVuLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6ImJqa3F1dXI3aTcwa2FpaDR0bng5emEzanp3bXEiLCJjb252ZXJ0X3dlYnAiOnRydWV9.1GqPera-FbmHvPUgGOwtLhRunbA-epEsrbKqfU3l128" },
    { id: 1, title: "StructuralMaterial", url: "/StructuralMaterial", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqZ28xOTM2djl4M3VpeGV5OTV4MmdlNXJ1NmVhIiwiZmlsZW5hbWUiOiJDYXRlZ29yeSBUaHVtYm5haWxfU3RydWN0dXJhbCBNYXRlcmlhbC5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJqZ28xOTM2djl4M3VpeGV5OTV4MmdlNXJ1NmVhIiwiY29udmVydF93ZWJwIjp0cnVlfQ.wkWoY84sJ8zWbwNdxJmy-VquKghQQPuXVUVLJ_3gRz0" },
    { id: 1, title: "HardWare And Tools", url: "/WoodenMaterial", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIzajF4eWp2eTk5ZW1ld2ZocXZ0MDVpZ3ZkaHhqIiwiZmlsZW5hbWUiOiJDYXRlZ29yeSBUaHVtYm5haWxfSGFyZHdhcmUuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiM2oxeHlqdnk5OWVtZXdmaHF2dDA1aWd2ZGh4aiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.rA9ox8XlrELmSUekuHcjMzAJxgQ8VAkCLB1g8_JSxUo" },
    { id: 1, title: "Switch & wire", url: "/Electrical", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1bzEycm9id2RpcHRwbjJ1d3h5NWVwOXJsb3VoIiwiZmlsZW5hbWUiOiJXaXJlcy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI1bzEycm9id2RpcHRwbjJ1d3h5NWVwOXJsb3VoIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QffEDY15bKwI--KPX4W2jYt8lkWg3utXZbrc4yJMl1w" },
    { id: 1, title: "Plumming", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ5cnpkNGx3NmFqOWUzNHNxMG9vOGk0bTNrdjlwIiwiZmlsZW5hbWUiOiJQbHVtYmluZy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoieXJ6ZDRsdzZhajllMzRzcTBvbzhpNG0za3Y5cCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.dFVfaIV4VpKULriP0yRrUR5UYZibg0hcEOtWzaoiWpI" },
    { id: 1, title: "Sanitaryware and Bath", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2c2lwOHMweGtyb3lreW1jdjZ1dnhlOXQwc3JrIiwiZmlsZW5hbWUiOiJDYXRlZ29yeSBUaHVtYm5haWxfU2FuaXRhcnl3YXJlLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6IjZzaXA4czB4a3JveWt5bWN2NnV2eGU5dDBzcmsiLCJjb252ZXJ0X3dlYnAiOnRydWV9.-fTQWfBxDdzyxYIWBFm_hd4-DlFPhHHbyIHWt5aQ7rg" },
    { id: 1, title: "Bath Fatting", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJneGFma3ExZWMwN2J1c3dsNWI1cDQ0cDJmazRsIiwiZmlsZW5hbWUiOiJCYXRoIEZpdHRpbmdzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJneGFma3ExZWMwN2J1c3dsNWI1cDQ0cDJmazRsIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QIc6zgqUmpye4lJSTX5jzWWxe7XjsciH7BSHxe-B_yY" },
  ]
  
  const promises = [
    {id:1, img:"https://www.hippostores.com/images/ihbcategory/All%20under.png",content:"All Under One roof"},
    {id:1, img:"https://www.hippostores.com/images/ihbcategory/Wide%20range%20of%20products.png", content:"Widest Product Range"},
    {id:1, img:"https://www.hippostores.com/images/ihbcategory/delivery.png", content:"On Time Delivery"},
    {id:1, img:"https://www.hippostores.com/images/ihbcategory/Expert.png",content:"Product Knowledge Support"},
    {id:1, img:"https://www.hippostores.com/images/ihbcategory/Genuine%20product.png",content:"Genuine Products"},
    {id:1, img:"https://www.hippostores.com/images/ihbcategory/wholesale1.png",content:"365 Days Wholesale Rates"},
  ]


const BathAndFitting = () => {
    return (
      <>
      <HeroBanner items={bannerAssets}/>
      <Category items={category} title="Sanitaryware & Bath Fittings Products" />
      <Register/>
      <Brand items={brand} title="Top Sanitaryware & Bath Fittings Brands"/>
      <Sugggested items={suggetedLink} title="You may also like"/>
      <WhyFromYou items={promises} title="Why Buy Sanitaryware & Bath Fittings FromWhy Buy Sanitaryware & Bath Fittings From" />
      <OurStore/>
      </>
    )
  }
  
  export default BathAndFitting