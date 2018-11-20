import React, {Component} from 'react';
import './intro-page.css';
import '../common.css';
import PropTypes from 'prop-types';
import buildingInfo from '../static/building-intro-info';
import IntroBox from "../components/intro-box";

class IntroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({
            url: buildingInfo[this.props.building] ? buildingInfo[this.props.building].img : "",
            intro: buildingInfo[this.props.building] ? buildingInfo[this.props.building].intro : "",
            name: buildingInfo[this.props.building] ? buildingInfo[this.props.building].name : ""
        });
    }

    render() {
        return (
            <div className="intro-page">
                <div className="page-title">
                    Building Information
                </div>
                <IntroBox url={this.state.url} intro={this.state.intro} name={this.state.name}/>
            </div>
        );
    }
}

IntroPage.propTypes = {
    building: PropTypes.string,
};

export default IntroPage;
