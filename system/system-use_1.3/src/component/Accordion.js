import React, { Component } from 'react'
import '../style/accordion.css'

let conditionName={
    padding: '5px 0 0 55px',
    fontSize: '1.15em',
    fontWeight: 'bold',
}

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select:'',
            active: null,
        }
        this.onChange=this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            select: e.target.value
        })
        console.log(e.target.value)
    }
    onClick(i) {
        return(e) => {
            let active = this.state.active === i? null: i
            this.setState({
                active: active,
            })
        }
    }
    render() {
        // const { expand, onClick} =this.props;
        return (
            <section>
                <div style={conditionName} >事業群
                    <ul>
                        <li>new car</li>
                        <li>spicy cookies</li>
                        <li>fresh air</li>
                        <li>dishes dinner diving</li>
                        <li>blender bottle white</li>
                    </ul>
                </div>
                <div style={conditionName} >平台官網
                    <ul>
                        <li>
                            <input type="radio" name="platform" value="DASO" onChange={this.onChange}/> <label>大碩</label>
                        </li>
                        <li>
                            <input type="radio" name="platform" value="BYONE" onChange={this.onChange}/> <label>百官</label>
                        </li>
                        <li>
                            <input type="radio" name="platform" value="學堂" onChange={this.onChange}/> <label>學堂</label>
                        </li>
                        <li>
                            <input type="radio" name="platform" value="龍門" onChange={this.onChange}/> <label>龍門</label>
                        </li>
                        <li>
                            <input type="radio" name="platform" value="課程總覽" onChange={this.onChange}/> <label>課程總覽</label>
                        </li>
                        <li>
                            <input type="radio" name="platform" value="WIP" onChange={this.onChange}/> <label>WIP</label>
                        </li>
                        <li>
                            <input type="radio" name="platform" value="精選文章" onChange={this.onChange}/> <label>精選文章</label>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
