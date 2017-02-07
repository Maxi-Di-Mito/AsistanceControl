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

    state = {
        text:''
    };
    
    render() {
        const dataSource = this.mapPersonToItem();
        
        return (
            <AutoComplete
                id="PersonSelector"
                filter={AutoComplete.fuzzyFilter}
                maxSearchResults={7}
                dataSource={dataSource}
                onNewRequest={this.handleNewRequest}
                onUpdateInput={this.onUpdateInput}
                searchText={this.state.text}
            />
        )
    }
    
    onUpdateInput = searchText => this.setState({text: searchText});
	
	mapPersonToItem = () => {
		return this.props.persons.map(({ name, lastName }) => {
			return {
				text: `${lastName}, ${name}`,
				value: (
                    <MenuItem
                        primaryText={lastName}
                        secondaryText={name}
                    />
				)
			}
		});
	};
	
	handleNewRequest = (chosenRequest, index) => {
		this.props.onPersonSelected(this.props.persons[index]);
		this.setState({ text:'' });
	};
}


export default PersonSelector;