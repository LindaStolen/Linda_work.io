import React, { Component } from 'react'
import '../css/header.css'
import moment from 'moment'

    let dateStyle = {
            color: "white",
            float: "right",
            marginRight: 15,
            fontWeight: 500,
        }
    
    let currentday = //theDay.getFullYear()+'/'+(theDay.getMonth()+1)+'/'+theDay.getDate()+'下午'+theDay.getHours()+':'+theDay.getMinutes();
    moment().format('YYYY/MM/DD hh:mm:ss A');
    


export default class Header extends Component {
    render() {
        return(
            <div>
                <section className="header">
                    <div className="title">
                        <span>系統使用觀測平台</span>
                    </div>
                    <div className="DateTimer" style={dateStyle}>{currentday}</div>
                </section>
            </div>
        )
        
    }
}