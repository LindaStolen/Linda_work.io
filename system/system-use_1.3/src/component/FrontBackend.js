import React, { Component } from 'react'


let navOption={
    padding: '5px 0 10px 55px',
    color: '#000000',
}
let conditionName={
    padding: '5px 0 0 55px',
    fontSize: '1.15em',
    fontWeight: 'bold',
}
export default class FrontBackend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            // expand: false,
            name: '',
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            select: e.target.value
        })
        console.log(e.target)
    }
    onSubmit(e) {
        alert('send: ' + this.state.name);
        e.preventDefault();
    }
    render() {
        const select = this.state.select
        return (
            <div>
                <p style={conditionName}>wtheaef tuck</p>
                <div style={navOption}>
                    <input type="radio" value="front" name="position" checked={select === "front"} onChange={this.onChange}/> <label>前台</label>
                    <input type="radio" value="backend" name="position" checked={select === "backend"} onChange={this.onChange}/> <label>後台</label>
                </div> 
            </div>
        )
    }
}
