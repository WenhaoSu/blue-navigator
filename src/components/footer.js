import React, {Component} from 'react';
import MapWithAMarker from './map-with-marker';
import logo from '../static/logo-white-frame.svg';
import './footer.css';
import {WindowContext} from "../App";

class Footer extends Component {
    static isWideScreen(windowWidth) {
        return windowWidth > 768;
    }

    render() {
        return (
            <WindowContext.Consumer>
                {({windowWidth}) => (
                    <div className="footer" id="contact">
                        <table>
                            <tbody>
                            <tr>
                                {Footer.isWideScreen(windowWidth) &&
                                <td width="10%">
                                    <img src={logo} className="logo-footer" alt="logo"/>
                                </td>}
                                <td width={Footer.isWideScreen(windowWidth) ? '45%' : '80%'}>
                                    <div className="contact-info">
                                        Course:
                                        <br/>EECS 493<br/>
                                        <br/>Our Team Members:<br/>
                                        <a href="mailto:suwenhao@umich.edu">Wenhao Su</a>
                                        <a href="mailto:nancywn@umich.edu">Nan Wang</a>
                                        <a href="mailto:zhhan@umich.edu">Zhuang Han</a><br/>

                                    </div>
                                </td>
                                {Footer.isWideScreen(windowWidth) &&
                                <td width="45%">
                                    <MapWithAMarker
                                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD_qZh1iBFy78OO-3HurqRNWD97W2eTzvM&v=3.exp&libraries=geometry,drawing,places`}
                                        position={{lat: 42.297264, lng: -83.721180}}
                                        loadingElement={<div style={{height: '100%'}}/>}
                                        containerElement={<div style={{height: '300px'}}/>}
                                        mapElement={<div style={{height: '100%'}}/>}
                                    />
                                </td>}
                            </tr>
                            </tbody>
                        </table>
                    </div>)}
            </WindowContext.Consumer>
        );
    }
}

export default Footer;
