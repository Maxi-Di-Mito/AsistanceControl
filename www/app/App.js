/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue200, cyan700, amber400} from 'material-ui/styles/colors'

import Header from './layout/Header';
import AsistanceTaker from './section/AsistanceTaker/AsistanceTaker';

injectTapEventPlugin();


const theme = {
    palette:{
        primary1Color: blue200,
        accent1Color: cyan700
    },
    toolbar:{
        backgroundColor: amber400
    }
};


export default class App extends Component{


    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <div>
                    <Header/>
                    <AsistanceTaker/>
                </div>
            </MuiThemeProvider>
        );
    }

}