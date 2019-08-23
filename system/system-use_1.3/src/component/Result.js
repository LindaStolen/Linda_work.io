import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from './ChooseDate'
import Table from './Export'
import Platform from './Platform'
// import Axios from 'axios'

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
                <div className="export">
                    {/*<table>
                        <tbody>
                            <tr>
                                <th className="id">項次</th>
                                <th className="title_">標題</th>
                                <th className="function">功能</th>
                                <th className="action_type">執行動作</th>
                                <th className="create_by">使用者</th>
                                <th className="create_date">建立時間</th>
                            </tr>
                                {
                                    //content.map((item,i) => {
                                    //   return <Table/>
                                    // })
                                }
                        </tbody>
                            </table>*/}
                    <div className="platFuc">
                        <Platform />
                    </div>
                    <Table />
                </div>
            </React.Fragment>
        )
    }
}
