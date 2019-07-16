import React, { Component } from 'react'
import DatePick from './DatePick'
// import Calendar from './Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/subnav.css'

export default class Resault extends Component {
    // consrtuctor(props){
    //     super(props);
        
    // }
    render() {
        return (
            <React.Fragment>
                <div className="condition">
                    <div className="navCondition">
                        <span className="spin">BC
                        <FontAwesomeIcon icon={['fas','times']} style={{marginLeft: "8px",}}/>
                        </span>
                    </div>
                    <DatePick />
                    {/*<Calendar />*/}
                </div>
            </React.Fragment>
        )
    }
}
