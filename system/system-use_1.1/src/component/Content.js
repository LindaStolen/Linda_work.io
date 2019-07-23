import React, { Component } from 'react'
import Result from './Result'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/content.css'


export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: true,
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
        console.log("open");
        this.setState({
            opened: !this.state.opened
        })
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    handleClose() {
        console.log("close")
    }
    render() {
        const { opened } = this.state;
        return (
            <div className="bodyWrap">
                <ul className="navSide">
                    <li>
                        <div className="main" onClick={this.handleOpen}>
                            <FontAwesomeIcon
                                icon={['fas', 'bookmark']}
                                color="#FF5E5B"
                                style={{ marginRight: "5px", }} />事業群
                        </div>
                        <ul className="subUl">
                            <li>
                                <input type="checkbox" />BC
                            </li>
                            <li>
                                <input type="checkbox" />學習顧問
                            </li>
                            <li>
                                <input type="checkbox" />千碩
                            </li>
                            <li>
                                <input type="checkbox" />EC
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="main">
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{ marginRight: "5px", }} />官網平台
                        </div>
                        <ul className="subUl">
                            <li>
                                <input type="checkbox" />大碩
                            </li>
                            <li>
                                <input type="checkbox" />百官
                            </li>
                            <li>
                                <input type="checkbox" />學堂
                            </li>
                            <li>
                                <input type="checkbox" />龍門
                            </li>
                            <li>
                                <input type="checkbox" />課程總覽
                            </li>
                            <li>
                                <input type="checkbox" />WIP
                            </li>
                            <li>
                                <input type="checkbox" />精選文章
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="main">
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{ marginRight: "5px", }} />平台功能
                        </div>
                        <ul className="subUl">
                            <li>
                                <input type="checkbox" />BC
                            </li>
                            <li>
                                <input type="checkbox" />學習顧問
                            </li>
                            <li>
                                <input type="checkbox" />千碩
                            </li>
                            <li>
                                <input type="checkbox" />EC
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <FontAwesomeIcon icon={['fas', 'bookmark']} color="#FF5E5B" style={{ marginRight: "5px", }} />前後台
                        </div>
                        <dt style={{ padding: "8px 0 8px 20px", backgroundColor: "#D8D8E8", }}>
                            <select>
                                <option>前後台</option>
                                <option>後台</option>
                                <option>後台</option>
                            </select>
                        </dt>
                    </li>
                </ul>
                <section className="outPut">
                    <Result />
                    {/*<DatePick />*/}
                </section>
            </div>
        )
    }
}
