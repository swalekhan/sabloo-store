import { useRouter } from "next/router"
import Cards from "@/component/card/Cards";


const Search = ({ results }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Cards items={results} />
        </>
    )
}
export default Search

export async function getServerSideProps({ query }) {
    const res = await fetch(`http://localhost:8080/search/${query.slug}`);
    const results = await res.json();
    return {
        props: {
            results,
        },
    };
}