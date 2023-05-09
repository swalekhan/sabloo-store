const { useRouter } = require("next/router")





const Key = () => {
    const router = useRouter()
    console.log(router
        )
    return (
      <h1>key{router.query.key}</h1>
    )
}

export default Key