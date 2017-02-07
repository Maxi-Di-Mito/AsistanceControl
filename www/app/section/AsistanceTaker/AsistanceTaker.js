/**
 * Created by maximiliano.dimito on 1/12/2017.
 */
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import SuperAgent from '../../agent/SuperAgent';
import {Flex, Box} from 'reflexbox';
import DateSelector from '../subComponents/DateSelector';
import PersonSelector from '../subComponents/PersonSelector';
import PersonListator from '../subComponents/PersonListator';


class AsistanceTaker extends React.Component {
  
    state = {
        fetching: true,
        selectedDate: new Date(),
	    asistances: [],
        persons: []
    };
    
    componentDidMount() {
        SuperAgent.Persons.getAll().then(({ persons }) => {
            const requestDate = this.splitDateString(this.state.selectedDate);
            
            SuperAgent.Asistances.getByDate(requestDate)
                .then(({ asistances }) => this.setState({ persons, asistances, fetching: false }));
        });
    }

    render() {
        const { fetching, asistances, persons, selectedDate } = this.state;
        
        if (!fetching) {
            const personsToShow = asistances.map(({ person }) => person);

            return (
                <Flex p={2} align='center'>
                    <Box px={6} col={6}>
                        <DateSelector
                            selectedDate={selectedDate}
                            onDateSelected={this.getAsistancesForDate}
                        />
                        <PersonSelector
                            persons={persons}
                            onPersonSelected={this.generateAsistance}
                        />
                    </Box>
                    <Box px={6} col={6}>
                        <PersonListator
                            onDeletePerson={this.deleteAsistance}
                            personsToShow={personsToShow}
                        />
                    </Box>
                </Flex>
            );
        }
       
        return <LinearProgress mode="indeterminate"/>
    }
    
	splitDateString = date => date.toISOString().split('T')[0];
	
	getAsistancesForDate = date => {
		SuperAgent.Asistances.getByDate(this.splitDateString(date))
            .then(({ asistances }) => this.setState({ asistances, selectedDate: date }));
	};
	
	generateAsistance = person => {
		SuperAgent.Asistances.create(person, this.splitDateString(this.state.selectedDate))
            .then(({ asistances }) => this.setState({ asistances}));
	};
    
	deleteAsistance = index => {
		SuperAgent.Asistances.delete(this.state.asistances[index])
            .then(({ asistances }) => this.setState({ asistances}));
	};
}

export default AsistanceTaker;

