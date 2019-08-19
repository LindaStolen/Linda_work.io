import React, { Component } from 'react'
import {Icon} from 'rsuite'


let search = {
    width: '70%',
    margin: '5px auto',
}
let inputStyle = {
    borderRadius: '10px',
    border: 0,
    height: 30,
    paddingLeft: '10px',
    width: '175px',
}
let buttonStyle = {
    backgroundColor: 'transparent',
}
export default class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "",
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);     
    }
    onChange(e){
        this.setState({
            value: e.target.value
        })
        console.log()
    }
    onClick = () => {
        // const {value} = this.state;
        console.log(this.state.value);
        // alert(this.state.value);
    }
    render() {
        return (
            <React.Fragment>
                <div style={search}>
                    <input
                        style={inputStyle}
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="輸入員工姓名或編號"
                    />
                    <button style={buttonStyle} onClick={this.onClick}>
                        <Icon icon="search"/>
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
