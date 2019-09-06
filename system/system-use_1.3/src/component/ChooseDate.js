import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite';
import moment from 'moment'

const momentFormat = moment().format('YYYY-MM-DD')

export default class ChooseDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [moment().subtract(7,'days'), moment()],
            startdate: "",
            enddate:  "",
        };
        this.handleDateChange = this.handleDateChange.bind(this)
    } 

    handleDateChange(value){
      this.setState({
        value,
      })
      console.log(typeof value, value)
    }

    render() {
      console.log(this.state.value)
        return (
            <React.Fragment>
              <DateRangePicker
                placement = "autoVerticalRight"
                value={this.state.value}
                format={"YYYY-MM-DD"}
                onChange={this.handleDateChange}
                ranges={[{
                  label: '昨天',
                  value: [moment().add(-1,'days'), moment().add(-1,'days')]
                }, {
                  label: '今天',
                  value: [moment(), moment()]
                }, {
                  label: '最近 7 天',
                  value: [moment().subtract(7,'days'), moment()]
                }, {
                  label: '最近 30 天',
                  value: [moment().add(-30,'days'), moment()]
                }]}
                
              />
            </React.Fragment>
        )
    }
}