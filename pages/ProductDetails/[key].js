import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux";
import ProductIcon from "@/component/productDetailIcon/ProductIcon";
import { useState } from "react";
import Head from "next/head";
import Cards from "@/component/card/Cards";
import { calDiscount, fetchData } from "@/utils/commenFunc/commenFunc";
import { addItem } from "@/store/cartSlice";



const arr = [
    { id: 1, title: "Available on Order", imgUrl: "https://www.hippostores.com/images/pdp/on-order.svg" },
    { id: 1, title: "See @ Store", imgUrl: "https://www.hippostores.com/images/pdp/see-at-store.svg" },
    { id: 1, title: "Non- returnable", imgUrl: "https://www.hippostores.com/images/pdp/non-return.svg" },
    { id: 1, title: "Sabloo Delivered", imgUrl: "https://www.hippostores.com/images/pdp/hippo-shipping.png" },
    { id: 1, title: "Delivery Charges Extra", imgUrl: "https://www.hippostores.com/images/pdp/delivery_charge.svg" },
    { id: 1, title: "Usually Ships in 24 -72 hours", imgUrl: "https://www.hippostores.com/images/pdp/usually-ships.svg" },
]
const pincode = ["243638", "110017"]

const Key = ({ item, similiarProducts }) => {
    const [count, setCount] = useState(1)
    const [input, setInput] = useState("")
    const [pinWarn, setPinWarn] = useState("")
    const router = useRouter();
    const dispatch = useDispatch()
    const { key } = router.query
    const { cart } = useSelector(state => state.cart)
    const findInCart = cart.find((e) => e._id === item._id)
    const {isLogin} = useSelector(state => state.auth)

    // .....................pincode check...................................
    const checkHandler = () => {
        if (input.length >= 6 && pincode.includes(input)) {
            setPinWarn(<p id="availble">delivery available at {input}</p>)
        } else if (input.length >= 6 && !pincode.includes(input)) {
            setPinWarn(<p id="not_availble">delivery not available at {input}</p>)
        } else if (input.length < 6) {
            setPinWarn(<p id="not_availble">Please enter 6 digits pincode</p>)
        }
    }

    // ................add to card.....................................
    const addToHandler = () => {
        if (!isLogin.email) {
            router.push("/auth/Signup")
        } else {
            dispatch(addItem({
                ...item,
                quantity: count,
            }))
        }

    }

    if (router.isFallback) {
        return <p>loading....</p>
    }
    
    return (
        <>
            <Head>
                <title>{item?.name}</title>
                <meta name="description" content={item.description} />
            </Head>

            <section className="product">
                <div className="productDetail">
                    <div className="product_header">
                        <Carousel infiniteLoop={true} thumbWidth={90} showArrows={false}>
                            {item?.imgUrl?.map((e, i) => (
                                <div key={i}>
                                    <img src={e} alt="pic" className="product_img" />
                                </div>
                            ))}
                        </Carousel>
                        <h4 className="disccount">{item?.discount >= 1 ? item?.discount + "% OFF" : "new"}</h4>
                    </div>
                    <div className="product_main">
                        <h2>{item?.name}</h2>
                        <h4>Brand : <span>{item?.brand}</span> | model : <span>{item?.model}</span></h4>
                        <div className="product_main_price">
                            <div className="price_before_discount">
                                <h4>MRP : <span>&#8377; {item?.price}</span></h4>
                                <p>{"(Incl. off all taxes)"}</p>
                            </div>
                            <div className="price_after_price">
                                <h4>&#8377; {calDiscount(item?.price, item?.discount)}</h4>
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
            </section>

            {/* .......................similar product........................................ */}
            <section className="similiar_product">
                <h2 className="heading">Similar products</h2>
                <Cards items={similiarProducts} />
            </section>

        </>
    )
}

export async function getStaticPaths() {
    // Fetch a list of product IDs from your API
    const data = await fetchData("https://sabloo-store-backend.vercel.app");
    const paths = data.map((item) => ({
        params: { key: item?._id.toString() },
    }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Fetch the product data from your API using the ID
    const data = await fetchData(`https://sabloo-store-backend.vercel.app/productDetail/${params.key}`);
    const similiarProducts  = await fetchData(`https://sabloo-store-backend.vercel.app/products/${data.category}`);
    
    return {
        props: {
            item: data,
            similiarProducts,
        }
    };
}

export default Key