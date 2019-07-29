import React, { Component } from 'react'
import { Sidenav, Dropdown, Checkbox, Nav } from 'rsuite';

let sidewrap = {
    backgroundColor: '#FFED66',
    height: '100vh',
    textAlign: 'left',
    marginRight: 10,
}
export default class Side extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidenav>
                    <Sidenav.Body style={sidewrap}>
                        <Nav>
                            <Dropdown eventKey="1" title="事業群" style={{textAlign: 'center',}}>
                                <Dropdown.Item> 
                                    <Checkbox>BC</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item> 
                                    <Checkbox>學習顧問</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item> 
                                    <Checkbox>千碩</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item> 
                                    <Checkbox>EC</Checkbox>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown eventKey="2" title="官網平台">
                                <Dropdown.Item>
                                    <Checkbox>大碩</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>百官</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>學堂</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>龍門</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>課程總覽</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>WIP</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>精選文章</Checkbox>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown eventKey="3" title="平台功能">
                                <Dropdown.Item>
                                    <Checkbox>BC</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>學習顧問</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>千碩</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>EC</Checkbox>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown eventKey="4" title="前後台">
                                <Dropdown.Item>
                                    <Checkbox>前後台</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>前台</Checkbox>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Checkbox>後台</Checkbox>
                                </Dropdown.Item>
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </React.Fragment>
        )
    }
}
