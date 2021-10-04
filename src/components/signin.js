import "../index.css";
import React, { useState } from 'react'
import w2wLogo from "./imges/w2wLogo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Signin = ({ login, error }) => {

    const [details, setDetails] = useState({fullName: "", email: "", password: ""})
    const submitHandler = e => {
        e.preventDefault();
        login(details)
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="container1">
                        <img src={w2wLogo} className="logo1" />
                        <div className="form-container">
                            <form onSubmit={submitHandler}>
                                <h1 className="form-title">SignIn</h1>
                                {(error != "") ? (<div className="error">{error}</div>) : ""}
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-textarea" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-textarea" required onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                                </div>
                                <input className="form-button" type="submit" value="Sign In"/>
                                <p className="form-line">Dont have account? <Link className="form-line-link" to="/signup">Create account</Link></p>
                            </form>    
                        </div>
                        <div className="circle1"></div>
                    </div>
                </Route>
                <Route path="/signup">
                    <div className="container1"> 
                        <img src={w2wLogo} className="logo1" />
                        <div className="form-container">
                            <form>
                                <h1 className="form-title">SignUp</h1>
                                <div className="form-group">
                                    <label htmlFor="text">Full name</label>
                                    <input type="text" name="fullName" className="form-textarea" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel">Phone number</label>
                                    <input type="tel" name="phoneNumber" className="form-textarea" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-textarea" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-textarea" required/>
                                </div>
                                <input className="form-button" type="submit" value="Signup"/>
                                <p className="form-line">Already have account? <Link className="form-line-link" to="/">SignIn</Link></p>
                            </form>
                        </div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Signin