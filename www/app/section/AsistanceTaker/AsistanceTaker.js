/**
 * Created by maximiliano.dimito on 1/12/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import SuperAgent from '../../agent/SuperAgent';
import {Flex, Box} from 'reflexbox';
import DateSelector from '../subComponents/DateSelector';
import PersonSelector from '../subComponents/PersonSelector';
import PersonListator from '../subComponents/PersonListator';
import AsistanceTakerActions from '../../../redux/actions/AsistanceTakerActions';

class AsistanceTaker extends React.Component {



    componentDidMount() {
        this.props.getAll(new Date());


    }

    render() {
        const {fetching, asistances, persons, selectedDate} = this.props;

        if (!fetching) {
            const personsToShow = asistances.map(({person}) => person);

            return (
                <Flex p={2} align='center'>
                    <Box px={6} col={6}>
                        <DateSelector
                            selectedDate={selectedDate}
                            onDateSelected={(date) => this.props.getAll(date)}
                        />
                        <PersonSelector
                            persons={persons}
                            onPersonSelected={(person) => this.props.add(selectedDate, person)}
                        />
                    </Box>
                    <Box px={6} col={6}>
                        <PersonListator
                            onDeletePerson={(index) => this.props.delete(this.props.asistances[index])}
                            personsToShow={personsToShow}
                        />
                    </Box>
                </Flex>
            );
        }

        return <LinearProgress mode="indeterminate"/>
    }

}


const mapStateToProps = state => {
    return {
        asistances: state.asistanceTakerReducer.asistances,
        persons: state.asistanceTakerReducer.persons,
        fetching: state.asistanceTakerReducer.fetching,
        selectedDate: state.asistanceTakerReducer.selectedDate
    };
};

export default connect(
    mapStateToProps,
    {
        add: AsistanceTakerActions.addAsistance,
        getAll: AsistanceTakerActions.getAsistances,
        delete : AsistanceTakerActions.deleteAsistance
    }
)(AsistanceTaker);

