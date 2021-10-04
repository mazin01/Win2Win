import React from 'react'
import styled from 'styled-components'
import cashlogo from "../imges/cashlogo.svg"

const UsedCoins = () => {
    
    const Container = styled.div`
        grid-area: main;
        width: 100%;
        height: 135px;
        background: #FFFFFF;
        box-shadow: 3px 20px 50px rgba(173, 173, 173, 0.09);
        border-radius: 16px;
        position: relative;
        margin: 10px 0px;
        display: flex;
        align-items: center;
        font-family: khula;
        div:first-of-type {
            border: 2.75px solid #FFC52C;
            border-radius: 50%;
            width: 71px;
            height: 71px;
            align-self: center;
            justify-items: center;
            position: static;
            background: #FFFBF2;
            margin: 28px;
            img {
                margin-top: 22px;
                margin-left: 26px;
            }
        }
        div:last-of-type {
            h2 {
                font-family: Khula;
                font-style: normal;
                font-weight: bold;
                font-size: 37.5px;
                line-height: 10px;
                color: #6C6DFF;
            }
            p {
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 0px;
                color: #000000;
                span {
                    font-weight: bold;
                }
            }
        }
    `

    return (
        <Container>
            <div>
                <img src={cashlogo}/>
            </div>
            <div>
                <h2>50%</h2>                                
                <p>Of <span>4000</span> Used Coins</p>
            </div>
        </Container>
    )
}

export default UsedCoins
