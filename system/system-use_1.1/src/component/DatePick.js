import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite'
// import {RangeDatePicker} from "@y0c/react-datepicker"
// import moment from 'moment'
import 'rsuite/styles/less/index.less'
// import '../css/custom-theme.less'


export default class DatePick extends Component {
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       start: new Date(),
  //       end: new Date(),
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  // handleChange(date) {
  //   this.setState({
  //     start: date,
  //     end: date
  //   })
  // }
    render() {
      
        return (
          <div>
            <DateRangePicker 
            />
          </div>
        )
    }
}
