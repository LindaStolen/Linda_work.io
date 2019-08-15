import React, { Component } from 'react'
// import { Table } from 'rsuite';
import Axios from 'axios';
// const { Column, HeaderCell, Cell } = Table;


export default class Export extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
        // console.log(this.state.data[0])
    }
        componentDidMount(){ //當元件第一次渲染完成時
            Axios.get('http://172.16.131.23:8096/api/LogData/testList')
            .then(res => {
                console.log("現身吧")
                this.setState({data: res.data})
            })
            .catch(err => {
                console.log("消失吧")
            })
        }
    render() {
        const data = this.state.data;
        return (
            <React.Fragment>
                <table style={{width:"750px",margin:"auto",border:"1px solid #555",}}>
                    <tbody>
                        <tr>
                            <th className="num">序號</th>
                            <th className="function">功能名稱</th>
                            <th className="action_id">執行動作</th>
                            <th className="create_by">建立者</th>
                            <th className="create_date">建立時間</th>
                        </tr>
                        <tr>
                            <td>{}</td>
                            {/*<td>{data[0].FUNCTION}</td>
                            <td>{data[0].ACTION_ID}</td>
                            <td>{data[0].CREATE_BY}</td>
        <td>{data[0].CREATE_DATE}</td>*/}
                        </tr>
                    </tbody>
                </table>

                {/*<Table
                 bordered 
                 width={700}
                 autoHeight="ture" 
                 style={{margin: "auto",}}
                 data={this.state.data}
                 >
                <Column flexGrow={1} minWidth={50} align="center" fixed>
                    <HeaderCell>序號</HeaderCell>
                    <Cell dataKey="ID" content={data[0].ACCOUNT}/>
                </Column>

                <Column flexGrow={3} align="center">
                    <HeaderCell>登入IP</HeaderCell>
                    <Cell dataKey="log_ip" />
                </Column>

                <Column flexGrow={3} align="center">
                    <HeaderCell>登入時間</HeaderCell>
                    <Cell dataKey="create_date" />
                </Column>
                </Table>*/}
            </React.Fragment>
        )
    }
}
