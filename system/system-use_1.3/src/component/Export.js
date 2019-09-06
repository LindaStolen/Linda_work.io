import React, { Component } from 'react'
import moment from 'moment'
import Api from '../api.json'
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
	componentWillReceiveProps(nextProps) { //當元件第一次渲染完成時
		let funCodeProps = nextProps.passFunCondition
		let platfCodeProps = nextProps.platFormCondition
		let start = moment().add(-32,'days').format('YYYY-MM-DD')
		let end = moment().add(-32,'days').format('YYYY-MM-DD')
		// console.log("new props :" + funCodeProps)
		let config = {headers: {Authorization: Api.token}}
        let key = {
            params: {
				platform_code: platfCodeProps,
				function_code: funCodeProps,
				start_date: start,
				end_date: end,
            }
        }
		Axios.get(`${Api.url}api/LogData/editLogList`, key, config)
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
					<td style={tableborder}>{item.PLATFORM_CODE}</td>
					<td style={tableborder}>{item.FUNCTION_CODE}</td>
					<td style={tableborder}>{item.ACTION_TYPE}</td>
					<td style={tableborder}>{item.CREATE_BY}</td>
					<td style={tableborder}>{item.CREATE_DATE}</td>
				</tr>)
		})
		return (
			<React.Fragment>
				<table style={tableStyle}>
					<tbody>
						<tr>
							<th style={tableborder} className="id">項次</th>
							<th style={tableborder} className="title_">標題</th>
							<th style={tableborder} className="platform">平台名稱</th>
							<th style={tableborder} className="function">功能名稱</th>
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
