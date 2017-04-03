/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import PersonListator from '../subComponents/PersonListator';
import PersonInput from '../subComponents/PersonInput';
import SuperAgent from '../../agent/SuperAgent';


class PersonManager extends React.Component {

    state = {
        fetching: true,
        persons: []
    };
    
    componentDidMount() {
        SuperAgent.Persons.getAll()
            .then(({ persons }) => this.setState({ persons, fetching: false }));
    }
    
    render() {
        const { fetching, persons } = this.state;
        
        if (!fetching) {
            return (
                <div>
                    <PersonInput onPersonDefined={this.createPerson}/>
                    <PersonListator
                        personsToShow={persons}
                        onDeletePerson={this.deletePerson}
                    />
                </div>
            );
        }
	
	    return <LinearProgress mode="indeterminate"/>;
    }
	
	deletePerson = index => {
		SuperAgent.Persons.delete(this.state.persons[index])
            .then(({ persons }) => this.setState({ persons }));
	};
	
	createPerson = person => {
		SuperAgent.Persons.create(person)
            .then(({ persons }) => this.setState({ persons }));
	};
}

export default PersonManager;