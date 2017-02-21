import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {blue700,blue400} from 'material-ui/styles/colors';
import {dark400, dark700,teal400,teal700} from 'material-ui/styles/colors';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import QuesHome from './quesHome';


injectTapEventPlugin();

const muiTheme=getMuiTheme({
    palette:{
        textColor: teal700,
        primary1Color:  dark700,
        primary2Color: teal700
    }
    
});
ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
         <Router history={hashHistory}>
           <Route path="/" component={QuesHome}/>
           
       </Router>
     </MuiThemeProvider>,
 document.getElementById('root')
);