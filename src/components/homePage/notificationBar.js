import React from 'react'
import styled from 'styled-components'
import belllogo from "../imges/belllogo.svg"
import arrow2logo from "../imges/arrow2logo.svg"
import Rectangle21 from "../imges/Rectangle21.png"

const NotificationBar = ( logout ) => {
    
    const Container = styled.div`
        width: 412px;
        height: 71px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 37px;
        div:first-of-type {
                color: #000000;
                padding: 16px;
                font-size: 16px;
                font-family: Khula;
                border: none;
                border-radius: 15px;
                &:hover div {
                        display: block;
                    }

                button {
                    width: 69px;
                    height: 69px;
                    border-radius: 50%;
                    border: none;
                    background: #FFFFFF;
                    &:hover {
                        background: #f1f1f1;
                        border: 1px solid rgba(133, 82, 225, 0.3);
                    } 
                    
            }
            div {
                display: none;
                position: absolute;
                background-color: #ffffff;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
                p {
                    display: block;
                }
            } 
        }
        div:last-of-type {
            color: #000000;
            padding: 16px;
            font-size: 16px;
            font-family: Khula;
            border: none;
            border-radius: 15px;
            justify-self: end;

            &:hover div {
                    display: block;
                }

            button {
                position: relative;
                display: inline-block;
                border: none;
                background: none;
                img {
                    margin: 8px;
                    align-items: center;
                }
                &:hover {
                    img:last-of-type {
                        background: url(EmCWpR0WMAAzfcY.jpg), #C5CFD1;
                        mix-blend-mode: multiply;
                        border: 1px solid rgba(133, 82, 225, 0.3);
                        box-sizing: border-box;
                        border-radius: 14px;
                    }
                    
                } 
                
            }
            div {
                display: none;
                position: absolute;
                background-color: #ffffff;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
                button {
                    border-radius: 15px;
                    width: 100%;
                    font-weight: bold;
                }
            } 
        }
    `

    return (
        <Container>
            <div>
                <button href="#"><img src={belllogo}/></button>
                <div>
                    <p>No Notifcations</p>
                </div>
            </div>
            <div>
                <button className="user-info-btn">
                    <img src={arrow2logo}/>
                    <img src={Rectangle21}/>
                </button>
                <div className="user-info">
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </Container>
    )
}

export default NotificationBar
