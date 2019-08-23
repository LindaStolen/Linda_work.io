import React, { Component } from 'react'
import '../style/Platform.css'

import Axios from 'axios'

export default class Platform extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            chooseCheck: 0,
            checkedAll: false,
            // checked: false,
            value:"",
            // params: "this.state.params",
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkedAll = this.checkedAll.bind(this)
    }
    handleChange(e) { //singlecheck
        this.setState({
            value: e.target.value,
        })
        console.log(e.target.value);
    }
    checkedAll(){ 
        const { checkedAll, data } = this.state;
        data.map((item,i) => {
            return item.check = !checkedAll;
        })
        this.setState({
            checkedAll: !checkedAll,
            data: data
        })
        console.log(this.state.checkedAll)
    }
    clearAll(){

    }
    componentDidMount(){
        Axios.get('http://172.16.131.23:8096/api/Filter/functionList',{
            params: {
                platform_code: "daso"
            }
        })
        .then(res => {
            this.setState({data: res.data})
            // console.log(res.data)
        })
        .catch(err => {
            console.log("fail")
        })
    }
    render() {
        const fnc = this.state.data
        return (
            <React.Fragment>
                <p className="descript">請選擇平台功能</p>
                <section>
                    <div className="btns">
                        <input type="button" value="全選" onClick={this.checkedAll}/>
                    </div>
                    {
                        fnc.map((item,i) => {
                            return (
                                <span className="chek" key={i}>
                                    <input type="checkbox" value={item.CODE} onClick={this.handleChange} />
                                    <label>{item.NAME}</label>
                                </span>)
                        })
                    }
                </section>
            </React.Fragment>
        )
    }
}
