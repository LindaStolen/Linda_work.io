import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite';
import moment from 'moment'

export default class ChooseDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [moment().subtract(7,'days'), moment()]
        };
    }
    render() {
        return (
            <React.Fragment>
              <DateRangePicker
                placement = "autoVerticalRight"
                value={this.state.value}
                onChange={value => {
                  this.setState({ value });
                  console.log(value);
                }}
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
