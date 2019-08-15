import React, { Component } from 'react'
import Sider from './Side'
import Result from './Result'
import '../style/content.css'

export default class Content extends Component {
    render() {
        return (
            <div className="contentWrap">
                <div className="leftWrap" >
                    <Sider/>
                </div>
                <div className="rightWrap">
                    <Result/>
                </div>
            </div>
        )
    }
}
