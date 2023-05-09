import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"

  const bannerAssets = [
    {id:1, mobImg:"https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJnMjc2NnlkeWhzaTRxenJjb3k3aHA2ZGd4am52IiwiZmlsZW5hbWUiOiJIaXBwbyBTdG9yZXMgRWxlY3RyaWNhbCAmIExpZ2h0aW5nIFByb2R1Y3RzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJnMjc2NnlkeWhzaTRxenJjb3k3aHA2ZGd4am52IiwiY29udmVydF93ZWJwIjp0cnVlfQ.dtiR-jtUJl24ioxJ_Qrne0YYRDAOtjUvZGe7SUwTv40", deskImg:"https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJtOWlrdWFiMXdib2hpeWttcjRsNHY0d3I5aTIzIiwiZmlsZW5hbWUiOiJIaXBwbyBTdG9yZXMgRWxlY3RyaWNhbCAmIExpZ2h0aW5nIFByb2R1Y3RzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJtOWlrdWFiMXdib2hpeWttcjRsNHY0d3I5aTIzIiwiY29udmVydF93ZWJwIjp0cnVlfQ.x1x1eVH1Sdel7W5pwsShS0u_cnBaG_ZtCYvCmfMTNt8"},
    ] 
  const category = [
    { id: 1, title: "Fans", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqeXhoMXZhbzRtNjl1NDg4dWE5MDcyeDhsNGp4IiwiZmlsZW5hbWUiOiJGYW5zLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6Imp5eGgxdmFvNG02OXU0ODh1YTkwNzJ4OGw0angiLCJjb252ZXJ0X3dlYnAiOnRydWV9.49PLSTCyEiW3H0R642YxOqull6GSepvzYgV6T2JIcOM" },
    { id: 1, title: "MCB", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJxeDQ2bmZiZzlmZGt0NnpuNzF5czR0YW9ydWlrIiwiZmlsZW5hbWUiOiJTd2l0Y2hnZWFyLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6InF4NDZuZmJnOWZka3Q2em43MXlzNHRhb3J1aWsiLCJjb252ZXJ0X3dlYnAiOnRydWV9.gquKFuqEmalyPvn1RYpf4sxrs9kypCzZ074TAs6SELY" },
    { id: 1, title: "Switch", url: "/Sheets", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1NHY3OTltcjRwdXQxeTZ2ZWtseTdrM3E4OXkwIiwiZmlsZW5hbWUiOiJTd2l0Y2hlcy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI1NHY3OTltcjRwdXQxeTZ2ZWtseTdrM3E4OXkwIiwiY29udmVydF93ZWJwIjp0cnVlfQ.a0botlG5eIThAdQohfwc0zXUPXjvARelJrMlWk5jNeI" },
    { id: 1, title: "Wires", url: "/Light", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1bzEycm9id2RpcHRwbjJ1d3h5NWVwOXJsb3VoIiwiZmlsZW5hbWUiOiJXaXJlcy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI1bzEycm9id2RpcHRwbjJ1d3h5NWVwOXJsb3VoIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QffEDY15bKwI--KPX4W2jYt8lkWg3utXZbrc4yJMl1w" },
    { id: 1, title: "LED Bulbs", url: "paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJzMzB1ZGNoOWpqZ2NvdXF4MTBtdzJtNHJ4Z2ZxIiwiZmlsZW5hbWUiOiJMRUQtQnVsYnMuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiczMwdWRjaDlqamdjb3VxeDEwbXcybTRyeGdmcSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.MFQiqniwopCBXk296lZD7PJiIOfnMwDJg9m9kJgMH_M" },
    { id: 1, title: "LED Strips", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJlMzhrM3c5dmFnM2E4N3Jnc2UxZGRmdThxcmw0IiwiZmlsZW5hbWUiOiJMRUQtU3RyaXBzLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6ImUzOGszdzl2YWczYTg3cmdzZTFkZGZ1OHFybDQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.ede3E1ZfcFo9yXAWr4USK1K_l1CFBR2pGDrPvVUncEU" },
    { id: 1, title: "LED Battens", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwZ2Q5ZXZ0ZDdpN3lsOXBsbzN2NGoydGF0Z3F2IiwiZmlsZW5hbWUiOiJMRUQtVHViZWxpZ2h0cy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiIwZ2Q5ZXZ0ZDdpN3lsOXBsbzN2NGoydGF0Z3F2IiwiY29udmVydF93ZWJwIjp0cnVlfQ.GpeIvX7nyLD8x-oE3jc79bsbT-ET9KtkZU7q2eODQ3U" },
    { id: 1, title: "Electrial Tools", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ4cnlpMjd1ano2aDRpbnJxbGNmNXlzbWRudHZvIiwiZmlsZW5hbWUiOiJFbGVjdHJpY2FsIFRvb2xzIGluIGRlbGhpLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6InhyeWkyN3VqejZoNGlucnFsY2Y1eXNtZG50dm8iLCJjb252ZXJ0X3dlYnAiOnRydWV9.6XLPbBhlcpsjcu6mwfpUkwk6f3oZDXZhFz5b3SMT0ZM" },
  ]

  const brand = [
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIxaWpyeDZsZGN6dms4eHpnc2R2ZGFncTJ5YXlwIiwiZmlsZW5hbWUiOiJBbmNob3IgTG9nby53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiMWlqcng2bGRjenZrOHh6Z3NkdmRhZ3EyeWF5cCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.yYaS2nZPdkTM4aleWdbQpoDVLpOS0oA78Yzxaxi5gUA" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2eWNiYTM0bHN6dmxxam9iMGFiOHR6cnV2dGVqIiwiZmlsZW5hbWUiOiJSUiBLQUJFTC5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6InZ5Y2JhMzRsc3p2bHFqb2IwYWI4dHpydXZ0ZWoiLCJjb252ZXJ0X3dlYnAiOnRydWV9.cMw_c5sYTyQRvJqJXogOJdKsYut9ULiHC2qWhbJQg2M" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJybDl2NDNjaThiYjd2bWJjcWo0ZzE0amtmazJzIiwiZmlsZW5hbWUiOiJQSElMSVBTLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJybDl2NDNjaThiYjd2bWJjcWo0ZzE0amtmazJzIiwiY29udmVydF93ZWJwIjp0cnVlfQ.FH7A69TP5mjmvyARbhbn3l8umf5I11b5uAT9kXYt1W0" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI3cm02c2Zib2gxcjlmb3V5dm5sNmJsbXNjNGlvIiwiZmlsZW5hbWUiOiJJTkRJQUJVTExTLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiI3cm02c2Zib2gxcjlmb3V5dm5sNmJsbXNjNGlvIiwiY29udmVydF93ZWJwIjp0cnVlfQ.6vMDEbvpvnUhG2Afr3VMcoB7IvBkMfMRqd68vuxzOJg" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ0OXFsYW40MWVkb2l2ODJodzc0ZmVna29ua2U3IiwiZmlsZW5hbWUiOiJTY2huZWlkZXIgRWxlY3RyaWMud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6InQ5cWxhbjQxZWRvaXY4Mmh3NzRmZWdrb25rZTciLCJjb252ZXJ0X3dlYnAiOnRydWV9.9lwm2KEEJYCoM-ozfv6qwNGOmFUhZhBmNKmcYQ7Wg10" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrNWwzOHlwNHV1cWpvZ3J6ZTh5NzdhZDZxeTFjIiwiZmlsZW5hbWUiOiJHT0xETUVEQUwud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6Ims1bDM4eXA0dXVxam9ncnplOHk3N2FkNnF5MWMiLCJjb252ZXJ0X3dlYnAiOnRydWV9.JVq43_K4Px8U-npc6tYj8nOJ9eIGcvhbOlUfw09DGAA" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwNG5rZ3hhOGltMXoxc3ZlYTlsenczZHRyOHFtIiwiZmlsZW5hbWUiOiJHUkVBVFdISVRFLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiIwNG5rZ3hhOGltMXoxc3ZlYTlsenczZHRyOHFtIiwiY29udmVydF93ZWJwIjp0cnVlfQ.dZMYfuXOEHHgnYPYxCXHgRyJV4a42nZn6LP4yXOwPyU" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJobjZjd3NveWZtaXRqbm11YmhmbnlvYWN2cDZzIiwiZmlsZW5hbWUiOiJIYXZlbGxzIEFORCBDUkFCVFJFRS53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiaG42Y3dzb3lmbWl0am5tdWJoZm55b2FjdnA2cyIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.e1TenQ_Tzj2VX9rsoUQSFhBVmUhL56aWjDppiEri-3A" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwZXEzeG9jaWRkZGNkM29qcjhpdHZ1c3kzcWZmIiwiZmlsZW5hbWUiOiJIYWZlbGUucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiIwZXEzeG9jaWRkZGNkM29qcjhpdHZ1c3kzcWZmIiwiY29udmVydF93ZWJwIjp0cnVlfQ.MyDFbrMlHhFk20UuhhORj2CRt1s34A5QVtAbhfvZwMI" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJhcHU1NTZmcTE0Zm9ic3N3N3Y4cnF5MmNmMDN3IiwiZmlsZW5hbWUiOiJMZWdyYW5kLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiJhcHU1NTZmcTE0Zm9ic3N3N3Y4cnF5MmNmMDN3IiwiY29udmVydF93ZWJwIjp0cnVlfQ.pqmIQUI835Eont_-KYufoccqKfQl2u3BEqlBUOfpIlQ" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2cWI4MHNlcTNqdnh5aWtzYmU0ODJ0cDRldGpkIiwiZmlsZW5hbWUiOiJOb3Jpc3lzLndlYnAiLCJjb250ZW50X3R5cGUiOiJpbWFnZS93ZWJwIiwiYmxvYl9rZXkiOiI2cWI4MHNlcTNqdnh5aWtzYmU0ODJ0cDRldGpkIiwiY29udmVydF93ZWJwIjp0cnVlfQ.HwyyFLcSt0r8hAqXRGKU_q4EhEc3DPqn0WcberTjR_U" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ5Y3phdmZndGFnc2VsbHAwc2JtNXY3djJqaDYzIiwiZmlsZW5hbWUiOiJBVE9NLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoieWN6YXZmZ3RhZ3NlbGxwMHNibTV2N3Yyamg2MyIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.3MXlDi7Cu6_vRPQHMidSWcECpU0g-bb7qwXFvukne9w" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJsdnpoNTh2czRmdHY5M3RuZGwyaHF4eTdjdWVuIiwiZmlsZW5hbWUiOiJEaWFtb25kIGxvZ28ud2VicCIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3dlYnAiLCJibG9iX2tleSI6Imx2emg1OHZzNGZ0djkzdG5kbDJocXh5N2N1ZW4iLCJjb252ZXJ0X3dlYnAiOnRydWV9.YSNqRHOJeJPnzAKaQsz-ZeGLJihtz1t1mNIlVpJKfZk" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwcjY4MXZpN3Y4d2tzYTNyZTd5dGd5MmxnaXU3IiwiZmlsZW5hbWUiOiJXSVBSTy53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiMHI2ODF2aTd2OHdrc2EzcmU3eXRneTJsZ2l1NyIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.n6NPJaOWcYkVcsU1gg9dNs-mi4Qf5cJqIl3JaBHS_oU" },
  ]  


const Electrical = () => {
    return (
      <>
      <HeroBanner items={bannerAssets}/>
      <Category items={category} title="Electrical & Lighting Products" />
      <Register/>
      <Brand items={brand} title="Top Electrical & Lighting Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou  title="Why Buy Electrical & Lightings From Sabloo Stores?" />
      <OurStore/>
      </>
    )
  }

export default Electrical