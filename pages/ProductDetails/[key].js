
import { useRouter } from "next/router"



const Key  = () => {
   const router  = useRouter();
   const {key} = router.query
    return (
        <h1>{key}</h1>
    )
}

export default Key