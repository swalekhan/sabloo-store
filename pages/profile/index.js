import { useSelector } from "react-redux"
import Head from "next/head"

const MyProfile = () => {
    const { isLogin } = useSelector(state => state.auth)
    return (
        <>
            <Head>
                <title>My Profile</title>
                <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
            </Head>

            <section className="myProfile">
                <h2 className="heading">My Profile</h2>
                <div className="myProfil_info">
                    <div className="myProfile_content">
                        <h4>{isLogin?.displayName ? isLogin?.displayName : "Not Define"}</h4>
                        <h5>{isLogin?.localId?.substring(0, 15)}</h5>
                        <p>Address: <span>Not define</span></p>
                        <p>Email :<span>{isLogin?.email}</span></p>
                        <p>Phone :<span>Not define</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyProfile