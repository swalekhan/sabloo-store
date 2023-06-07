import OurStore from "@/component/ourStores/OurStore"
import Head from "next/head"


const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Any issue. Please contact us" />
            </Head>

            <OurStore />
        </>

    )
}

export default ContactUs