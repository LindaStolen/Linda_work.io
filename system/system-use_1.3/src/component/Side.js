import React, { Component } from 'react'
import { Sidenav, Dropdown, Checkbox, Nav, CheckboxGroup, Button, ButtonGroup, ButtonToolbar,RadioGroup, Radio } from 'rsuite';
// import Axios from 'axios'
import InputSearch from './InputSearch'

let sidewrap = {
    backgroundColor: '#FFEB99',
    marginRight: 10,
    textAlign: 'left',
}
let navOption={
    padding: '10px 0 10px 55px',
    color: '#000000',
}
let conditionName={
    fontSize: '1.15em',
}
let buttons={
    margin: '10px 0 10px 10px',
}

export default class Side extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : "",
        }
        this.onClick = this.onClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    onClick(changeEvent) {
        this.setState({
            selected: changeEvent.target.value,
        })
        console.log(this.state.selected)
    }
    handleSubmit(event){
        event.preventDefault();
        alert('送出');
        console.log('You have selected:', this.state.selected);
    }
    render() {
        return (
            <React.Fragment>
                <form  onSubmit={this.handleSubmit}>
                    <Sidenav style={sidewrap}>
                        <Sidenav.Body>
                            <div style={navOption}>
                                <span style={conditionName}>
                                    前 / 後台
                                </span>
                                <RadioGroup name="radioList"> 
                                    <Radio type="radio" 
                                    value="front"
                                    checked={this.state.selected === "front"}
                                    onClick={this.onClick}>前台</Radio>
                                    <Radio type="radio" 
                                    value="stage"
                                    checked={this.state.selected === "stage"}
                                    onClick={this.onClick}>後台</Radio>
                                </RadioGroup>
                            </div>
                            <Nav>
                                <Dropdown eventKey="2" title="事業群" disabled>
                                    <CheckboxGroup style={{marginLeft: '45px',}}> 
                                        
                                    </CheckboxGroup>
                                </Dropdown>
                                <Dropdown eventKey="3" title="平台官網" style={{paddingLeft: '3px',}}>
                                    <CheckboxGroup style={{marginLeft: '45px',}}> 
                                        <Checkbox value="DASO">大碩</Checkbox>
                                        <Checkbox value="BYONE">百官</Checkbox>
                                        <Checkbox>學堂</Checkbox>
                                        <Checkbox>龍門</Checkbox>
                                        <Checkbox>課程總覽</Checkbox>
                                        <Checkbox>WIP</Checkbox>
                                        <Checkbox>精選文章</Checkbox>
                                    </CheckboxGroup>
                                </Dropdown>
                            </Nav>
                            <div style={navOption}>
                                <span style={conditionName}>
                                    日誌類型
                                </span>
                                <ButtonGroup style={buttons}> 
                                    <Button>登入</Button>
                                    <Button>操作</Button>
                                </ButtonGroup>
                            </div>
                            <div>
                                <InputSearch/>
                            </div>
                            <ButtonToolbar
                                style={{textAlign:'right',paddingRight: '10px',marginTop: '10px',}}
                            >
                                <Button>清除</Button>
                                <Button type="submit">送出</Button>
                            </ButtonToolbar>
                        </Sidenav.Body>
                    </Sidenav>
                </form>
            </React.Fragment>
        )
    }
}
