import React, { useState } from 'react'
import w2wLogo from "./imges/w2wLogo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components";

const Signin = ({ login, error }) => {
// ------------------------------------------------------the styling(start)------------------------------------------------------
    const FormContainer = styled.div`
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        justify-items: center;
        align-items: center;
    `
    const FormTitle = styled.h1`
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 96px;
    `
    const Logo = styled.img`
        position: absolute;
        left: 4.69%;
        right: 90.47%;
        top: 6.76%;
        bottom: 87.87%;
    `
    const ErrorMsg = styled.div`
        border: 2px solid #a14141;
        border-radius: 10px;
        background-color: rgba(255, 182, 169, 0.527);
        font-family: Poppins;
        padding: 5px;
    `
    const FormPart = styled.div`
        position: static;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 26px 0px;
    `
    const FormPartTitle = styled.label`
        font-family: Khula;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: #71717A;
    `
    const FormTextarea = styled.input`
        height: 57px;
        width: 532px;
        border: 2px solid #B3B3B3;
        box-sizing: border-box;
        border-radius: 10px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        color: #333333;
        text-indent: 17px;
        &:focus {
            outline: none;
            border-color: #8552E1;
        }
    `
    const SubmitBtn = styled.input`
        display: flex;
        padding: 21px 240px;
        margin-top: 79px;
        width: 530px;
        height: 68px;
        background: #8553E0;
        border-radius: 13px;
        border: none;
        position: static;
        font-family: Khula;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
        &:hover {
            box-shadow: 0px 15px 40px rgba(133, 82, 225, 0.21);
            cursor: pointer;
        }
    `
    const FormTrailer = styled.p`
        font-family: Khula;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: #71717A;
        margin-top: 53px;
    `
    const FTLink = styled(Link)`
        text-decoration-line: none;
        color: #8553E0;
        &:hover{
            color: #E660E1;
        }
    `
    const Decoration1 = styled.div`
        position: absolute;
        width: 365px;
        height: 365px;
        left: 85%;
        top: 104px;
        border-radius: 50%;
        background: rgba(196, 196, 196, 0.1);
    `
    const Decoration2 = styled.div`
        position: absolute;
        width: 365px;
        height: 365px;
        left: 90%;
        top: 104px;
        border-radius: 50%;
        background: rgba(196, 196, 196, 0.1);
    `
    const Decoration3 = styled.div`
        position: absolute;
        width: 679px;
        height: 679px;
        left: -156px;
        bottom: -185px;
        border-radius: 50%;
        background: rgba(196, 196, 196, 0.1);
    `
// ------------------------------------------------------the styling(end)------------------------------------------------------


    //  2-sending the details as login values
    const [details, setDetails] = useState({fullName: "", email: "", password: ""})
    const submitHandler = e => {
        e.preventDefault();
        login(details)
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>
                        <Logo src={w2wLogo} />
                        <FormContainer>
                            <form onSubmit={submitHandler}>
                                <FormTitle>SignIn</FormTitle>
                                {(error != "") ? (<ErrorMsg>{error}</ErrorMsg>) : ""}
                                <FormPart>
                                    <FormPartTitle htmlFor="email">Email</FormPartTitle>
                                                                                                                    {/* 1-setting the value of the input to details  */}
                                    <FormTextarea type="email" autocomplete="email" name="email" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                                </FormPart>
                                <FormPart>
                                    <FormPartTitle htmlFor="password">Password</FormPartTitle>
                                    <FormTextarea type="password" autocomplete="current-password" name="password" required onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                                </FormPart>
                                <SubmitBtn type="submit" value="Sign In"/>
                                <FormTrailer>Dont have account? <FTLink to="/signup">Create account</FTLink></FormTrailer>
                            </form>
                        </FormContainer>
                        <Decoration1></Decoration1>
                    </div>
                </Route>
                <Route path="/signup">
                    <div>
                        <Logo src={w2wLogo} />
                        <FormContainer>
                            <form>
                                <FormTitle>SignUp</FormTitle>
                                <FormPart>
                                    <FormPartTitle htmlFor="text">Full name</FormPartTitle>
                                    <FormTextarea type="text" autocomplete="fullName" name="fullName" required/>
                                </FormPart>
                                <FormPart>
                                    <FormPartTitle htmlFor="tel">Phone number</FormPartTitle>
                                    <FormTextarea type="tel" autocomplete="phoneNumber" name="phoneNumber" required/>
                                </FormPart>
                                <FormPart>
                                    <FormPartTitle htmlFor="email">Email</FormPartTitle>
                                    <FormTextarea type="email" autocomplete="email" name="email" required/>
                                </FormPart>
                                <FormPart>
                                    <FormPartTitle htmlFor="password">Password</FormPartTitle>
                                    <FormTextarea type="password" autocomplete="new-password" name="password" required/>
                                </FormPart>
                                <SubmitBtn type="submit" value="Signup"/>
                                <FormTrailer>Already have account? <FTLink to="/">SignIn</FTLink></FormTrailer>
                            </form>
                        </FormContainer>
                        <Decoration2></Decoration2>
                        <Decoration3></Decoration3>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Signin