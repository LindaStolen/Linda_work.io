import React, { Component } from 'react'
import { Icon } from 'rsuite';
import '../style/accordion.css'
import '../style/side.css'
import Axios from 'axios'

// import InputSearch from './InputSearch'
// import Accordion from './Accordion';
// import FrontBackend from './FrontBackend';


export default class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // select_position: "",
      // select_plat: "",
      // select_type: "",
      // select_member: "",
      position: "",
      action: "",
      platform: "",
      member: ""
    }
    this.baseState = this.state
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name.checked]: e.target.checked,
    })
    console.log(e.target.name + ":" + e.target.value)
    // console.log(e.target.name + ":" + e.target.checked)
  }

  handleReset() {
    this.refs.form.reset();
    // this.setState(this.baseState)
    // console.log(this.baseState)
    // this.setState({
    //   checked:false
    // })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state)
    // const position = this.state.position
    // const action = this.state.action
    // const platform = this.state.platform
    // alert('Send: ' + position + "/" + action + "/"+ platform);
    Axios.get('http://172.16.131.23:8096/api/Filter/functionList', {
      params: {
        platform_code: this.state.platform
      }
    })
      .then(res => {
        this.setState({
          data:res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    // const {select} = this.state
    return (
      <React.Fragment>
        <div className="sidewrap">
          <form onSubmit={this.handleSubmit} ref="form">
            <p className="conditionName">wtheaef tuck</p>
            <div className="navOption">
              <input type="radio" value="front" name="position" onChange={this.handleChange} /> <label>前台</label>
              <input type="radio" value="backend" name="position" onChange={this.handleChange} /> <label>後台</label>
            </div>
            {/*<FrontBackend />*/}
            {/*<Accordion/>*/}
            <section>
              <div className="conditionName" >事業群
                <ul>
                  <li>new car</li>
                  <li>spicy cookies</li>
                  <li>fresh air</li>
                  <li>dishes dinner diving</li>
                  <li>blender bottle white</li>
                </ul>
              </div>
              <div className="conditionName" >平台官網
                <ul>
                  <li>
                    <input type="radio" name="platform" value="DASO" onChange={this.handleChange} /> <label>大碩</label>
                  </li>
                  <li>
                    <input type="radio" name="platform" value="BYONE" onChange={this.handleChange} /> <label>百官</label>
                  </li>
                  <li>
                    <input type="radio" name="platform" value="學堂" onChange={this.handleChange} /> <label>學堂</label>
                  </li>
                  <li>
                    <input type="radio" name="platform" value="龍門" onChange={this.handleChange} /> <label>龍門</label>
                  </li>
                  <li>
                    <input type="radio" name="platform" value="課程總覽" onChange={this.handleChange} /> <label>課程總覽</label>
                  </li>
                  <li>
                    <input type="radio" name="platform" value="WIP" onChange={this.handleChange} /> <label>WIP</label>
                  </li>
                  <li>
                    <input type="radio" name="platform" value="精選文章" onChange={this.handleChange} /> <label>精選文章</label>
                  </li>
                </ul>
              </div>
            </section>
            <p className="conditionName">日誌類型</p>
            <div className="navOption">
              <input type="radio" className="buttons" value="登入" name="action" onChange={this.handleChange} /> <label>登入</label>
              <input type="radio" className="buttons" value="操作" name="action" onChange={this.handleChange} /> <label>操作</label>
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
                />
                <button className="buttonStyle">
                  <Icon icon="search" />
                </button>
              </div>
            </div>
            <div style={{ textAlign: 'right', marginTop: '15px' }}>
              <input type="button" className="buttons" value="取消" onClick={this.handleReset} />
              <input type="submit" className="buttons" value="送出" onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
