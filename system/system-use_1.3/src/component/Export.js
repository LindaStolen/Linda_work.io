import React, { Component } from 'react'
// import { Table } from 'rsuite';
import Axios from 'axios'

let tableStyle = {
	minWidth: "800px",
	margin: "auto",
	textAlign: 'center',
}
let tableborder = {
	border: '1px solid #555',
}


export default class Export extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		// console.log(this.state.data[0])
	}
	componentDidMount() { //當元件第一次渲染完成時
		Axios.get('http://172.16.131.23:8096/api/LogData/testList')
			.then(res => {
				this.setState({ data: res.data })
				// console.log(res.data)
			})
			.catch(err => {
				console.log("啥也沒有")
			})
	}
	render() {
		const table = this.state.data.map((item, i) => {
			return (
				<tr key={i}>
					<td style={tableborder}>{i + 1}</td>
					<td style={tableborder}>{item.title}</td>
					<td style={tableborder}>{item.function}</td>
					<td style={tableborder}>{item.action_type}</td>
					<td style={tableborder}>{item.create_by}</td>
					<td style={tableborder}>{item.create_date}</td>
				</tr>)
		})
		return (
			<React.Fragment>
				<table style={tableStyle}>
					<tbody>
						<tr>
							<th style={tableborder} className="id">項次</th>
							<th style={tableborder} className="title_">標題</th>
							<th style={tableborder} className="function">功能</th>
							<th style={tableborder} className="action_type">執行動作</th>
							<th style={tableborder} className="create_by">使用者</th>
							<th style={tableborder} className="create_date">建立時間</th>
						</tr>
						{table}
					</tbody>
				</table>
			</React.Fragment>
		)
	}
}
