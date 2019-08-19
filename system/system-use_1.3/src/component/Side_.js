import React, { Component } from 'react'
// import { Dropdown, Checkbox, Nav, CheckboxGroup, Sidenav } from 'rsuite';
import InputSearch from './InputSearch'
import Accordion from './Accordion';

let sidewrap = {
    backgroundColor: '#FFEB99',
    marginRight: 10,
    textAlign: 'left',
}
let navOption={
    padding: '5px 0 10px 55px',
    color: '#000000',
}
let conditionName={
    padding: '5px 0 0 55px',
    fontSize: '1.15em',
    fontWeight: 'bold',
}
let buttons={
    margin: '0 5px 0 0',
    padding: '3px 10px',
    borderRadio: '10px',
    backgroundColor: '#ddd',
}


export default class Side extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            expand: false,
        }
        this.onChange=this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            select: e.target.value
        })
        console.log(e.target.value)
    }
    

    render() {
        const {select} = this.state
        return (
            <React.Fragment>
                <div style={sidewrap}>
                    <form>
                        <p style={conditionName}>前 / 後台</p>
                        <div style={navOption}>
                            <input type="radio" value="front" name="position" checked={select === "front"} onChange={this.onChange}/> <label>前台</label>
                            <input type="radio" value="stage" name="position" checked={select === "stage"} onChange={this.onChange}/> <label>後台</label>
                        </div>
                        <Accordion/>
                        <p style={conditionName}>日誌類型</p>
                        <div style={navOption}>
                            <input type="radio" style={buttons} value="登入" name="action" selected={select === "登入"} onChange={this.onChange}/> <label>登入</label>
                            <input type="radio" style={buttons} value="操作" name="action" selected={select === "操作"} onChange={this.onChange}/> <label>操作</label>
                        </div>
                        <div>
                            <InputSearch/>
                        </div>
                        <div style={{textAlign: 'right', marginTop: '15px'}}>
                            <input type="button" style={buttons} value="取消" selected={select === "登入"} onClick={this.onClick}/>
                            <input type="button" style={buttons} value="送出" selected={select === "操作"} onClick={this.onClick}/>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
