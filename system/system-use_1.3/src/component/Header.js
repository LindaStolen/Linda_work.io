import React, { Component } from 'react'
import Moment from 'moment'

import '../style/header.css'

let Current = Moment().format('YYYY/MM/DD hh:mm:ss a')
export default class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="title">System</div>
                <div className="time">{Current}</div>
            </div>
        )
    }
}
