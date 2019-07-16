import React, { Component } from 'react'
import {RangeDatePicker} from "@y0c/react-datepicker"
import "../css/calendar.scss"

export default class DatePick extends Component {
    onChange = (date) => {
        console.log(date);
    }
    render() {
        return (
            <React.Fragment>
            <RangeDatePicker startText="Start" endText="End" dateFormat="YYYY/MM/DD"/>
            </React.Fragment>
        )
    }
}
