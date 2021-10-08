import React, { useState } from "react";
import Signin from "./components/signin";
import { Link } from "react-router-dom"
import HomePage from "./components/homePage";
import axios from "axios";

function App() {
  // const data = '{\r\n    "email": "mohamedaldie@gmail.com",\r\n    "password": "P@$$w0rd"\r\n}';
  // const config = {
  //   method: 'post',
  //   url: 'https://w2wworld.herokuapp.com/api/v1/accounts/w2w-user/authenticate',
  //   headers: { },
  //   data : data
  // };
  
  // Axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

const token = "<token>"

const config = {
  method: 'get',
  url: 'https://w2wworld.herokuapp.com/api/v1/all_subscribers',
  headers: { 
    'Server': 'Cowboy',
    'Connection': 'keep-alive',
    'Vary': 'Origin, Accept-Encoding',
    'Access-Control-Allow-Credentials': 'true',
    'X-Dns-Prefetch-Control': 'off',
    'X-Frame-Options': 'SAMEORIGIN',
    'Strict-Transport-Security': 'max-age=15552000; includeSubDomains',
    'X-Download-Options': 'noopen',
    'X-Content-Type-Options': 'nosniff',
    'X-Xss-Protection': '1; mode=block',
    'X-Ratelimit-Limit': '1000',
    'X-Ratelimit-Remaining': '999',
    'Date': 'Wed, 15 Sep 2021 13:57:59 GMT',
    'X-Ratelimit-Reset': '1631714280',
    'Content-Type': 'application/json; charset=utf-8',
    'Etag': 'W/"28b51-xivqaev/tJoMHhWN54R4Xp8pDsA"',
    'Content-Encoding': 'gzip',
    'Transfer-Encoding': 'chunked',
    'Via': '1.1 vegur',
   }
};

axios(config)
.then(function (resp) {
  console.log(JSON.stringify(resp.data));
})
.catch(function (error) {
  console.log(error);
});


  const adminUser = {
    fullName: "Mohamed info",
    phoneNumber: "0642832912",
    email: "info@gmail.com",
    userName: "gdfs124",
    password: "P@$$w0rd",
  }
      // to logout reset the details to noting
    const logout = () => {
      setUser({ email: "" })
  }


  // --------- 3-if the details matched the existing user details go to the home page if not show error --------------------

  const [user, setUser] = useState({email: "", password: "", fullName:"", phoneNumber:""});
  const [error, setError] = useState("")

  const login = details => {
    if (details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        fullName: adminUser.fullName,
        email: details.email
      })
    } else {
      setError(<div>No match, be sure you wrote the right email and password or <Link to="/signup">Signup</Link></div>)
    }
  }

  return (
    <div className="App">
      {console.log()}
      {(user.email != "") ? (
        <HomePage user={user} logout={logout} />
      ) : (
        <Signin login={login} error={error} />
      )}
    </div>
  );

}

export default App;
