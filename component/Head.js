import React, { Component } from 'react'
import Moment from 'moment'
import '../css/header.css'

let current = Moment().format('YYYY/MM/DD hh:mm:ss a')

export default class Head extends Component {
    render() {
        return (
            <div className="headWrap">
                <div className="titleName">系統使用觀測平台</div> 
                <span className="timer" style={{fontSize: 16, color: "#fff",}}>{current}</span>                
            </div>
        )
    }
}
