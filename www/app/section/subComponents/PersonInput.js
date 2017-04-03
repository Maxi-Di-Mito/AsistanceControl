/**
 * Created by maximiliano.dimito on 2/3/2017.
 */
import React, {PropTypes} from 'react';
import {TextField, RaisedButton} from 'material-ui';


class PersonInput extends React.Component {

    static propTypes = {
        onPersonDefined: PropTypes.func.isRequired
    };

    state = {
        name: "",
        lastName: ""
    };
    
    render() {
        const { name, lastName } = this.state;
        
        return (
            <div>
                <TextField
                    floatingLabelText="Nombre"
                    onChange={this.onNameChange}
                    value={name}
                />
                <TextField
                    floatingLabelText="Apellido"
                    onChange={this.onLastNameChange}
                    value={lastName}
                />
                <RaisedButton
                    label="Crear"
                    onClick={this.createPerson}
                />
            </div>
        )
    }
    
	createPerson = () => {
		this.props.onPersonDefined(this.state);
		this.setState({ name: "", lastName: "" });
	};
    
    onNameChange = e => this.setState({ name: e.target.value });
    
	onLastNameChange = e => this.setState({ lastName: e.target.value });
}


export default PersonInput;