import "./index.css";
import React, { useState } from "react";
import Signin from "./components/signin";
import { Link } from "react-router-dom"
import HomePage from "./components/homePage";
import Axios from "axios";

function App() {
  const data = '{\r\n    "email": "mohamedaldie@gmail.com",\r\n    "password": "P@$$w0rd"\r\n}';
  const config = {
    method: 'post',
    url: 'https://w2wworld.herokuapp.com/api/v1/accounts/w2w-user/authenticate',
    headers: { },
    data : data
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
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

  const logout = () => {
      setUser({ email: "" })
  }

  return (
    <div className="App">
      <p>{console.log(config)}</p>
      {(user.email != "") ? (
        <HomePage user={user} logout={logout} />
      ) : (
        <Signin login={login} error={error} />
      )}
    </div>
  );

}

export default App;
