/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React, {PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';



class PersonSelector extends React.Component {

    static propTypes = {
        persons: PropTypes.array.isRequired,
        onPersonSelected : PropTypes.func.isRequired
    };

    state ={
        text:''
    }


    mapPersonToItem = (persons) => {
        return persons.map((person) => {
            return {
                text: `${person.lastName}, ${person.name}`,
                value: (
                    <MenuItem
                        primaryText={person.lastName}
                        secondaryText={person.name}
                    />
                )
            }
        });
    };

    handleNewRequest = (chosenRequest, index) => {
        this.props.onPersonSelected(this.props.persons[index]);
        this.setState({
            text:''
        });

    };


    render() {
        return <AutoComplete
            id="PersonSelector"
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.mapPersonToItem(this.props.persons)}
            maxSearchResults={7}
            onNewRequest={this.handleNewRequest}
            onUpdateInput={ (searchText) => { this.setState({text: searchText})} }
            searchText={this.state.text}
        />
    }


}


export default PersonSelector;