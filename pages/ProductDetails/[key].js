import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux";
import ProductIcon from "@/component/productDetailIcon/ProductIcon";
import { useState } from "react";
import Cards from "@/component/card/Cards";
import { calDiscount } from "@/utils/commenFunc/commenFunc";
import { addItem } from "@/store/cartSlice";

const items = [
    { id: 1, mobImg: "assets/mob1.png.webp", deskImg: "assets/desk1.png.webp" },
    { id: 1, mobImg: "assets/mob2.png.webp", deskImg: "assets/desk2.png.webp" },
    { id: 1, mobImg: "assets/mob3.png.webp", deskImg: "assets/desk3.png.webp" },
]
const arr = [
    { id: 1, title: "Available on Order", imgUrl: "https://www.hippostores.com/images/pdp/on-order.svg" },
    { id: 1, title: "See @ Store", imgUrl: "https://www.hippostores.com/images/pdp/see-at-store.svg" },
    { id: 1, title: "Non- returnable", imgUrl: "https://www.hippostores.com/images/pdp/non-return.svg" },
    { id: 1, title: "Sabloo Delivered", imgUrl: "https://www.hippostores.com/images/pdp/hippo-shipping.png" },
    { id: 1, title: "Delivery Charges Extra", imgUrl: "https://www.hippostores.com/images/pdp/delivery_charge.svg" },
    { id: 1, title: "Usually Ships in 24 -72 hours", imgUrl: "https://www.hippostores.com/images/pdp/usually-ships.svg" },
]
const cardItem = [
    { id: 1, quantity: 0, title: "Somany Matt 600x600  600x600", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "tiles/mobTile1.png.webpbrand/KOHLER.webp" },
    { id: 2, quantity: 0, title: "Somany Matt 600x600", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrMnFyZnVyNDRic2hnN3Y2cjZwMW44bmt1dWNqIiwiZmlsZW5hbWUiOiJQYWludCBwbHAgYmFubmVyIG1vYmlsZS53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiazJxcmZ1cjQ0YnNoZzd2NnI2cDFuOG5rdXVjaiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.g9MIU_E4whojs3vyz_vkMmb0qhcvJO5Ewhr28hPyGQc" },
    { id: 3, quantity: 0, title: "Somany Matt 600x600", category: "tile", subCategory: "Kitchen Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy9wb25nNGg5MHNuYWJ6ZXBlOGlxazRld3A3amRpLzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjMwMDAwMDIyMjdfMS5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJwb25nNGg5MHNuYWJ6ZXBlOGlxazRld3A3amRpIiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.-cjgMKTNREDQfm8CjAQb4gUXqsgw4PPU_yu7Pp3B3Ew" },
    { id: 4, quantity: 0, title: "Somany Matt 600x600", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy9tazJ1dmFzZzZmNnB3cXVhYXVrbDVhM3E2Ym00LzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjIwMDAwMDUyNzlfMS5KUEciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJtazJ1dmFzZzZmNnB3cXVhYXVrbDVhM3E2Ym00IiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.d8QJZd7o8i2Ka2BfFGllSdXb6MWVaZetUGiVlxo-JRc" },
    { id: 5, quantity: 0, title: "Somany Matt 600x600  600x600", category: "tile", subCategory: "wall Tiles", Brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "brand/KOHLER.webp" },
    { id: 6, quantity: 0, title: "Somany Matt 600x600", category: "tile", subCategory: "Floor Tiles", brand: "somany", discount: 0, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy9kMHlnaGR3YmRnODZ6amdrOTBlOWIycmFxaW90LzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjMwMDAwMDIyMjFfMS5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJkMHlnaGR3YmRnODZ6amdrOTBlOWIycmFxaW90IiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.td7BAtW-0TADkZkbrpcZV3XnOTbH9IPghBopmuzIJJo" },
    { id: 7, quantity: 0, title: "Somany Matt 600x600 ", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy83b2x6bzN1cXVxZ2l4ZndoMndneWdiMzZ3eTFrLzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjIwMDAwMDE4NjlfMS5KUEciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI3b2x6bzN1cXVxZ2l4ZndoMndneWdiMzZ3eTFrIiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.Pq5m9OJJXLMwwS-g1BrhYqI9b-kVCNC_yzqccD-5zlo" },
]

const pincode = ["243638", "110017"]
const Key = ({ item , similiarProducts}) => {
    const [count, setCount] = useState(1)
    const [input, setInput] = useState("")
    const [pinWarn, setPinWarn] = useState("")
    const router = useRouter();
    const dispatch = useDispatch()
    const { key } = router.query
    const { cart } = useSelector(state => state.cart)
    // const item = cardItem.find((item) => item._id === key)
    const findInCart = cart.find((e) => e._id === item._id)

    const checkHandler = () => {
        if (input.length >= 6 && pincode.includes(input)) {
            setPinWarn(<p id="availble">delivery available at {input}</p>)
        } else if (input.length >= 6 && !pincode.includes(input)) {
            setPinWarn(<p id="not_availble">delivery not available at {input}</p>)
        } else if (input.length < 6) {
            setPinWarn(<p id="not_availble">Please enter 6 digits pincode</p>)
        }
    }

    const addToHandler = () => {
        const isLogin = localStorage.getItem("token")
        if (!isLogin) {
            router.push("/auth/Signup")
        }
        dispatch(addItem({
            ...item,
            quantity: count,
        }))
    }

    if(router.isFallback){
        return <p>loading....</p>
    }
    return (
        <div className="product">
            <div className="productDetail">
                <div className="product_header">
                    <Carousel infiniteLoop={true} thumbWidth={90} showArrows={false}>
                        {item?.imgUrl?.map((e, i) => (
                            <div key={i}>
                                <img src={e} alt="pic" className="product_img" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="product_main">
                    <h2>{item?.name}</h2>
                    <h4>Brand : <span>{item?.brand}</span> | model : <span>{item?.model}</span></h4>
                    <div className="product_main_price">
                        <div className="price_before_discount">
                            <h4>MRP : <span>${item?.price}</span></h4>
                            <p>{"(Incl. off all taxes)"}</p>
                        </div>
                        <div className="price_after_price">
                            <h4>${calDiscount(item?.price, item?.discount)}</h4>
                        </div>
                    </div>
                    {findInCart?.quantity >= 1 ? <p id="availble">{findInCart?.quantity} items present in your cart</p> :
                        <h4>MOQ : 1</h4>
                    }
                    <div className="main_end">
                        <div className="main_end_input">
                            <button className="minus_btn" onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
                            <input type='text' min={1} max={500} required onChange={(e) => setCount(e.target.value)} value={count} />
                            <button className="plus_btn" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <div className="main_btn">
                            <button onClick={addToHandler}>Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="product_footer">
                    <p>Check delivery option</p>
                    <div className="footer_delevery_checker">
                        <input type="text" placeholder="Please enter 6 digits Pincode" onChange={(e) => { setInput(e.target.value) }} />
                        <button onClick={checkHandler}>Check</button>
                        {pinWarn}
                    </div>
                    <div className="product_icon">
                        {arr.map((item, i) => (
                            <ProductIcon {...item} key={i} />
                        ))}
                    </div>
                </div>
            </div>

            {/* .......................similar product........................................ */}
            <div className="similiar_product">
                <h2 className="heading">Similar products</h2>
                <Cards items={similiarProducts} />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    // Fetch a list of product IDs from your API
    const data = await fetch("https://sabloo-store-backend.vercel.app");
    const productIds = await data.json()
    const paths = productIds.map((item) => ({
        params: { key: item?._id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Fetch the product data from your API using the ID
    const response= await fetch(`https://sabloo-store-backend-841orm0vj-swalekhan1522-gmailcom.vercel.app/productDetail/${params.key}`);
    const data = await response.json();
    const res = await fetch(`https://sabloo-store-backend-841orm0vj-swalekhan1522-gmailcom.vercel.app/products/${data.category}`);
    const similiarProducts = await res.json();
    return { 
        props: { 
            item:data,
           similiarProducts,
        } };
}

export default Key