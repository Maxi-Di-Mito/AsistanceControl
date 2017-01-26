/**
 * Created by maximiliano.dimito on 1/26/2017.
 */
import React,{PropTypes} from 'react';
import DatePicker from 'material-ui/DatePicker';


class DateSelector extends React.Component {

    static propTypes = {
        onDateSelected: PropTypes.func.isRequired,
        selectedDate : PropTypes.object.isRequired
    };


    render() {
        return <DatePicker
            hintText="Fecha"
            value={this.props.selectedDate}
            onChange={(event, date) => this.props.onDateSelected(date)}
        />
    }


}




export default DateSelector;