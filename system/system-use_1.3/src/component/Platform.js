import React, { Component } from 'react'
import '../style/Platform.css'

import Axios from 'axios'
import Api from '../api.json'

export default class Platform extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            chooseCheck: 0,
            checkedAll: false,
            value:"",
            // params: "this.state.params",
        }
        this.handleClick = this.handleClick.bind(this);
        this.checkedAll = this.checkedAll.bind(this)
    }
    
    handleClick(e) { //singlecheck
        // this.setState({
        //     value: e.target.value,
        // })
        // console.log(e.target.value);
        let config = {headers: {Authorization: Api.token}}
        Axios.get(`${Api.url}api/LogData/editLogList`,{
            params: {
                platform_code: this.state,
                function_code:"",
                start_date:"",
                end_date:"",
            }
        },config)
        .then(res => {
            this.setState({data: res.data})
            // console.log(res.data)
        })
        .catch(err => {
            console.log("fail")
        })
    }
    checkedAll(){ 
        // const { checkedAll, data } = this.state;
        // data.map((item,i) => {
        //     return item.check = !checkedAll;
        // })
        // this.setState({
        //     checkedAll: !checkedAll,
        //     data: data
        // })
        // console.log(this.state.checkedAll)
    }
    clearAll(){

    }

    componentDidMount(){
        let config = {headers: {Authorization: Api.token}}
        Axios.get(`${Api.url}api/Filter/functionList`,{
            params: {
                platform_code: this.props.PLATFORM_CODE
            }
        },config)
        .then(res => {
            this.setState({data: res.data})
            // console.log(res.data)
        })
        .catch(err => {
            console.log("fail")
        })
    }
    render() {
        const fnc  = this.state.data
        return (
            <React.Fragment>
                <p className="descript">請選擇平台功能</p>
                <section>
                <div className="btns">
                    <span className="chek">
                        <input type="checkbox" value="全選"/>
                        <label>全選</label>
                    </span>
                </div>
                    {
                        fnc.map((item,i) => {
                            return (
                                <span className="chek" key={i}>
                                    <input type="checkbox" value={item.CODE} onClick={this.handleClick} />
                                    <label>{item.NAME}</label>
                                </span>)
                        })
                    }

                </section>
            </React.Fragment>
        )
    }
}
