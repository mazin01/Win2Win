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


const HomePage = ({ user, logout }) => {
    return (
        <div className="home-container">
            <Router>
                <SideBar />
                <Switch>
                    <Route path="/">
                        <div className="home">
                        <h1 className="wellcome">Wellcome, <span>{user.fullName.split(" ")[0]}</span></h1>
                        <div className="home-top">
                            <div className="home-top-part1">
                                <SubsCounter />
                                <UsedCoins />
                            </div>
                            <div className="subs-chart">
                                <div>
                                    <h2 className="section-title">Subscribers</h2>
                                    <div><img src={arrow3logo}/>+12%</div>
                                </div>
                                <VerticalBar />
                            </div>
                        </div>
                        <div className="activeEvents">
                            <h2 className="section-title">Active Events</h2>
                            <Event />
                            <Event />
                            <Event />
                            <Event />
                            <Event />
                        </div>
                        </div>
                        <div className="sideboard">
                            <NotificationBar logout={logout} />

                            <div className="eventsActivities">
                                <h2 className="section-title">Events Activities</h2>
                                <VerticalBar2 />
                            </div>
                            <div className="leaderboard">
                                <h2 className="section-title">Leaderboard</h2>
                                <LeaderboardItem />
                                <LeaderboardItem />
                                <LeaderboardItem />
                            </div>
                            </div>
                    </Route>
                    <Route path="/random"> <Random/> </Route>
                    <Route path="/special"> <Special/> </Route>
                    <Route path="/compitition"> <Compitition/> </Route>
                </Switch>
            </Router>
        </div>
    )
}

function Random() {
    return 
    <div>
        <h1>Random Events</h1>
        <Event />
        <Event />
        <Event />
    </div>
}

function Special() {
    return 
    <div>
        <h1>Special Events</h1>
        <Event />
        <Event />
        <Event />
    </div>
}

function Compitition() {
    return 
    <div>
        <h1>Compitition Events</h1>
        <Event />
        <Event />
        <Event />
    </div>
}

export default HomePage