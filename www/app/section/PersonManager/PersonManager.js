/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React from 'react';
import PersonListator from '../subComponents/PersonListator';


class PersonManager extends React.Component{




    render(){

        return (
            <div>
                <PersonInputManager onSubmit={this.generatePerson}/>
                <PersonFilter onFilter={this.filterPersons}/>
                <PersonListator personsToShow={this.state.persons}/>
            </div>
        )
    }
}




export default PersonManager;