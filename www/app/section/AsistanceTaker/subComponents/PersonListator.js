/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';




class PersonListator extends React.Component {




    render() {

        return (
            <List>
                {
                    this.props.personsToShow.map( (asistance, index) => {
                        return (
                            <ListItem key={index} primaryText={`${asistance.person.lastName} - ${asistance.person.name}`}/>
                        )
                    })
                }
            </List>
        )


    }


}


export default PersonListator;