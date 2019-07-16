import React, { Component } from 'react'
import {RangeDatePicker} from "@y0c/react-datepicker"
import '../css/calendar.scss'
import moment from 'moment'

export default class DatePick extends Component {
    constructor(props){
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
        let end = moment(now).add(1, "days").subtract(1, "seconds");
        this.state = {
            start : start,
            end : end
        }
        this.applyCallback = this.applyCallback.bind(this);
    }
    applyCallback(startDate ,endDate){
        // console.log('apply');
        console.log(startDate.format('YYYY年MM月DD日'))
        console.log(endDate.format('YYYY年MM月DD日'))
        this.setState({
            newStart: startDate,
            newEnd: endDate
        })
    }
    // onChange = (date) => {
    //     console.log(date);
    // }
    render() {
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
        let end = moment(now).add(1, "days").subtract(1, "seconds");
        let ranges = {
            'Today Only': [moment(start), moment(end)],
            'Yesterday Only': [moment(start).subtract(1, 'days'), moment(end).subtract(1, 'days')],
            '3 Days': [moment(start).subtract(3, 'days'), moment(end)],
            '5 Days': [moment(start).subtract(5, 'days'), moment(end)],
            '1 Week': [moment(start).subtract(7, 'days'), moment(end)],
            '2 Weeks': [moment(start).subtract(14, 'days'), moment(end)],
            '1 Month': [moment(start).subtract(1, 'months'), moment(end)],
            '90 Days': [moment(start).subtract(90, 'days'), moment(end)],
            '1 Year': [moment(start).subtract(1, 'years'), moment(end)],
          };
        let maxDate = moment(now).add(24, "hour");
        return (
            <React.Fragment>
                <RangeDatePicker startText={now} endText={end} dateFormat="YYYY/MM/DD"
                    ranges={ranges}
                    start={this.state.start}
                    end={this.state.end}
                    applyCallback={this.applyCallback}
                    maxDate={maxDate}
                />
            </React.Fragment>
        )
    }
}
