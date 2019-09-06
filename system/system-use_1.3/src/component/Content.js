import React, { Component } from 'react'
import Sider from './Side_'
import Result from './Result'
import '../style/content.css'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            posiCode: [],
            actionCode:[]
        }
        this.handlePassData=this.handlePassData.bind(this)
    }
    handlePassData(data){
        this.setState({
            data: data, //跟side.js溝通的橋梁
        })
        console.log(data)
    }


    
    render() {
        return (
            <div className="contentWrap">
                <div className="leftWrap" >
                    <Sider passData={this.handlePassData} />
                    {/* 把 data 經由 passData 傳到 side，再回傳 */}
                </div>
                <div className="rightWrap">
                    <Result posiCode={this.state.data.position} fucList={this.state.data.platform} typeCode={this.state.data.action}/> {/* 給一個key，把side傳來的值給result */}
                </div>
            </div>
        )
    }
}

{/* position={this.state.posiCode} actionCode={this.state.actionCode} */}