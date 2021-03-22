import React, { Component } from 'react';
import SportsBasketballOutlinedIcon from '@material-ui/icons/SportsBasketballOutlined';
import CircularProgressWithLabel from '@material-ui/core/CircularProgress';
import { Button } from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import SurroundSoundRoundedIcon from '@material-ui/icons/SurroundSoundRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import styles from "./Middle.module.css"

class MiddleBar extends Component {
    render() {
        return (
            <div className={styles.middle}>
                <div className={styles.profile}>
                    <div style={{ marginLeft: "40px" }}>
                        <h1 style={{ marginBottom: "1px" }}>Hello Josh!</h1>
                     It's good to see you again
                </div>
                    <div>
                        <img src="" />
                    </div>
                </div>
                <br />

                <div className={styles.row}>
                    <div className={styles.profile1}>
                        <div style={{ marginRight: "55px" }}><SportsBasketballOutlinedIcon /></div>
                        <div style={{ marginRight: "55px" }}>
                            <div style={{ fontWeight: "bold" }}>Spanish B2</div>
                            <div>by Alexandro Valuseain</div>
                        </div>
                        <div style={{ marginRight: "55px" }}>
                            <CircularProgressWithLabel variant="static" value={80} />
                            <span style={{ position: "absolute", left: '473px', marginTop: "9px" }}>
                                83%
                        </span>
                        </div>
                        <div style={{ marginRight: "55px" }}>
                            <Button style={{ backgroundColor: "black", color: "white" }}>Continue</Button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}><SkipPreviousIcon fontSize="large" /></div>
                    <div style={{ marginTop: "20px" }}><SkipNextIcon fontSize="large" /></div>
                </div>
                <h2>Courses</h2>
                <div className={styles.row}>
                    <div style={{ fontWeight: "bold" }}>All Courses</div>
                    <div style={{ marginLeft: "30px" }}>The Newest</div>
                    <div style={{ marginLeft: "30px" }}>Top Rated</div>
                    <div style={{ marginLeft: "30px" }}>Most Popular</div>
                </div>

                <div className={styles.courses}>
                    <FilterVintageIcon style={{ marginRight: "15px" }} />
                    <div style={{ marginRight: "55px" }}>
                        <div style={{ fontWeight: "bold" }}>Learn Figma</div>
                        <div>by Christophar Morgan</div>
                    </div>
                    <div style={{ marginRight: "55px" }}>
                        <WatchLaterIcon />6h 30min
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <WhatshotIcon /> 4.7
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <button className={styles.viewCourse}>View Course</button>
                    </div>
                </div>

                <div className={styles.courses}>
                    <PieChartRoundedIcon style={{ marginRight: "15px" }} />
                    <div style={{ marginRight: "55px" }}>
                        <div style={{ fontWeight: "bold" }}>Analog Photography</div>
                        <div>by Gordan Norman</div>
                    </div>
                    <div style={{ marginRight: "55px" }}>
                        <WatchLaterIcon />6h 30min
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <WhatshotIcon /> 4.7
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <button className={styles.viewCourse}>View Course</button>
                    </div>
                </div>

                <div className={styles.courses}>
                    <SurroundSoundRoundedIcon style={{ marginRight: "15px" }} />
                    <div style={{ marginRight: "55px" }}>
                        <div style={{ fontWeight: "bold" }}>Master Instagram</div>
                        <div>by Shopie Gill</div>
                    </div>
                    <div style={{ marginRight: "55px" }}>
                        <WatchLaterIcon />7h 40min
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <WhatshotIcon /> 4.7
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <button className={styles.viewCourse}>View Course</button>
                    </div>
                </div>

                <div className={styles.courses}>
                    <CreateRoundedIcon style={{ marginRight: "15px" }} />
                    <div style={{ marginRight: "55px" }}>
                        <div style={{ fontWeight: "bold" }}>Basics of drawing</div>
                        <div>by Jean tate</div>
                    </div>
                    <div style={{ marginRight: "55px" }}>
                        <WatchLaterIcon />11h 30min
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <WhatshotIcon /> 4.8
                </div>
                    <div style={{ marginRight: "55px" }}>
                        <button className={styles.viewCourse}>View Course</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiddleBar;