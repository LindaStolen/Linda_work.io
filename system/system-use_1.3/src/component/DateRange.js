import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/daterange.css'
import moment from 'moment';

const day = moment()
export default class DateRange extends Component {
    constructor(props){
        super(props);
        this.state={
            start: "",
            end: "",
            value:[]
        }
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleEndDate = this.handleEndDate.bind(this)
        this.handleStartDate = this.handleStartDate.bind(this)
        this.handleSendDate = this.handleSendDate.bind(this)
    }

    handleDateChange(e){
        e.preventDefault();
        this.props.sepcific({
            value: e.target.value
        })
        console.log(e.target.value)
    }

    handleStartDate(e){
        this.setState({
            start: e.target.value
        })
    }
    handleEndDate(e){
        this.setState({
            end: e.target.value
        })
    }
    
    handleSendDate(e) {
        e.preventDefault();
        const {start, end} =this.state
        this.props.sendDate({start, end})
        console.log({start, end})
    }

    render() {
        const D1= moment().format("YYYY-MM-DD")
        const D2= moment().format("YYYY-MM-DD")
        const YD1= moment().add(-32,'days').format("YYYY-MM-DD")
        const YD2= moment().add(-32,'days').format("YYYY-MM-DD")
        const last_7= moment().add(-7,'days').format("YYYY-MM-DD")
        const last_30= moment().add(-30,'days').format("YYYY-MM-DD")
        console.log(this.state.value)
        return (
            <div className="selDateRange">

                {/*<div>
                <span>{this.state.start}</span> to
                <span>{this.state.end}</span>
                </div>*/}
                <div>
                <span>{this.state.value}</span>
                </div>
                <form onSubmit={this.handleSendDate} >
                    <input type="date" name="Start Date" onChange={this.handleStartDate}/>
                    <span><FontAwesomeIcon icon={['fas','arrow-right']} style={{margin: '0 8px',}}></FontAwesomeIcon></span>
                    <input type="date" name="End Date" onChange={this.handleEndDate}/>
                    <button type="submit" onClick={this.handleSendDate}>GO</button>
                </form>
                <div className="quickRange">
                    <button value={[YD1, YD2]} type="submit" onClick={this.handleDateChange}>Yesterday</button>
                    <button value={[D1, D2]} onClick={this.handleDateChange}>Today</button>
                    <button value={[last_7, D2]} onClick={this.handleDateChange}>Last 7 days</button>
                    <button value={[last_30, D2]} onClick={this.handleDateChange}>Last month</button>
                </div>
            </div>
        )
    }
}
