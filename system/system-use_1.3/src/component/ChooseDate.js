import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite';

export default class ChooseDate extends Component {
    render() {
        return (
            <React.Fragment>
                <DateRangePicker placement="autoVerticalRight"/>
            </React.Fragment>
        )
    }
}
