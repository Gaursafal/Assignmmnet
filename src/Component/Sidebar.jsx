import React, { Component } from 'react';
import styles from "./Sidebar.module.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className={styles.sidebar}>
                        <h1 className={styles.sidebarIcon} style={{ marginBottom: "60px" }}>
                            F
                        </h1>
                        <br />
                        <div className={styles.sidebarIcon}>
                            <HomeOutlinedIcon></HomeOutlinedIcon>
                        </div>
                        <br />
                        <div className={styles.sidebarIcon}>
                            <SchoolOutlinedIcon />
                        </div>
                        <br />
                        <div className={styles.sidebarIcon}>
                            <PersonOutlineOutlinedIcon />
                        </div>
                        <br />
                        <div className={styles.sidebarIcon}>
                            <MailOutlineOutlinedIcon />
                        </div>
                        <br />
                        <div
                            className={styles.sidebarIcon}
                            style={{ marginBottom: "170px" }}
                        >
                            <SettingsOutlinedIcon />
                        </div>
                        <br />
                        <div className={styles.sidebarIcon}>
                            <ExitToAppOutlinedIcon />
                        </div>
                        <br />
                    </div>
            </div>
        );
    }
}

export default Sidebar;