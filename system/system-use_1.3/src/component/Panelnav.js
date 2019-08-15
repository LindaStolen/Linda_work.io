import React, { Component } from 'react'
import { PanelGroup, Panel, CheckboxGroup, Checkbox, Form, FormGroup, Button, ButtonToolbar} from 'rsuite'

export default class Panelnav extends Component {
    render() {
        return (
            <div>
                <Form>
                    <PanelGroup accordion style={{width: '350px', backgroundColor:'#FFEB99',}}>
                        <Panel header="Panel 1">
                            <FormGroup>
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>BC</Checkbox>
                                    <Checkbox>學習顧問</Checkbox>
                                    <Checkbox>千碩</Checkbox>
                                    <Checkbox>EC</Checkbox>
                                </CheckboxGroup>
                            </FormGroup>
                        </Panel>
                        <Panel header="Panel 2">
                            <FormGroup>
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>大碩</Checkbox>
                                    <Checkbox>百官</Checkbox>
                                    <Checkbox>學堂</Checkbox>
                                    <Checkbox>龍門</Checkbox>
                                    <Checkbox>課程總覽</Checkbox>
                                    <Checkbox>WIP</Checkbox>
                                    <Checkbox>精選文章</Checkbox>
                                </CheckboxGroup>
                            </FormGroup>
                        </Panel>
                        <Panel header="Panel 3">
                            <FormGroup>
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>BC</Checkbox>
                                    <Checkbox>學習顧問</Checkbox>
                                    <Checkbox>千碩</Checkbox>
                                    <Checkbox>EC</Checkbox>
                                </CheckboxGroup>
                            </FormGroup>
                        </Panel>
                        <Panel header="Panel 4">
                            <FormGroup>
                                <CheckboxGroup style={{marginLeft: '45px',}}> 
                                    <Checkbox>前/後台</Checkbox>
                                    <Checkbox>前台</Checkbox>
                                    <Checkbox>後台</Checkbox>
                                </CheckboxGroup>
                            </FormGroup>
                        </Panel>
                    </PanelGroup>
                    <ButtonToolbar 
                        style={{textAlign:'right',paddingRight: '10px',marginTop: '10px',}}
                    >
                        <Button>清除</Button>
                        <Button>送出</Button>
                    </ButtonToolbar>
                </Form>
            </div>
        )
    }
}
