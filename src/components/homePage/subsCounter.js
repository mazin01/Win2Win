import React from 'react'
import styled from 'styled-components'
import userlogo from "../imges/userlogo.svg"

const SubsCounter = () => {

    const Container = styled.div`
        height: 135px;
        width: 426px;
        background: #FFFFFF;
        box-shadow: 3px 20px 50px rgba(173, 173, 173, 0.09);
        border-radius: 16px;
        margin: 10px 0px;
        display: flex;
        align-items: center;
        div {
            flex-direction: column;
        }
        img {
            margin: 27px;
        }
        div h2 {
            font-family: Khula;
            font-style: normal;
            font-weight: bold;
            font-size: 45px;
            color: #000000;
            margin: 0px;
            line-height: 72px;
            text-transform: capitalize;
        }
        div p {
            font-family: Khula;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 0px;
            color: #000000;
        }
    `

    return (
        <Container>
            <img src={userlogo}/>
            <div>
                <h2>5000</h2>
                <p>Subscribers Engaged with your Events</p>
            </div>
        </Container>
    )
}

export default SubsCounter
