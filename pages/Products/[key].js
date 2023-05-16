import { useRouter } from 'next/router'
import Cards from '@/component/card/Cards';


const arr = [
    { id: 1, title: "Wall Tiles" },
    { id: 2, title: "Ceramic Tiles" },
    { id: 3, title: "Floor Tiles" },
    { id: 4, title: "Kitchen Tiles" },
    { id: 5, title: "Outdoor Tiles" },
    { id: 6, title: "Wooden Flooring" },
    { id: 7, title: "Bathroom Tiles" },
    { id: 8, title: "Cladding Tiles" },
    { id: 9, title: "Pluming" },
    { id: 10, title: "Faucets" },
    { id: 11, title: "Vanity" },
    { id: 12, title: "Shower" },
    { id: 13, title: "Bath Fitting" },
    { id: 14, title: "Wash Basins" },
    { id: 15, title: "Water Closets" },
    { id: 16, title: "Concealed Tanks" },
    { id: 17, title: "Fans" },
    { id: 18, title: "MCB" },
    { id: 19, title: "Switch" },
    { id: 20, title: "Wires" },
    { id: 21, title: "LED Bulbs" },
    { id: 22, title: "LED Strips" },
    { id: 23, title: "LED Battens" },
    { id: 24, title: "Electrial Tools" },
    { id: 25, title: "Wood and Metal" },
    { id: 26, title: "Interior Paints" },
    { id: 27, title: "Exterior Paints" },
    { id: 28, title: "Wood Coading" },
    { id: 29, title: "Waterproofing" },
    { id: 30, title: "Ancillaries" },
    { id: 31, title: "Undercoats" },
    { id: 32, title: "False Ceiling" },
    { id: 33, title: "Playboards" },
    { id: 34, title: "WPC Boards" },
    { id: 35, title: "MDF" },
    { id: 36, title: "Doors" },
    { id: 37, title: "Ancillaries" },
    { id: 38, title: "Decorative Laminates" },
    { id: 39, title: "Lock " },
    { id: 40, title: "Hardware Tools" },
    { id: 41, title: "Cement" },
    { id: 42, title: "Brick" },
    { id: 43, title: "Aggregate" },
    { id: 44, title: "Sand" },
    { id: 45, title: "TMT" },
    { id: 46, title: "Steel Garter" },
    { id: 47, title: "Steel Angels" },
    { id: 48, title: "Steel T Iron" }, 
    { id: 49, title: "Paints" },
    { id: 50, title: "Bath and Fitting" },
    { id: 51, title: "Sheets" },
    { id: 52, title: "Light" },
    { id: 53, title: "Sanitaryware" },
    { id: 54, title: "Plumming" },
    { id: 55, title: "Switch and wire" },
    { id: 56, title: "Tiles" },
]

const Key = ({ data }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>{router.query.key}</h1>
            <Cards items={data} />
        </>

    )
}

export async function getStaticPaths() {
    // Fetch a list of product IDs from your API
    const paths = arr.map((item) => ({
        params: { key: item?.title },
    }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Fetch the product data from your API using the ID
    const response = await fetch(`https://sabloo-store-backend.vercel.app/products/${params.key}`);
    const data = await response.json();

    return { props: { data } };
}

export default Key
