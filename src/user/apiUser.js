//Fetch for user CRUD

// const readUser = async(params, credentials) => {
//     console.log(`params: ${params}`)
//     try {
//         let response = await fetch('https://kays-travel-blog-api.herokuapp.com/api/login', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer '+ credentials.token
//             },
//             body: JSON.stringify(params)
//         }) 
//         return await response.json()
//     } catch(err) {
//         console.log(err)
//     }
// }

// export {readUser}