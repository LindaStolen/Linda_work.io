import React, { Component } from 'react'
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import { FormControl }  from 'react-bootstrap'
import moment from 'moment'
import '../css/calendar.css'

export default class calendar extends Component {
    constructor(props){
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
        let end = moment(now).add(1, "days").subtract(1, "seconds");
        this.state = {
            start : start,
            end : end
        }
        this.onClick = this.onClick.bind(this);
        this.applyCallback = this.applyCallback.bind(this);
    }
    applyCallback(startDate ,endDate){
        console.log('apply');
        console.log(startDate.format('YYYY年MM月DD日'))
        console.log(endDate.format('YYYY年MM月DD日'))
        this.setState({
            newStart: startDate,
            newEnd: endDate
        })
    }
    onClick(){
        let newStart = moment(this.state.start).subtract(3, 'days');
        this.setState({start: newStart});
    }
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
            let local = {
                "format":"YYYY年MM月DD日",
                "sundayFirst" : false
            }
            let maxDate = moment(now).add(24, "hour");
        return (
            <div>
                <DateTimeRangeContainer 
                    ranges={ranges}
                    start={this.state.start}
                    end={this.state.end}
                    local={local}
                    applyCallback={this.applyCallback}
                    onClick={this.onClick}
                >    
                    <FormControl
                        id="formControlsTextB"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        maxDate={maxDate}
                    /> 
                </DateTimeRangeContainer>
            </div>
        )
    }
}
