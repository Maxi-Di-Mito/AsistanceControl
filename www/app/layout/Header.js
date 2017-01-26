/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
export default class Header extends React.Component{




    render(){

        return(
            <Toolbar>
                <ToolbarGroup >
                    <ToolbarTitle text="Mi super aplicacion WEB"/>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <RaisedButton label="BOTON" primary={true}/>
                    <RaisedButton label="BOTON 2" secondary={true}/>
                </ToolbarGroup>
            </Toolbar>
        )
    }


};
