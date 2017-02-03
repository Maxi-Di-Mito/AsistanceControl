/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import PersonListator from '../subComponents/PersonListator';
import PersonInput from '../subComponents/PersonInput';
import SuperAgent from '../../agent/SuperAgent';

class PersonManager extends React.Component{

    state = {
        fetching: true,
        persons:[]
    };




    componentDidMount(){
        SuperAgent.Persons.getAll().then( (data) => {
            this.setState({
                persons: data.persons,
                fetching: false
            });
        })
    }


    deletePerson = (index) =>{
        SuperAgent.Persons.delete(this.state.persons[index]).then( (data) => {
            this.setState({
                persons: data.persons
            });
        });
    };


    createPerson = (person) => {
        SuperAgent.Persons.create(person).then( (data) => {
            this.setState({
                persons: data.persons
            });
        });
    };


    render(){


       if( this.state.fetching)
           return <LinearProgress mode="indeterminate"/>;
        else{
            return (
                <div>
                    <PersonInput onPersonDefined={this.createPerson} />
                    <PersonListator personsToShow={this.state.persons} onDeletePerson={this.deletePerson} />
                </div>
            )
       }
    }
}




export default PersonManager;