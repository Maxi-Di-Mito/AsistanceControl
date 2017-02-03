/**
 * Created by maximiliano.dimito on 2/3/2017.
 */
import React, {PropTypes} from 'react';
import {TextField, RaisedButton} from 'material-ui';


class PersonInput extends React.Component{

    static propTypes = {
        onPersonDefined: PropTypes.func.isRequired
    };

    state = {
        name: "",
        lastName: ""
    };

    createPerson = () => {
        this.props.onPersonDefined(this.state);
        this.setState({
            name: "",
            lastName: ""
        })
    };


    render(){
        return (
            <div>
                <TextField
                    floatingLabelText="Nombre"
                    onChange={ (event) => { this.setState({ name:event.target.value }) }}
                    value={this.state.name}
                />
                <TextField
                    floatingLabelText="Apellido"
                    onChange={(event) => { this.setState({ lastName:event.target.value }) }}
                    value={this.state.lastName}
                />
                <RaisedButton label="Crear" onClick={this.createPerson} />
            </div>
        )
    }
}


export default PersonInput;