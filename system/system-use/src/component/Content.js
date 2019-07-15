import React, { Component } from 'react'
import Resault from './Resault'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/content.css'


export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    handleOpen(e) {
        console.log("open")
    }
    handleClose(){
        console.log("close")
    }
    render() {
        return (
            <div className="bodyWrap">
                <ul className="navSide">
                    <li onClick={this.handleOpen}>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{marginRight: "5px",}}/>事業群
                        </span>
                        <ul className="subUl">
                            <li>
                                <input type="checkbox"/>BC
                            </li>
                            <li>
                                <input type="checkbox"/>學習顧問
                            </li>
                            <li>
                                <input type="checkbox"/>千碩
                            </li>
                            <li>
                                <input type="checkbox"/>EC
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{marginRight: "5px",}} />官網平台
                        </span>
                        <ul className="subUl">
                            <li>
                                <input type="checkbox"/>大碩
                            </li>
                            <li>
                                <input type="checkbox"/>百官
                            </li>
                            <li>
                                <input type="checkbox"/>學堂
                            </li>
                            <li>
                                <input type="checkbox"/>龍門
                            </li>
                            <li>
                                <input type="checkbox"/>課程總覽
                            </li>
                            <li>
                                <input type="checkbox"/>WIP
                            </li>
                            <li>
                                <input type="checkbox"/>精選文章
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{marginRight: "5px",}} />平台功能
                        </span>
                        <ul className="subUl">
                            <li>
                                <input type="checkbox"/>BC
                            </li>
                            <li>
                                <input type="checkbox"/>學習顧問
                            </li>
                            <li>
                                <input type="checkbox"/>千碩
                            </li>
                            <li>
                                <input type="checkbox"/>EC
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{marginRight: "5px",}} />前後台
                        </span>
                        <div style={{paddingLeft: "20px",backgroundColor: "#D8D8E8",}}>
                            <select>
                                <option>前後台</option>
                                <option>後台</option>
                                <option>後台</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <section className="outPut">
                    <Resault />
                    {/*<DatePick />*/}
                </section>
            </div>
        )
    }
}
