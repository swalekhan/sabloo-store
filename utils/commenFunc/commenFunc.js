



export const calDiscount = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2)
}


export const fetchData = async (url) => {
    const data = await fetch(url);
    return await data.json()
}

export const putData = async(url, cart) => {
    const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
            "Content-type": "application/json"
        }
    })
    return await res.json()
}

export const isLogin = () => {
    return JSON.parse(localStorage.getItem("token"))
}