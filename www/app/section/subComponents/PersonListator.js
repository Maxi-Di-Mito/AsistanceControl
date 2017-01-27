/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React, {PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


class PersonListator extends React.Component {

    static propTypes = {
        personsToShow: PropTypes.array.isRequired,
        onDeletePerson : PropTypes.func.isRequired
    };


    render() {


        const IndexButton = (index) => {
            return (
                <IconButton
                    tooltip="Eliminar"
                    tooltipPosition="top-center"
                    onTouchTap={() => this.props.onDeletePerson(index)}
                >
                    <DeleteIcon/>
                </IconButton>
            );
        };

        return (
            <List>
                {
                    this.props.personsToShow.map( (person, index) => {
                        return (
                            <ListItem key={index} primaryText={`${person.lastName} - ${person.name}`} rightIconButton={IndexButton(index)}/>
                        )
                    })
                }
            </List>
        )


    }


}


export default PersonListator;