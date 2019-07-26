import React, { Component } from 'react'

let nav = {
    listStyle: 'none',
}
let condition = {
    backgroundColor: '#ade',
}

export default class NavSide extends Component {
    render() {
        return(
            <div>
                <ul className={nav}>
                    <li className={condition}></li>
                </ul>
            </div>
        )
    }
}