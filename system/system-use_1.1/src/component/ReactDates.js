import React, { Component } from 'react'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default class ReactDates extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
          };
        // this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="startDate" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="endDate" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
            </div>
        )
    }
}
