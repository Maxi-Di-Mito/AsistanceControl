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




export default class Header extends React.Component{

    static propTypes = {
        changeView: PropTypes.func.isRequired
    };


    setView = (ref) => {
        this.props.changeView(views[ref]);
    };

    render(){

        return(
            <Toolbar>
                <ToolbarGroup >
                    <ToolbarTitle text="Mi super aplicacion WEB"/>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <RaisedButton label="Tomar asistencia" primary={true} onClick={() => this.setView("AsistanceTaker")}/>
                    <RaisedButton label="Administrar personas" primary={true} onClick={() => this.setView("PersonManager")}/>
                </ToolbarGroup>
            </Toolbar>
        )
    }


};
