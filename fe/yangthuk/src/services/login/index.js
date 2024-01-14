export const login = (data) => {
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