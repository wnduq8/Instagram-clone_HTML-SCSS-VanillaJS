import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../Components/Nav';
import Feeds from './Components/Feeds/Feeds';
import '../../../Styles/common.scss';

class Main extends Component {
    render() {
        return (
        <div>
            <Nav />
            <Feeds />
        </div>
        );
    }
}






export default withRouter(Main);