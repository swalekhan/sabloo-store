import HeroBanner from "@/component/Header/HeroBanner"
import Brand from "@/component/brand/Brand"
import Category from "@/component/categorys/Category"
import OurStore from "@/component/ourStores/OurStore"
import Register from "@/component/register/Register"
import Sugggested from "@/component/suggestedLink/Suggested"
import WhyFromYou from "@/component/whyFromYou/WhyFromYou"

  const bannerAssets = [
    {id:1, mobImg:"https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJuMjZudHAyN3psOHozaW0yODQzd3c4dmY4czhvIiwiZmlsZW5hbWUiOiJTaG9wIFF1YWxpdHkgQ2VtZW50IGZvciBIb3VzZSBDb25zdHJ1Y3Rpb24uanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoibjI2bnRwMjd6bDh6M2ltMjg0M3d3OHZmOHM4byIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.3lRCExbBmWBmTwX04Qgajb-w838JugSR1D1X47kL32U", deskImg:"https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIydjNtaDdwdHhkNjlrMzRoeTltNWdmN2Y2YmY4IiwiZmlsZW5hbWUiOiJTaG9wIFF1YWxpdHkgQ2VtZW50IGZvciBIb3VzZSBDb25zdHJ1Y3Rpb24uanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiMnYzbWg3cHR4ZDY5azM0aHk5bTVnZjdmNmJmOCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.OtTQ20dbHK4ADrMxzxMhyLUZrTKzTAVJEAswdKJV4Ig"},
    ] 
  const category = [
    { id: 1, title: "Cement", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJmZnA2bzRueWUwZjRjMW52M2Zvc25ycWJ1c3lpIiwiZmlsZW5hbWUiOiJHcmV5IENlbWVudC5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJmZnA2bzRueWUwZjRjMW52M2Zvc25ycWJ1c3lpIiwiY29udmVydF93ZWJwIjp0cnVlfQ.KbTgtSbXfFHhU5huTDC6rUhGb7DUbMnkch-8899Eb6M" },
    { id: 1, title: "Brick", url: "paints", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJqYWxuMHBmYm9ubGg3Y2w4eGY4bGU1MGVjOXV2IiwiZmlsZW5hbWUiOiJCcmlja3MuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiamFsbjBwZmJvbmxoN2NsOHhmOGxlNTBlYzl1diIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.5eE1XDkV46UjkXXTzA54xRNBI8GtpkATRGo4FyJUH3M" },
    { id: 1, title: "Aggregate", url: "/Sheets", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI3dXg2dXRoNXR3cDRoNGZiMW05aXQ1eGltMXlmIiwiZmlsZW5hbWUiOiJBZ2dyZWdhdGUuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiN3V4NnV0aDV0d3A0aDRmYjFtOWl0NXhpbTF5ZiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.nwk7jqJsBu5kw4JJ4XJwPw2ky7WcnVoCDF-_V9Qc4Is" },
    { id: 1, title: "Sand", url: "/Light", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIweGI4MDZwcGx0bWh1NzFzaGRkbW5kamV0Z3p0IiwiZmlsZW5hbWUiOiJTYW5kLmpwZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL2pwZWciLCJibG9iX2tleSI6IjB4YjgwNnBwbHRtaHU3MXNoZGRtbmRqZXRnenQiLCJjb252ZXJ0X3dlYnAiOnRydWV9.DHeXYLHaS_jGQU5nvFhWYFVxYaGW4EGfImkx7rKGrkk" },
    { id: 1, title: "TMT", url: "/sanitarywareware", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJmdDRqdndlYnU3Z3N1dmFnN2ZtMG9zOXhkNmplIiwiZmlsZW5hbWUiOiJUTVQuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoiZnQ0anZ3ZWJ1N2dzdXZhZzdmbTBvczl4ZDZqZSIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.-26hdNkdXwS-8UcO16U2tk-bMqNiAkyqTLtzjMYzSS8" },
    { id: 1, title: "Steel Garter", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJseG15ajUxeWt0dXM2Ym44YmZjNWI3cXFkMjY0IiwiZmlsZW5hbWUiOiJTdGVlbCBHYXJ0ZXIuanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoibHhteWo1MXlrdHVzNmJuOGJmYzViN3FxZDI2NCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.OFVKwdzjxWuIrV3CVmd5CRNw_3wp-H9QqSzabaG5wO8" },
    { id: 1, title: "Steel Angels", url: "/Tiles", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIxd20yMjU2eWNpcGlhdTlwcTM3NnBiNzV4eDlvIiwiZmlsZW5hbWUiOiJTdGVlbCBBbmdsZS5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiIxd20yMjU2eWNpcGlhdTlwcTM3NnBiNzV4eDlvIiwiY29udmVydF93ZWJwIjp0cnVlfQ.QK7n1ncQXRo3HKanAVJuIM5coT7rymy7KTZjs7FCYMQ" },
    { id: 1, title: "Steel T Iron", url: "/Bath&Fitting", img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ4Z3lmOTB5bHh1bHlvcHk0d3hoZmViMHNlM3NuIiwiZmlsZW5hbWUiOiJTdGVlbCBUIElyb24uanBnIiwiY29udGVudF90eXBlIjoiaW1hZ2UvanBlZyIsImJsb2Jfa2V5IjoieGd5ZjkweWx4dWx5b3B5NHd4aGZlYjBzZTNzbiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.FDbZqqSOV20X0GUkhOP-aeNyaAOCoLDY4wqvl66-gKo" },
  ]

  const brand = [
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvYnNwa3Bza3A0cHZ2cWxyc3F5MGl6N2p6M2dkIiwiZmlsZW5hbWUiOiJTdGVsbWF4LUxvZ28ucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiJvYnNwa3Bza3A0cHZ2cWxyc3F5MGl6N2p6M2dkIiwiY29udmVydF93ZWJwIjp0cnVlfQ.gaCQwJ_yRdTSq8nImT3_aWM7vGoR3HFcZxYekdcKHOw" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJveDkydGlhbnp4aGJ5cms2cmttbXZqdjJuZmszIiwiZmlsZW5hbWUiOiJTaHJpIFJhdGhpIEdyb3VwLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5Ijoib3g5MnRpYW56eGhieXJrNnJrbW12anYybmZrMyIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.ZJgUg2tbbQIXhDyTgzQEFE4jHi030Cv-Ce8E-u-JaWw" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwZHIxdGRpOWZqajVjbmR0NGlxeG8yaHcyeTBuIiwiZmlsZW5hbWUiOiJKSy1MYWtzaG1pLUxvZ28ucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiIwZHIxdGRpOWZqajVjbmR0NGlxeG8yaHcyeTBuIiwiY29udmVydF93ZWJwIjp0cnVlfQ.iWZA27RuhGJECINH_ScfWyiAyar-NIyq3PQWkvipLrw" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ6cHllcTQ1MDd0dWQxajR4MHFwZDhwbDduaWYyIiwiZmlsZW5hbWUiOiJFdXJvdGhlcm0tbG9nby5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6InpweWVxNDUwN3R1ZDFqNHgwcXBkOHBsN25pZjIiLCJjb252ZXJ0X3dlYnAiOnRydWV9.c_lUsvoI7ZCV75PfZPlUThp0IJaQ0p2xDIqlyDMIGy8" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjcmZkODc5NHJpcmM2ZWxsdHpiMWswcjh5ZmFyIiwiZmlsZW5hbWUiOiJKSy1TdXBlci1DZW1lbnQtTG9nby5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImNyZmQ4Nzk0cmlyYzZlbGx0emIxazByOHlmYXIiLCJjb252ZXJ0X3dlYnAiOnRydWV9.6QAFq9iTfEvEf5Kq-ivQ92To-AzCRGEfA1720kHf-UE" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJkZ3g0NTZleHY4bmJtZzMzc25jcjNyODFxMWU0IiwiZmlsZW5hbWUiOiJCaXJsYS1VdHRhbS1Mb2dvLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsImJsb2Jfa2V5IjoiZGd4NDU2ZXh2OG5ibWczM3NuY3IzcjgxcTFlNCIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.M2-FASrGkUnPP5I9thDkv7xA7PIpj2BCVb91ZJcod3Q" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrM2IxMzZwajVkbTFiem56NjczM2VtMXp1a3B6IiwiZmlsZW5hbWUiOiJBQ0MtTG9nby5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6ImszYjEzNnBqNWRtMWJ6bno2NzMzZW0xenVrcHoiLCJjb252ZXJ0X3dlYnAiOnRydWV9.eBSPJ3Tg0Lv8N1IMwpkGYP0KjYDDtvKS9tpm3uJfxeE" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJydTg0dGVmM3B5M2hwam5rcG5rZm5lczd0YjJyIiwiZmlsZW5hbWUiOiJLQU1ESEVOVS5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6InJ1ODR0ZWYzcHkzaHBqbmtwbmtmbmVzN3RiMnIiLCJjb252ZXJ0X3dlYnAiOnRydWV9.p4DtRAaDXkMGa9h7XIFdv8kFDXHVJEGPS0FXaB67FJo" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1dGttdnp2eGw3eWdzd2R5Y3o3eXEwaDlrM25wIiwiZmlsZW5hbWUiOiJTaHJlZS1DZW1lbnQtTG9nby5wbmciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9wbmciLCJibG9iX2tleSI6IjV0a212enZ4bDd5Z3N3ZHljejd5cTBoOWszbnAiLCJjb252ZXJ0X3dlYnAiOnRydWV9.M4kX0tUGyT-Armf-XXr1gAWJczCNrT3DxQ1dgw2jp30" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJha2ZndTJrd3QzbWM3M3VoOHdvd2txZnNob2NwIiwiZmlsZW5hbWUiOiJQSURJTElURS1EUi1GSVhJVC5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJha2ZndTJrd3QzbWM3M3VoOHdvd2txZnNob2NwIiwiY29udmVydF93ZWJwIjp0cnVlfQ.B9JXjvTHJr7ZFJs4OI_Zrn-_pe3UQv5-dOP3Vbylo_4" },
    { id: 1, img: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2dWI4cnA4dDQ1Y2UzbXYzMjBmaGJkbzlvd3VjIiwiZmlsZW5hbWUiOiJXb25kZXItQ2VtZW50LUxvZ28ucG5nIiwiY29udGVudF90eXBlIjoiaW1hZ2UvcG5nIiwiYmxvYl9rZXkiOiI2dWI4cnA4dDQ1Y2UzbXYzMjBmaGJkbzlvd3VjIiwiY29udmVydF93ZWJwIjp0cnVlfQ.qcxTm9LOXOtFOAtYEnO6yAG8Ch5XDaXWIU3P9BlL03o" },
  ]

const StructuralMaterial = () => {
    return (
      <>
      <HeroBanner items={bannerAssets}/>
      <Category items={category} title="Structural Materials Products" />
      <Register/>
      <Brand items={brand} title="Top Structural Materials Brands"/>
      <Sugggested title="You may also like"/>
      <WhyFromYou title="Why Buy Structural Materials From Sabloo Stores?" />
      <OurStore/>
      </>
    )
  }
  
  export default StructuralMaterial