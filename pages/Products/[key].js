import { useRouter } from 'next/router'
import Cards from '@/component/card/Cards';
import Head from 'next/head';
import { allProductsLink } from '@/utils/data/data';
import { fetchData } from '@/utils/commenFunc/commenFunc';

const Key = ({ results }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>Sabloo Marble</title>
                <meta name="description" content="all stuff under one roof" />
            </Head>

            <section>
                <h2 className='heading'>{router.query.key}</h2>
                {results.length >= 1 ? (
                    <Cards items={results} />
                ) : (
                    <h2 className="no_data_found">no data Found</h2>
                )
                }
            </section>
        </>

    )
}

export async function getStaticPaths() {
    // Fetch a list of product IDs from your API
    const paths = allProductsLink.map((item) => ({
        params: { key: item?.title },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params, query }) {
    // Fetch the product data from your API using the ID
    const { key } = params || query
    const results = await fetchData(`https://sabloo-store-backend.vercel.app/products/${key}`)
    return { props: { results } };
}
export default Key




