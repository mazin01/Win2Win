import React from 'react'
import styled from 'styled-components'
import Rectangle17 from "../imges/Rectangle17.png"

const LeaderboardItem = () => {
    
// ------------------------------------------------------the styling(start)------------------------------------------------------
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        height: 83px;
        width: auto;
        margin-top: 45px;
        margin-left: 28px;
        margin-right: 34px;
    `
    const Title = styled.h2`
        font-family: Khula;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
    `
    const Details = styled.div`
        display: flex;
        flex-direction: row;
        & > p {
            color: rgba(0, 0, 0, 0.6);
            font-family: Open Sans;
            text-align: right;
            display: flex;
            align-items: center;
        }
    `
    const DetailsText = styled.div`
        font-family: khula;
        text-align: start;
        margin-left: 12.47px;
        h2 {
            font-weight: 500;
            line-height: 0px;
        }
        p {
            color: rgba(0, 0, 0, 0.6);
            line-height: 5px;
        }
    `
// ------------------------------------------------------the styling(end)------------------------------------------------------

    return (
        <Container>
            <Title>Ios 14 Realase</Title>
            <Details>
                <img src={Rectangle17}/>
                <DetailsText>
                    <h2>John Doe</h2>
                    <p>800 Coin</p>
                </DetailsText>
                <p>Top Ranked</p>
            </Details>
        </Container>
    )
}

export default LeaderboardItem
