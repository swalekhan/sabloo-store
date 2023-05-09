import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"

const bannerAssets = [
  { id: 1, mobImg: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwOXh6d3JqYXJ6dnNuMDF3NGExYzNydXFxMzJtIiwiZmlsZW5hbWUiOiJQb3B1bGFyIFBhaW50IEJyYW5kcyBhdCB3aG9sZXNhbGUgUHJpY2VzLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6IjA5eHp3cmphcnp2c24wMXc0YTFjM3J1cXEzMm0iLCJjb252ZXJ0X3dlYnAiOnRydWV9.rwft34XOZcOiPcqIHwfJZMrFL11Mwq82d5rgNop0woY", deskImg: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJhN2VhMGJxZTlvazQxY3FiOHp1YjByaWhiMXM4IiwiZmlsZW5hbWUiOiJIaXBwbyBzdG9yZXNfUGFpbnQgQmFubmVyLTIuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiYTdlYTBicWU5b2s0MWNxYjh6dWIwcmloYjFzOCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.Uf98tJnGBp5OWC6megIL5u7ifTqpLKNL_Q1DoMwdjkQ" },
]
const category = [
  { id: 1, title: "Wood & Metal", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJxbXdwOWY0bXVlZzduNjVoNHpheDRrdWc4cGp0IiwiZmlsZW5hbWUiOiJXb29kICYgTWV0YWwucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJxbXdwOWY0bXVlZzduNjVoNHpheDRrdWc4cGp0IiwiY29udmVydF93ZWJwIjp0cnVlfQ.8UiturYjYU_BA60rF2FGqYMhR2GgqL0mXKq-cKAjqIc" },
  { id: 1, title: "Interior Paints", url: "paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJtZjd2eXM2dnh2dWRseHNhMHA1dGdmd3Zkc3N1IiwiZmlsZW5hbWUiOiJJbnRlcmlvciBQYWludC5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJtZjd2eXM2dnh2dWRseHNhMHA1dGdmd3Zkc3N1IiwiY29udmVydF93ZWJwIjp0cnVlfQ.ApcWxXAWvbn0jGBQgPWI0CU7o4HxRUWy13xZ10d6skQ" },
  { id: 1, title: "Exterior Paints", url: "/Sheets", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJhbmF1aXpiZm5wZGE1ZG8xZnJxeHhzdDRsY256IiwiZmlsZW5hbWUiOiJFeHRlcmlvciBQYWludC5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJhbmF1aXpiZm5wZGE1ZG8xZnJxeHhzdDRsY256IiwiY29udmVydF93ZWJwIjp0cnVlfQ.4RdI66bizb46824rz-XASwTTTs9hAsFLRTb-LLHpBg0" },
  { id: 1, title: "Wood Coading", url: "/Light", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJmbTN0bTRhcnBpcXd6a2F3b215empxdDNweGp6IiwiZmlsZW5hbWUiOiJXb29kIENvYXRpbmcuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiZm0zdG00YXJwaXF3emthd29teXpqcXQzcHhqeiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.jt0VdOBYiNpOPgj8v3eGYIzUW3VIbNnpM27XCMe7haM" },
  { id: 1, title: "Waterproofing", url: "/sanitarywareware", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ0OWNhcm94NXh3a3d0ZGRxdmR0M240ODFibzVmIiwiZmlsZW5hbWUiOiJXYXRlcnByb29maW5nLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6InQ5Y2Fyb3g1eHdrd3RkZHF2ZHQzbjQ4MWJvNWYiLCJjb252ZXJ0X3dlYnAiOnRydWV9.GyPpJq-babPuBURHPc27addLkDwS9j98ZYhHCSBMSSE" },
  { id: 1, title: "Ancillaries", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI5YTNzcjF6aW1xazlkM2piYmVjeWkzN2hxaHR6IiwiZmlsZW5hbWUiOiJBbmNpbGxhcmllcy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI5YTNzcjF6aW1xazlkM2piYmVjeWkzN2hxaHR6IiwiY29udmVydF93ZWJwIjp0cnVlfQ.o_3urAEDs0wvyA6wHEd_c6QFnpdHfC9L-WRXxSNnuoM" },
  { id: 1, title: "Undercoats", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIzYmdrZ2dtc3Zqbzk1amRwcDZ2aDZwMTBmN2NnIiwiZmlsZW5hbWUiOiJVbmRlcmNvYXRzLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6IjNiZ2tnZ21zdmpvOTVqZHBwNnZoNnAxMGY3Y2ciLCJjb252ZXJ0X3dlYnAiOnRydWV9.dvzpz1T5wYI7CqK7dddbkdBXgrLz52urlQlgeR3Qy8k" },
  { id: 1, title: "False Ceiling", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJodnoyenNiMWlubnhjMHFiYnh6ZW10d3hjbnBzIiwiZmlsZW5hbWUiOiJGYWxzZSBDZWlsaW5nLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6Imh2ejJ6c2IxaW5ueGMwcWJieHplbXR3eGNucHMiLCJjb252ZXJ0X3dlYnAiOnRydWV9.bLvHx1n0aPSABftwlPa5cVNAi1QyUAM-A4UhwYLKUkQ" },
]

const brand = [
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIzNHk0NWFvaTRueHVxYTgxZmc0czNyOTgxdGk2IiwiZmlsZW5hbWUiOiJBc2lhbi1QYWludHMucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiIzNHk0NWFvaTRueHVxYTgxZmc0czNyOTgxdGk2IiwiY29udmVydF93ZWJwIjp0cnVlfQ.hpHG4vxGaF4aZV2WmOHGdWM-67Mxn3llYjS4yrvQnOA" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJwNng2Yjl2NWE4bDBrdDg2aWV1aXJsdDdmMjAxIiwiZmlsZW5hbWUiOiJLQU5TQUktTkVST0xBQy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJwNng2Yjl2NWE4bDBrdDg2aWV1aXJsdDdmMjAxIiwiY29udmVydF93ZWJwIjp0cnVlfQ.NYZHUny4o98gMyhgTfoIoHni3AGq7sV2THYMl04eeY0" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2eGFjZTRmd3AxNXZzeGI0ZHp0M3g0d3EybGF5IiwiZmlsZW5hbWUiOiJCUklUSVNILVBBSU5UUy5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI2eGFjZTRmd3AxNXZzeGI0ZHp0M3g0d3EybGF5IiwiY29udmVydF93ZWJwIjp0cnVlfQ.Dk8eUF6-j_edRtg76cKJ1N7KArX-k71_BLWWDE0DWeg" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvazZ4aTJwdTJzY2FzeWJvdnk5bHN5cmtteHRjIiwiZmlsZW5hbWUiOiJ1c2cgYm9yYWwucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJvazZ4aTJwdTJzY2FzeWJvdnk5bHN5cmtteHRjIiwiY29udmVydF93ZWJwIjp0cnVlfQ.3rEOhAcHhwhFKJi7ifWxOvDY8pvLrIZSOxjUk6A5VRs" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjNDBjZ2lodHA0MW52cGJ0a3YzZzk5cHV1cmQ5IiwiZmlsZW5hbWUiOiJTQUtBUk5JLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiYzQwY2dpaHRwNDFudnBidGt2M2c5OXB1dXJkOSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.9OMatCBvc8Hrts5WEGINrKIf5aqJcTFe4SWwVxH5Lyw" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvMzd5NzJxOTcwbjIxYmI2amwyOGhlZTUwM3NiIiwiZmlsZW5hbWUiOiJTQUlOVC1HT0JBSU4uanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoibzM3eTcycTk3MG4yMWJiNmpsMjhoZWU1MDNzYiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.kWxSmRv1lUJy0GDv7FKlLXAx8DWtKf0nLFTeIrd-Soc" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ3cmgxa2UzcGhnems4NHZvaXRmMDk5YTJ2bzVzIiwiZmlsZW5hbWUiOiJTSVJDQS5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6IndyaDFrZTNwaGd6azg0dm9pdGYwOTlhMnZvNXMiLCJjb252ZXJ0X3dlYnAiOnRydWV9.vZzVRtK09P_WMO6knjc3nOipzPPCZwx8RKs4HPXM0I0" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ3dnFudDdlZGZ1MnVjbXc1bmMzMGtqdGpxOWh3IiwiZmlsZW5hbWUiOiJCRVJHRVIucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJ3dnFudDdlZGZ1MnVjbXc1bmMzMGtqdGpxOWh3IiwiY29udmVydF93ZWJwIjp0cnVlfQ.ttghiK5kaQJJg6rsldKGmV-4IDQvNUYNTkCgm-mfuDQ" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIyazdhZTVzd25kd3liYnp2dW45ODIxcDhxcHhhIiwiZmlsZW5hbWUiOiJBS1pPLU5PQkVMLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6IjJrN2FlNXN3bmR3eWJienZ1bjk4MjFwOHFweGEiLCJjb252ZXJ0X3dlYnAiOnRydWV9.K263aye8wp9lqkMFOJxcN2NfhJgWwzCRO8nt0uCLdwk" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJha2ZndTJrd3QzbWM3M3VoOHdvd2txZnNob2NwIiwiZmlsZW5hbWUiOiJQSURJTElURS1EUi1GSVhJVC5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJha2ZndTJrd3QzbWM3M3VoOHdvd2txZnNob2NwIiwiY29udmVydF93ZWJwIjp0cnVlfQ.B9JXjvTHJr7ZFJs4OI_Zrn-_pe3UQv5-dOP3Vbylo_4" },
  { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJmZHU1YW1odXk4dThyMXJzejRybGVmenJhdGIxIiwiZmlsZW5hbWUiOiJTaWthLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6ImZkdTVhbWh1eTh1OHIxcnN6NHJsZWZ6cmF0YjEiLCJjb252ZXJ0X3dlYnAiOnRydWV9.VSGf_47phPMAqieBFClpRqslWMmXpMrnGPmQVYVcZpU" },
]

const Paints = () => {
  return (
    <>
      <HeroBanner items={bannerAssets} />
      <Category items={category} title="Paints & Surface Care Products" />
      <Register />
      <Brand items={brand} title="Top Paints & Surface Care Brands" />
      <Sugggested title="You may also like" />
      <WhyFromYou title="Why Buy Paints From Sabloo Stores?" />
      <OurStore />
    </>
  )
}

export default Paints