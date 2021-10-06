import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from './homePage/sideBar'
import Event from './homePage/event';
import SubsCounter from './homePage/subsCounter';
import UsedCoins from './homePage/usedCoins';
import NotificationBar from './homePage/notificationBar';
import LeaderboardItem from './homePage/leaderboardItem';
import arrow3logo from "./imges/arrow3logo.svg"
import VerticalBar from './homePage/subChart';
import VerticalBar2 from './homePage/activitiesChart';
import styled from 'styled-components';


const HomePage = ({ user, logout }) => {

// ------------------------------------------------------the styling(start)------------------------------------------------------
    const Container = styled.div`
        display: grid;
        grid-template-columns: 20% 60% 30%;
        grid-template-rows: auto;
    `
    const Home = styled.div`
        margin: 10px 48px;
    `
    const Wellcome = styled.div`
        width: 517px;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 45px;
        line-height: 50px;
        margin-bottom: 20px;
        color: #000000;
    `
    const HomeTop = styled.div`
        display: flex;
        flex-direction: row;
    `
    const HomeTopLeft = styled.div`
        display: flex;
        flex-direction: column;
    `
    const SubsChart = styled.div`
        width: fit-content;
        height: 294px;
        background: #FFFFFF;
        box-shadow: 3px 20px 50px rgba(173, 173, 173, 0.09);
        border-radius: 16px;
        flex-direction: column;
    `
    const Titles = styled.h2`
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 34px;
        color: #000000;
    `
    const SideBoard = styled.div`
        background: #FCFCFC;
        border: 1px solid rgba(171, 171, 171, 0.1);
        box-sizing: border-box;
        border-radius: 8px 0px 0px 8px;
    `
    const Leaderboard = styled.div`
        width: auto;
        background: #FFFFFF;
        box-shadow: 0px 15px 90px rgba(173, 173, 173, 0.09);
        border-radius: 16px;
        font-family: khula;
        display: block;
    `
// ------------------------------------------------------the styling(end)------------------------------------------------------
    
    return (
        <Container>
            <Router>
                <SideBar />
                <Switch>
                    <Route path="/">
                        <Home>
                        <Wellcome>Wellcome, <span>{user.fullName.split(" ")[0]}</span></Wellcome>
                        <HomeTop>
                            <HomeTopLeft>
                                <SubsCounter />
                                <UsedCoins />
                            </HomeTopLeft>
                            <SubsChart>
                                <div>
                                    <Titles>Subscribers</Titles>
                                    <div><img src={arrow3logo}/>+12%</div>
                                </div>
                                <VerticalBar />
                            </SubsChart>
                        </HomeTop>
                        <div>
                            <Titles>Active Events</Titles>
                            <Event />
                            <Event />
                            <Event />
                            <Event />
                            <Event />
                        </div>
                        </Home>
                        <SideBoard>
                            <NotificationBar logout={logout} />
                            <div>
                                <Titles>Events Activities</Titles>
                                <VerticalBar2 />
                            </div>
                            <Leaderboard>
                                <h2 className="section-title">Leaderboard</h2>
                                <LeaderboardItem />
                                <LeaderboardItem />
                                <LeaderboardItem />
                            </Leaderboard>
                        </SideBoard>
                    </Route>
                    <Route path="/random"> <Random/> </Route>
                    <Route path="/special"> <Special/> </Route>
                    <Route path="/compitition"> <Compitition/> </Route>
                </Switch>
            </Router>
        </Container>
    )
}

function Random() {
    return <div>
        <Titles>Random Events</Titles>
        <Event />
        <Event />
        <Event />
    </div>
}

function Special() {
    return <div>
        <Titles>Special Events</Titles>
        <Event />
        <Event />
        <Event />
    </div>
}

function Compitition() {
    return <div>
        <Titles>Compitition Events</Titles>
        <Event />
        <Event />
        <Event />
    </div>
}

export default HomePage