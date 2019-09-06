import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from './DateRange'
import Table from './Export'

import '../style/result.css'
import '../style/Platform.css'
import Axios from 'axios'
import Api from '../api.json'

// import Platform from './Platform'

function handlButtonDate(value) {
    this.setState({
        value:value
    })
}

export default class Result extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [], //功能清單的倉庫
            posi_code: this.props.posiCode,
            fuc_code:this.props.fucList,
            type_code: this.props.typeCode,
            date:[],
            value:[]
        }
        this.handleGetDate = this.handleGetDate.bind(this)
        this.handlButtonDate = this.handlButtonDate.bind(this)
    }
    componentWillReceiveProps(nextProps){ //即將傳入的新props
        //let newPlat = nextProps.position  新props 的 key值
        let newSider = nextProps.fucList  //新props 的 key值
        console.log("new props :" + newSider) //是 side裡的 this.state.data
        let config = {headers: {Authorization: Api.token}}
        let key = {
            params: {
                // funcform_code: newSider,
                platform_code: newSider
            }
        }
        console.log(key.params.funcform_code)
        Axios.get(`${Api.url}api/Filter/functionList`, key, config)
        .then(res => {
            this.setState({data: res.data})
            // console.log(res.data)
        })
        .catch(err => {
            console.log("fail")
        })
        console.log(key.params)
        console.log(nextProps) //取出新的object
    }

    handleChecked(e){
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name.checked]: e.target.checked,
            fuc_code: e.target.value
        })
        // console.log("功能 :" + e.target.value)
    }

    handleGetDate(date){
        this.setState({
            date: date
        })
        console.log(date)
    }
    

    render() {
        const fnc  = this.state.data
        const date = this.state.value
        // console.log("平台條件:"+ this.props.fucList)
        // console.log("功能清單2:"+this.handleChecked.fuc_code)
        //const pin = this.state.condition
        console.log("取得日期: "+ this.state.date.start+"to"+this.state.date.end)
        
        return (
            <React.Fragment>
                <div className="conditionWrap">
                <div className="condition">
                    <span className="spin">{this.props.posiCode}
                        <FontAwesomeIcon icon={['fas','times']} style={{marginLeft: '8px',}}></FontAwesomeIcon>
                    </span>
                    <span className="spin">{this.props.fucList}
                        <FontAwesomeIcon icon={['fas','times']} style={{marginLeft: '8px',}}></FontAwesomeIcon>
                    </span>
                    <span className="spin">{this.props.typeCode}
                        <FontAwesomeIcon icon={['fas','times']} style={{marginLeft: '8px',}}></FontAwesomeIcon>
                    </span>
                    <span className="spin">{this.props.date}
                        <FontAwesomeIcon icon={['fas','times']} style={{marginLeft: '8px',}}></FontAwesomeIcon>
                    </span>
                    
                </div>
                    <DatePicker sendDate={this.handleGetDate} sepcific={this.handlButtonDate}/>
                </div>
                <div className="export">
{/* */}             <div>{this.state.date}</div> 
                    <div className="platFuc">
                        <p className="descript">請選擇平台功能</p>
                        <section>
                        {/*<div className="btns">
                            <span className="chek">
                                <input type="checkbox" value="全選"/>
                                <label>全選</label>
                            </span>
                        </div>*/}
                            {
                                fnc.map((item,i) => {
                                    return (
                                        <span className="chek" key={i}>
                                            <input type="radio" value={item.CODE} name="funcs" onClick={this.handleChecked.bind(this)} />
                                            <label>{item.NAME}</label>
                                        </span>
                                        )
                                })
                            }

                        </section>
                    </div>
                    <section>
                        <label>目前選擇時間區間: </label>
                        <span>{date}</span>
                    </section>
                    <Table getFucCondition={this.handleChecked} 
                        passFunCondition={this.state.fuc_code}
                        platFormCondition={this.props.fucList} />
                </div>
            </React.Fragment>
        )
    }
}
