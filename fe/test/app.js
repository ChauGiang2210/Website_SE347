const getAllProducts = () => {
    const productApi = 'http://localhost:3001/api/product'
    fetch(productApi, { method: 'GET', 
    headers: { 'Content-Type': 'application/json' } })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
        })
        .catch(function(err) {
            console.log('Có lỗi xảy ra');
        })

}
getAllProducts();

const login = (data) => {
    const loginApi = 'http://localhost:3001/api/user/login'
    fetch(loginApi, { method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
        })
        .catch(function(err) {
            console.log('Có lỗi xảy ra');
        })

}
// login({
//     email: 'user8@example.com',
//     password: 'password7'
// });

const register = (data) => {
    const registerApi = 'http://localhost:3001/api/user/register'
    fetch(registerApi, { method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
        })
        .catch(function(err) {
            console.log('Có lỗi xảy ra');
        })

}

// register({
//     username: "user9", 
//     email: "user9@example.com", 
//     password: "123456789", 
//     role: "user"})


// const createProduct = (data) => {
//     const productApi = 'http://localhost:3001/api/product'
//     fetch(productApi, { method: 'POST', 
//     headers: { 'Content-Type': 'application/json', 
//             Authorization: `Bearer ${Cookies.get("token")}`},
//     body: JSON.stringify(data)
// })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
            
//         })
//         .catch(function(err) {
//             console.log('Có lỗi xảy ra');
//         })

// }