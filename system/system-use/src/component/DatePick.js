import React, { Component } from 'react'
// import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import { LinkedCalendar } from 'rb-datepicker'
import {FormControl} from 'react-bootstrap/Form'
import moment from 'moment'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// let showTime = {
//     border: "none",
//     borderBottom: "1.3px solid #371",
// }

export default class DatePick extends Component {
    onDatesChange = ({ startDate, endDate }) => {
        console.log(({ startDate, endDate }));
    }
    render() {
        // let now = new Date();
        //     let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
        //     let end = moment(start).add(1, "days").subtract(1, "seconds");
        //     let ranges = {
        //         "Today Only": [moment(start), moment(end)],
        //         "Yesterday Only": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
        //         "3 Days": [moment(start).subtract(3, "days"), moment(end)]
        //     }
        //     let local = {
        //         "format":"DD-MM-YYYY HH:mm",
        //         "sundayFirst" : false
        //     }
        //     let maxDate = moment(start).add(24, "hour")
        return (
            <React.Fragment>
            <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
            </React.Fragment>
        )
    }
}
