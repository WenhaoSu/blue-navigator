import React, {Component} from 'react';
import './room-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import buildingInfo from '../static/building-intro-info';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const styles = {
    tabs: {
        background: "#fff"
    },
    slide: {
        padding: 15,
        minHeight: "60vh",
        color: "#fff"
    },
    slide1: {
    },
    slide2: {

    }
};

class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({
            index: value
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index
        });
    };


    componentDidMount() {
        this.setState({
            url: buildingInfo[this.props.building] ? buildingInfo[this.props.building].img : "",
            intro: buildingInfo[this.props.building] ? buildingInfo[this.props.building].intro : "",
            name: buildingInfo[this.props.building] ? buildingInfo[this.props.building].name : ""
        });
    }

    render() {
        const { index } = this.state;
        return (
            <div className="room-page">
                <div className="page-title">
                    Navigation Inside Building
                </div>
                <div className="room-box">
                    <Tabs
                        value={index}
                        fullWidth
                        onChange={this.handleChange}
                        style={styles.tabs}
                    >
                        <Tab label="Floor 1" />
                        <Tab label="Floor 2" />
                    </Tabs>
                    <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div style={Object.assign({}, styles.slide, styles.slide1)}>
                            <img className="room-image" src="https://s3.amazonaws.com/eecs493/blue-navigator/floor_plans/floor_1.png" />
                        </div>
                        <div style={Object.assign({}, styles.slide, styles.slide2)}>
                            <img className="room-image" src="https://s3.amazonaws.com/eecs493/blue-navigator/floor_plans/floor_2.png" />
                        </div>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}

RoomPage.propTypes = {
    building: PropTypes.string,
};

export default RoomPage;
