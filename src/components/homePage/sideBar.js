import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import homebtnlogo from "../imges/homebtnlogo.svg"
import walletbtnlogo from "../imges/walletbtnlogo.svg"
import randomeventbtnlogo from "../imges/randomeventbtnlogo.svg"
import specialeventbtnlogo from "../imges/specialeventbtnlogo.svg"
import competitioneventbtnlogo from "../imges/competitioneventbtnlogo.svg"
import w2whomelogo from "../imges/w2whomelogo.svg"

const SideBar = () => {

    const Container = styled.div`
        background: #FCFCFC;
        border: 1px solid rgba(171, 171, 171, 0.1);
        box-sizing: border-box;
        border-radius: 0px 8px 8px 0px;
    `
    const MenuContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 289px;
        margin: 0px 20px;
        margin-bottom: 142px;
    `
    const DisabledButton = styled.div`
        img {
            margin-right: 30px;
        }
        padding: 17px 34px;
        border: none;
        background: none;
        border-radius: 14px;
        flex-direction: column;
        margin: 10px;
        text-decoration: none;
        font-family: khula;
        color: rgba(26, 26, 26, 0.4);
        font-weight: bold;
        position: relative;
    `
    const SidebarButton = styled.a`
        img {
            margin-right: 30px;
        }
        padding: 17px 34px;
        border: none;
        background: #B3B3B3;
        border-radius: 14px;
        flex-direction: column;
        margin: 10px;
        text-decoration: none;
        font-family: khula;
        color: rgba(26, 26, 26);
        font-weight: bold;
        position: relative;
    `;
    const SidebarLink = styled(Link)`
        img {
            margin-right: 30px;
        }
        padding: 17px 34px;
        border: 1px solid #EAEAEA;
        background: #FFFFFF;
        border-radius: 14px;
        flex-direction: column;
        margin: 10px;
        text-decoration: none;
        font-family: khula;
        color: rgba(26, 26, 26, 0.76);
        font-weight: bold;
        position: relative;
        &:hover {
            box-shadow: 3px 20px 50px rgba(173, 173, 173, 0.09)
        }
        &:focus {
            background: #B3B3B3;
            color: #000000;
            border: none;
        }
    `;
    const MenuHeadline = styled.h3`
        font-family: "Open Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: rgba(26, 26, 26, 0.4);
    `
    const Title = styled.div`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 69px;
        margin-left: 29px;
        margin-top: 48px;
        div h2{
            font-family: Khula;
            font-weight: bold;
            font-size: 32px;
            margin: 0px;
            padding: 0px;
            line-height: 51px;
            text-transform: capitalize;
        }
        div p {
            font-family: Khula;
            font-weight: 600;
            font-size: 14px;
            margin: 0px;
            padding: 0px;
            line-height: 22px;
            text-transform: capitalize;
        }
        div {
            flex: none;
            margin: 0px 15px;
            background : -webkit-linear-gradient(123.04deg, #E660E1 4.89%, #9552E1 78.94%, #8552E1 144.87%) ;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    `

    return (
        <Container>
            <Title>
                <img src={w2whomelogo}/>
                <div>
                    <h2>Win2Win </h2>
                    <p>Dashboard</p>
                </div>
            </Title>
            <MenuContainer>
                <SidebarLink exact to="/"><img src={homebtnlogo}/> Home</SidebarLink>
                <DisabledButton><img src={walletbtnlogo}/> Wallet</DisabledButton>
            </MenuContainer>
            <MenuContainer>
                <MenuHeadline>Events</MenuHeadline>
                <SidebarLink exact to="/random">                                
                    <img src={randomeventbtnlogo}/>
                    Random Event
                </SidebarLink>                                
                <SidebarLink exact to="/special">
                    <img src={specialeventbtnlogo}/>
                    Special Event
                </SidebarLink> 
                <SidebarLink exact to="/compitition">
                    <img src={competitioneventbtnlogo}/>
                    Competition Event
                </SidebarLink>
            </MenuContainer>
        </Container>                
    )
}

export default SideBar
