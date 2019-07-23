import React, { Component } from 'react'
import { DateRangePicker } from 'rsuite'
// import  DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import {RangeDatePicker} from "@y0c/react-datepicker"
import moment from 'moment'



export default class DatePick extends Component {
    constructor(props){
      super(props);
      this.state = {
        start: new Date(),
        end: new Date(),
      };
      this.handleChange = this.handleChange.bind(this);
    }
  handleChange(date) {
    this.setState({
      start: date,
      end: date
    })
  }
    render() {
      
        return (
          <div>
            <DateRangePicker
            />
          </div>
        )
    }
}
