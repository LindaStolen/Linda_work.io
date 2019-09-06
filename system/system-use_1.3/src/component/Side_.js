import React, { Component } from 'react'
import { Icon } from 'rsuite';
import '../style/accordion.css'
import '../style/side.css'
import Axios from 'axios'
import Api from '../api.json'



export default class Side extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      position: "",
      action: "",
      platform: "",
      member: ""
    }
    // this.baseState = this.props
    // this.handleReset = this.handleReset.bind(this);
    this.handleFontBackChange = this.handleFontBackChange.bind(this);
    this.handlePlatChange = this.handlePlatChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFontBackChange(e) {
    this.setState({
      position: e.target.value,
    })
    console.log("position:" + e.target.value)
  }

  handlePlatChange(e) {
    this.setState({
      platform: e.target.value,
    })
    console.log("platform:" + e.target.value)
  }
  handleTypeChange(e) {
    this.setState({
      action: e.target.value,
    })
    console.log("action:" + e.target.value)
  }

  // handleReset() {
  //   this.refs.form.reset();
  //   this.setState(this.baseState)
  //   console.log(this.baseState)
  //   this.setState({
  //     checked:false
  //   })
  //   console.log(this.props)
  // }

  componentDidMount(){
    let config = {headers: {Authorization: Api.token}}
    Axios.get(`${Api.url}api/Filter/platformList` ,config
    )
    .then(res => {
      this.setState({data: res.data})
      // console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { position, platform, action }=this.state
    let params = {
        params: {
        platform_code: this.state.platform
      }
    }
    let config = {headers: {Authorization: Api.token}}
    Axios.get(`${Api.url}api/Filter/functionList` ,params, config
    )
    .then(res => {
      this.props.passData({ position, platform, action }) //在平台清單選到的value，從這回傳到content
      console.log({ position, platform, action })
      // this.props.passData(this.state.data) 
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  render() {
    // const {position, action, platform, member} = this.props
    const platformList =this.state.data //這是平台清單變數
    return (
      <React.Fragment>
        <div className="sidewrap">
          <form onSubmit={this.handleSubmit} ref="form" >
            <p className="conditionName">系統平台</p>
            <div className="navOption">
              <input type="radio" value="front" name="position" onChange={this.handleFontBackChange} /><label>前台</label>
              <input type="radio" value="backend" name="position" onChange={this.handleFontBackChange}/> <label>後台</label>
            </div>
            <section>
              {/*<div className="conditionName" >事業群
                <ul>
                  <li>new car</li>
                  <li>spicy cookies</li>
                  <li>fresh air</li>
                  <li>dishes dinner diving</li>
                  <li>blender bottle white</li>
                </ul>
              </div>*/}
              <div>
              <p className="conditionName">平台官網</p>
                <ul  className="navOption">
                {
                  platformList.map((item,i) => {
                    return(
                      <li key={i}>
                        <input type="radio" name="platform" value={item.PLATFORM_CODE} onChange={this.handlePlatChange}/>
                        <label>{item.PLATFORM_NAME}</label>
                        {/*<input type="text" name="platform_chiness" value={item.PLATFORM_NAME} />*/}
                      </li>
                    )
                  })
                }
                </ul>
              </div>
            </section>
            <p className="conditionName">日誌類型</p>
            <div className="navOption">
              <input type="radio" value="登入" name="action" onChange={this.handleTypeChange} /> <label>登入</label>
              <input type="radio" value="操作" name="action" onChange={this.handleTypeChange} /> <label>操作</label>
            </div>
            <div> {/* 搜尋框框 */}
              {/*<InputSearch value/>*/}
              <div className="search">
                <input
                  className="inputStyle"
                  type="text"
                  name="member"
                  onChange={this.handleChange}
                  placeholder="輸入員工姓名或編號"
                  autoComplete="off"
                />
                <button className="buttonStyle">
                  <Icon icon="search" />
                </button>
              </div>
            </div>
            <div style={{ textAlign: 'right', marginTop: '15px' }}>
              <input type="reset" className="buttons" value="取消" />
              <input type="submit" className="buttons" value="送出" onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
