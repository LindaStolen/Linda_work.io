import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite'
import 'rsuite/styles/less/index.less'
import 'rsuite/styles/less/main.less'
// import {RangeDatePicker} from "@y0c/react-datepicker"
// import '../css/calendar.scss'
// import moment from 'moment'

let dateFns = new Date();

export default class DatePick extends Component {
    
    render() {
        const DateRangePickerCustomToolbar = props => (
            <div className="field">
              <DateRangePicker
                ranges={[{
                  label: '昨天',
                  value: [dateFns.addDays(new Date(), -1), dateFns.addDays(new Date(), -1)]
                }, {
                  label: '今天',
                  value: [new Date(), new Date()]
                }, {
                  label: '明天',
                  value: [dateFns.addDays(new Date(), 1), dateFns.addDays(new Date(), 1)]
                }, {
                  label: '最近 7 天',
                  value: [dateFns.subDays(new Date(), 6), new Date()]
                }]}
              />
            </div>
          );
        return (
            <React.Fragment>
                <DateRangePicker style={{DateRangePickerCustomToolbar}}
                />
            </React.Fragment>
        )
    }
}
