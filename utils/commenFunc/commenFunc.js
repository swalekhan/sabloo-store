



export const calDiscount = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2)
}


export const fetchData = async (url) => {
    try {
        const data = await fetch(url);
        return await data.json()
    } catch (err) {
        console.log(err)
    }

}

export const putData = async (url, cart) => {
    try {
        const res = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
                "Content-type": "application/json"
            }
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }

}

export const postData = async (url, data) => {
    try {
        const response = fetch(url, {
            method: "POST",
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("somethin went wrong")
        }

        return await response.json()

    } catch (err) {
        console.log(err)
    }
}


export const isLogin = () => {
    return JSON.parse(localStorage.getItem("token"))
}