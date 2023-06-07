import { useRouter } from "next/router"
import Cards from "@/component/card/Cards";
import Head from "next/head";


const Search = ({ results }) => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Sabloo Marble</title>
                <meta name="description" content="Welcome to Sabloo Marble! Explore our extensive collection of high-quality tiles, lighting solutions, wooden materials, structural materials, and paints. Find the perfect tiles for your floors, walls, and backsplashes. Discover stylish lighting options to illuminate your space. Browse our selection of wooden materials for construction and woodworking projects. We also offer a range of structural materials for your building needs. Enhance your spaces with our premium paints in various colors and finishes. Shop now and bring your vision to life with Sabloo Marble." />
            </Head>

            {results.length >= 1 ? (
                <Cards items={results} />
            ) : (
                <h2 className="heading">no data Found</h2>
            )
            }
        </>
    )
}

export async function getServerSideProps({ query }) {
    const res = await fetch(`https://sabloo-store-backend.vercel.app/search/${query.slug}`);
    const results = await res.json();
    return {
        props: {
            results,
        },
    };
}

export default Search

