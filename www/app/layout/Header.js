/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import React, {PropTypes} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import AsistanceTaker from '../section/AsistanceTaker/AsistanceTaker';
import PersonManager from '../section/PersonManager/PersonManager';

const views = {
    "AsistanceTaker": <AsistanceTaker/>,
    "PersonManager": <PersonManager/>
};

export default class Header extends React.Component {
    static propTypes = {
        changeView: PropTypes.func.isRequired
    };

    setView = (ref) => this.props.changeView(views[ref]);

    showAsistanceTaker = e => this.setView("AsistanceTaker");
    
    showPersonManager = e => this.setView("PersonManager");
    
    render(){
        return (
            <Toolbar>
                <ToolbarGroup >
                    <ToolbarTitle text="Mi super aplicacion WEB"/>
                </ToolbarGroup>
                <ToolbarGroup lastChild>
                    <RaisedButton
                        label="Tomar asistencia"
                        onClick={this.showAsistanceTaker}
                        primary
                    />
                    <RaisedButton
                        label="Administrar personas"
                        onClick={this.showPersonManager}
                        primary
                    />
                </ToolbarGroup>
            </Toolbar>
        )
    }
};
