import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import juyeopparkLogin from './Pages/juyeoppark/Login/Login';
import juyeipparkMain from './Pages/juyeoppark/Main/Main';
import geonwookimLogin from './Pages/geonwookim/Login/Login';
import geonwookimMain from './Pages/geonwookim/Main/Main';
import sanghunleeLogin from './Pages/sanghunlee/Login/Login';
import sanghunleeMain from './Pages/sanghunlee/Main/Main';
import sangkuohLogin from './Pages/sangkuoh/Login/Login';
import sangkuohMain from './Pages/sangkuoh/Main/Main';

class Routes extends React.Component {
    render() {
        return (
        <Router>
            <Switch>
            <Route exact path="/juyeopparkLogin" component={juyeopparkLogin} />
            <Route exact path="/juyeipparkMain" component={juyeipparkMain} />
            <Route exact path="/geonwookimLogin" component={geonwookimLogin} />
            <Route exact path="/geonwookimMain" component={geonwookimMain} />
            <Route exact path="/sanghunleeLogin" component={sanghunleeLogin} />
            <Route exact path="/sanghunleeMain" component={sanghunleeMain} />
            <Route exact path="/sangkuohLogin" component={sangkuohLogin} />
            <Route exact path="/sangkuohMain" component={sangkuohMain} />
            </Switch>
        </Router>
        )
    }
}

export default Routes;