import React from 'react'
import styled from 'styled-components'
import cashlogo2 from "../imges/cashlogo2.svg"
import ppllogo from "../imges/ppllogo.svg"
import locatlogo from "../imges/locatlogo.svg"
import timelogo from "../imges/timelogo.svg"
import arrowlogo from "../imges/arrowlogo.svg"
import Rectangle16 from "../imges/Rectangle16.png"

const Event = () => {

// ------------------------------------------------------the styling(start)------------------------------------------------------
    const Container = styled.div`
        grid-area: main;
        display: flex;
        width: 100%;
        height: 76px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;
        border-radius: 14px;
        font-family: khula;
        align-items: center;
        margin: 8px;
    `
    const Parts = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto;
        img {
            margin: 5px;
        }
    `
    const Title = styled.div`
        display: block;
        margin: none;
        h3 {
            margin: 0px;
        }
    `
    const Button = styled.button`
        background: #FFFFFF;
        border: none;
        border-radius: 14px;
        margin-right: 10px;
        width: 53.63px;
        height: 55.73px;
        align-self: center;
        &:hover {
            box-shadow: 3px 20px 50px rgba(173, 173, 173, 0.09);
        }
        &:active {
            border: 1px solid #EAEAEA;
        }
    `
// ------------------------------------------------------the styling(end)------------------------------------------------------

    return (
        <Container>
            <img src={Rectangle16}/>
            <Title>                                        
                <h3>Ios 14 Realase</h3>
                <div>Special Event</div>
            </Title>
            <Parts>
                <img src={ppllogo}/>
                <div>300</div>
            </Parts>
            <Parts>
                <img src={cashlogo2}/>
                <div>500K</div>                                    
            </Parts>
            <Parts>
                <img src={locatlogo}/>
                <div>jedah</div>
            </Parts>
            <Parts>
                <img src={timelogo}/>
                <div>2 Days left</div>
            </Parts>                                    
            <Button><img src={arrowlogo}/></Button>
        </Container>
    )
}

export default Event
