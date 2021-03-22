import React, { Component } from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../Component/Sidebar";
import MiddleBar from "../Component/MiddleBar";
import Statistics from "../Component/Statistics";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className={styles.container}>
                    <Sidebar />
                    <MiddleBar/>
                    <Statistics/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
