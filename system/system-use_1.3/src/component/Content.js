import React, { Component } from 'react'
import Sider from './Side_'
import Result from './Result'
import '../style/content.css'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    readerSider(){
        return <Sider value={this.state.data}/>
    }

    render() {
        return (
            <div className="contentWrap">
                <div className="leftWrap" >
                    <Sider/>
                    {/* this.renderSider() */}
                </div>
                <div className="rightWrap">
                    <Result/>
                </div>
            </div>
        )
    }
}
