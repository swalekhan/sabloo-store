import { useRouter } from 'next/router'
import Cards from '@/component/card/Cards';


const arr = [
    { id: 1, title: "Tiles" },
    { id: 1, title: "Paints" },
    { id: 1, title: "Bath&Fitting" },
    { id: 1, title: "Sheets" },
    { id: 1, title: "Light" },
    { id: 1, title: "Sanitaryware" },
    { id: 1, title: "Plumming" },
    { id: 1, title: "Switch and wire" },
    { id: 1, title: "Wall Tiles" },
    { id: 2, title: "Ceramic Tiles" },
    { id: 3, title: "Floor Tiles" },
    { id: 4, title: "Kitchen Tiles" },
    { id: 5, title: "Outdoor Tiles" },
    { id: 6, title: "Wooden Flooring" },
    { id: 7, title: "Bathroom Tiles" },
    { id: 8, title: "Cladding Tiles" },
    { id: 1, title: "Pluming" },
    { id: 1, title: "Faucets" },
    { id: 1, title: "Vanity" },
    { id: 1, title: "Shower" },
    { id: 1, title: "Bath Fitting" },
    { id: 1, title: "Wash Basins" },
    { id: 1, title: "Water Closets" },
    { id: 1, title: "Concealed Tanks" },
    { id: 1, title: "Fans" },
    { id: 1, title: "MCB" },
    { id: 1, title: "Switch" },
    { id: 1, title: "Wires" },
    { id: 1, title: "LED Bulbs" },
    { id: 1, title: "LED Strips" },
    { id: 1, title: "LED Battens" },
    { id: 1, title: "Electrial Tools" },
    { id: 1, title: "Wood and Metal" },
    { id: 1, title: "Interior Paints" },
    { id: 1, title: "Exterior Paints" },
    { id: 1, title: "Wood Coading" },
    { id: 1, title: "Waterproofing" },
    { id: 1, title: "Ancillaries" },
    { id: 1, title: "Undercoats" },
    { id: 1, title: "False Ceiling" },
    { id: 1, title: "Playboards" },
    { id: 1, title: "WPC Boards" },
    { id: 1, title: "MDF" },
    { id: 1, title: "Doors" },
    { id: 1, title: "Ancillaries" },
    { id: 1, title: "Decorative Laminates" },
    { id: 1, title: "Lock " },
    { id: 1, title: "Hardware Tools" },
    { id: 1, title: "Cement" },
    { id: 1, title: "Brick" },
    { id: 1, title: "Aggregate" },
    { id: 1, title: "Sand" },
    { id: 1, title: "TMT" },
    { id: 1, title: "Steel Garter" },
    { id: 1, title: "Steel Angels" },
    { id: 1, title: "Steel T Iron" },
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
        params: { key: item?.title.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Fetch the product data from your API using the ID
    const response = await fetch(`http://localhost:8080/products/${params.key}`);
    const data = await response.json();

    return { props: { data, } };
}

export default Key
