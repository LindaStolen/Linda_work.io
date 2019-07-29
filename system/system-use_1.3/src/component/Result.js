import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from './ChooseDate'

import '../style/result.css'

export default class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="conditionWrap">
                    <div className="condition">
                        <span className="spin">BC
                            <FontAwesomeIcon icon={['fas','times']} style={{marginLeft: '8px',}}></FontAwesomeIcon>
                        </span>
                    </div>
                    <DatePicker/>
                </div>
            </React.Fragment>
        )
    }
}
