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

class AsistanceTaker extends React.Component{


    state = {
        fetching: true
    };


    componentDidMount(){
        SuperAgent.Persons.getAll().then( (resP) => {
            const date = new Date();
            const requestDate = date.toISOString().split('T')[0];
            SuperAgent.Asistances.getByDate(requestDate).then( (resA) => {
                this.setState(
                    {
                        persons: resP.persons,
                        asistances: resA.asistances,
                        selectedDate: date,
                        fetching: false
                    }
                );
            });
        });
    }


    getAsistancesForDate = (date) => {
        SuperAgent.Asistances.getByDate(date.toISOString().split('T')[0]).then( (res) => {
           this.setState(
               {
                   asistances: res.asistances,
                   selectedDate: date
               }
           );
        });
    };

    generateAsistance = (person) => {
        SuperAgent.Asistances.create(person, this.state.selectedDate.toISOString().split('T')[0]).then( (res) => {
            this.setState(
                {
                    asistances: res.asistances
                }
            );
        });
    };


    deleteAsistance = (index) => {
        const asistance = this.state.asistances[index];
        SuperAgent.Asistances.delete(asistance).then( (resD) => {
            this.setState(
                {
                    asistances: resD.asistances
                }
            );
        });
    };





    render(){


        if(!this.state.fetching) {

            const persons = this.state.asistances.map( (a) => {
                return a.person;
            });

            return (
                <Flex p={2} align='center'>
                    <Box px={6} col={6}>
                        <DateSelector selectedDate={this.state.selectedDate} onDateSelected={this.getAsistancesForDate} />
                        <PersonSelector persons={this.state.persons} onPersonSelected={this.generateAsistance}/>
                    </Box>
                    <Box px={6} col={6}>
                        <PersonListator onDeletePerson={this.deleteAsistance} personsToShow={persons}/>
                    </Box>
                </Flex>
            );
        }
        else {
            return <LinearProgress mode="indeterminate"/>
        }
    }

}





export default AsistanceTaker;

