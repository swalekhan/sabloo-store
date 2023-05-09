import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"

  const bannerAssets = [
    {id:1, mobImg:"https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjaGwzcmgxNTRzbjlkN3Z0NDBleDJybTA1NWkxIiwiZmlsZW5hbWUiOiJIaXBwbyBTdG9yZXMgV29vZCBNYXRlcmlhbHMgU3RvcmUucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJjaGwzcmgxNTRzbjlkN3Z0NDBleDJybTA1NWkxIiwiY29udmVydF93ZWJwIjp0cnVlfQ.pyMe_bmvZzHcVLpmxJxaxWQ94D14TQ991L6TcziIpCY", deskImg:"https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrNHU4cDh6YWlkbmNjbjk1N2t5ZWx3OWFmbjNxIiwiZmlsZW5hbWUiOiJIaXBwbyBTdG9yZXMgV29vZCBNYXRlcmlhbHMgU3RvcmUuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiazR1OHA4emFpZG5jY245NTdreWVsdzlhZm4zcSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0._wn1m_5-gV6ZLWy6G8lVVJX8uHEKg7ZL_h18tkylWd4"},
    ] 
  const category = [
    { id: 1, title: "Playboards", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJta2s3ZWdicWh0aGNja3M3NnRvbzYzeWQ5dGt2IiwiZmlsZW5hbWUiOiJQbHlib2FyZHMuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoibWtrN2VnYnFodGhjY2tzNzZ0b282M3lkOXRrdiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.tiRDynVvgRJ31BWgNbUwTvtUldCIawuHZo6QQ9ffW-Q" },
    { id: 1, title: "WPC Boards", url: "/Paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ1b2xrYWFzNmF0eG05b3NrMDNqdno5ZzZiMWd6IiwiZmlsZW5hbWUiOiJXUEMtQm9hcmRzLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6InVvbGthYXM2YXR4bTlvc2swM2p2ejlnNmIxZ3oiLCJjb252ZXJ0X3dlYnAiOnRydWV9.IrotlUQgaXWyUjhX8N7pfPa-WAx6Y2fU3edx9-OCaOY" },
    { id: 1, title: "MDF", url: "/Sheets", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJnZGVocWZzem1jd2k5cnZucmJtNjd3bmpmNWwyIiwiZmlsZW5hbWUiOiJNREYuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiZ2RlaHFmc3ptY3dpOXJ2bnJibTY3d25qZjVsMiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.-vT1Ln0DriiEGX8_3zxfb7CoUx23p5fPT1SI9ngIS6s" },
    { id: 1, title: "Doors", url: "/Light", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIxbWw2MmZtdXhxZWt5aGNzdWxmOXEydzZkeW1mIiwiZmlsZW5hbWUiOiJEb29ycy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiIxbWw2MmZtdXhxZWt5aGNzdWxmOXEydzZkeW1mIiwiY29udmVydF93ZWJwIjp0cnVlfQ.CMhcoLfc9W8xCDWujdxC76_mSF6x1DyWbc_y7cObAEU" },
    { id: 1, title: "Ancillaries", url: "/sanitarywareware", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ3emI1bjUzYWc4dXV1MTRxMGp5eHFrNmdwcG50IiwiZmlsZW5hbWUiOiJBbmNpbGxhcmllcy5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6Ind6YjVuNTNhZzh1dXUxNHEwanl4cWs2Z3BwbnQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.-2lD1AHiwNFmTL1XxI3t4r1R-dLQaxCpOiruhG5NjQU" },
    { id: 1, title: "Decorative Laminates", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjemdsYXVyZDhycDd5cWJmM3Fhc3hxbnMyZm83IiwiZmlsZW5hbWUiOiJEZWNvcmF0aXZlLUxhbWluYXRlcy5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImN6Z2xhdXJkOHJwN3lxYmYzcWFzeHFuczJmbzciLCJjb252ZXJ0X3dlYnAiOnRydWV9.3-DAkRaURcoStVyk-o_xUnamp34tmYaYNmGTHbr1GQY" },
    { id: 1, title: "Lock ", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJxdTN5YTB2c2Foa2FwbXR4ZjRxeDI4MDdnaXFkIiwiZmlsZW5hbWUiOiJEb29yICYgQ2FiaW5ldCBIYXJkd2FyZS53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoicXUzeWEwdnNhaGthcG10eGY0cXgyODA3Z2lxZCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.3IxxICcMd5XMoWay8a5m-xSDU0pe3Sd0AvTHuN3a9hA" },
    { id: 1, title: "Hardware Tools", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJxbmhzOTR6NDNsYXNrbWRjYjdmeTBlZWRnZGIyIiwiZmlsZW5hbWUiOiJIYXJkd2FyZSBUb29scy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoicW5oczk0ejQzbGFza21kY2I3ZnkwZWVkZ2RiMiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.UHCbfAAgIDhuaa4BP93w_HzM-6WDcnGpfj4XTIP0aio" },
  ]

  const brand = [
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIycXVraDR4cnE3NHd6NTdldDBrd21oMHdrODdlIiwiZmlsZW5hbWUiOiJvem9uZS5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6IjJxdWtoNHhycTc0d3o1N2V0MGt3bWgwd2s4N2UiLCJjb252ZXJ0X3dlYnAiOnRydWV9.Kz1Dtzn7fu-CushbupaIiaFSw2BYvHXNikR7FiWpR-o" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI4NHVsNXlkeTI2ZzNjNXc4dTV0ZTNncDdmdnprIiwiZmlsZW5hbWUiOiJIZXR0aWNoLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiODR1bDV5ZHkyNmczYzV3OHU1dGUzZ3A3ZnZ6ayIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.eZHrhx-93-ivl1r7suDs5jTpustPDCJuX-_IMHSaaCQ" },
    { id: 1, img: "brand/Yale.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJhZml1djFkaXEyN3E4dmt3b3d6ZmU3amFmYmllIiwiZmlsZW5hbWUiOiJHb2RyZWoucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJhZml1djFkaXEyN3E4dmt3b3d6ZmU3amFmYmllIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QUGkTBWGYldoOtOhHL9J_9WUyMfIVah9jjXeG0nNVSI" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJhaGUwcnU5cHlqOHNhcnVlMXYxaDN0c2tyZ3YxIiwiZmlsZW5hbWUiOiJEb3JzZXQucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJhaGUwcnU5cHlqOHNhcnVlMXYxaDN0c2tyZ3YxIiwiY29udmVydF93ZWJwIjp0cnVlfQ.TLGZBvsHla-w_aP87ki8SYo5AqFBBkpFM6G4T1561aA" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJpejE2ODVsYWMzbW5rNDE5ZWtrYXllazY0Z3YwIiwiZmlsZW5hbWUiOiJBSVBMIEFCUk8ucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJpejE2ODVsYWMzbW5rNDE5ZWtrYXllazY0Z3YwIiwiY29udmVydF93ZWJwIjp0cnVlfQ.WjdwfEzpJoJdOjLx2W-5xZFBSKp3A2mh_fmeDZPsbWg" },
    { id: 1, img: "brand/QUBA.webp" },
    { id: 1, img: "brand/Simero.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwZXEzeG9jaWRkZGNkM29qcjhpdHZ1c3kzcWZmIiwiZmlsZW5hbWUiOiJIYWZlbGUucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiIwZXEzeG9jaWRkZGNkM29qcjhpdHZ1c3kzcWZmIiwiY29udmVydF93ZWJwIjp0cnVlfQ.MyDFbrMlHhFk20UuhhORj2CRt1s34A5QVtAbhfvZwMI" },
    { id: 1, img: "brand/Tamron.webp" },
    { id: 1, img: "brand/Virgo-logo.webp" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ5Y3phdmZndGFnc2VsbHAwc2JtNXY3djJqaDYzIiwiZmlsZW5hbWUiOiJBVE9NLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoieWN6YXZmZ3RhZ3NlbGxwMHNibTV2N3Yyamg2MyIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.3MXlDi7Cu6_vRPQHMidSWcECpU0g-bb7qwXFvukne9w" },
  ]

const WoodenMaterial = () => {
    return (
      <>
      <HeroBanner items={bannerAssets}/>
      <Category items={category} title="Hardware & Tools Products" />
      <Register/>
      <Brand items={brand} title="Top Hardware & Tools Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou title="Why Buy Hardware & Tools from Sabloo Stores?" />
      <OurStore/>
      </>
    )
  }

export default WoodenMaterial