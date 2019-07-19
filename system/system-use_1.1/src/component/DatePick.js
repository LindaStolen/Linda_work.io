import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite'
import 'rsuite/styles/less/rsuite.less'
import 'rsuite/styles/date-picker.less'
// import 'rsuite/dist/styles/rsuite.min.css'

// import {RangeDatePicker} from "@y0c/react-datepicker"
import moment from 'moment'



export default class DatePick extends Component {
    // constructor(props){
    //   super(props);
    //   let now = new Date();
    //   let start = moment(new Date(now.getFullYear(), now.getMonth(),now.getDate()));
    //   let end = moment(start).add(1, "days").subtract(1, "seconds");
    //   this.state = {
    //     start: start,
    //     end: end
    //   }
      constructor(props) {
        super(props);
        this.state = {
          value: [moment(),moment()]
        };
  }
    render() {
      //let now = new Date();
      
        return (
          <div>
            <DateRangePicker
              value={this.state.value}
              onChange={ value => { this.setState({ value });
                console.log(value);
              }}
            />
          </div>
        )
    }
}
