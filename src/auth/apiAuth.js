const signin = async (user) => {
    console.log(user)
    try {
        let response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            mode: 'cors',
            headers:{
                'accept': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: {user}
        })
        let data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}


export {signin}