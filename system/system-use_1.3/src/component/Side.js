import React, { Component } from 'react'
import { Sidenav, Dropdown, Checkbox, Nav, CheckboxGroup, Button, ButtonToolbar } from 'rsuite';

let sidewrap = {
    backgroundColor: '#FFED66',
    height: '100vh',
    marginRight: 10,
    textAlign: 'left',
}
export default class Side extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidenav>
                    <Sidenav.Body style={sidewrap}>
                        <Nav>
                            <Dropdown eventKey="1" title="事業群" style={{textAlign: 'center',color: '#000000',}}>
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>BC</Checkbox>
                                    <Checkbox>學習顧問</Checkbox>
                                    <Checkbox>千碩</Checkbox>
                                    <Checkbox>EC</Checkbox>
                                </CheckboxGroup>
                            </Dropdown>
                            <Dropdown eventKey="2" title="官網平台">
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>大碩</Checkbox>
                                    <Checkbox>百官</Checkbox>
                                    <Checkbox>學堂</Checkbox>
                                    <Checkbox>龍門</Checkbox>
                                    <Checkbox>課程總覽</Checkbox>
                                    <Checkbox>WIP</Checkbox>
                                    <Checkbox>精選文章</Checkbox>
                                </CheckboxGroup>
                            </Dropdown>
                            <Dropdown eventKey="3" title="平台功能">
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>BC</Checkbox>
                                    <Checkbox>學習顧問</Checkbox>
                                    <Checkbox>千碩</Checkbox>
                                    <Checkbox>EC</Checkbox>
                                </CheckboxGroup>
                            </Dropdown>
                            <Dropdown eventKey="4" title="前後台">
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>前/後台</Checkbox>
                                    <Checkbox>前台</Checkbox>
                                    <Checkbox>後台</Checkbox>
                                </CheckboxGroup>
                            </Dropdown>
                        </Nav>
                        <ButtonToolbar style={{textAlign:'right',paddingRight: '10px',}}>
                            <Button>清除</Button>
                            <Button>送出</Button>
                        </ButtonToolbar>
                    </Sidenav.Body>
                </Sidenav>
            </React.Fragment>
        )
    }
}
