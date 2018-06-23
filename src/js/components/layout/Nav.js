import React from "react";
import { IndexLink, Link } from "react-router";
//https://webpack.js.org/concepts/loaders/
import styles from "./Nav.css";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true, 
      hover1: false, 
      hover2: false,
      hover3: false,
    };
  }

  
  togglehover1(){
    if (location.hash.includes('#/?') === false) {
      this.setState({hover1: !this.state.hover1})
    }
  }

  togglehover2(){
    if (location.hash.includes('headers') === false) {
      this.setState({hover2: !this.state.hover2})
    }
  }

  togglehover3(){
    if (location.hash.includes('settings') === false) {
      this.setState({hover3: !this.state.hover3})
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }  

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const headersClass = location.pathname.match(/^\/headers/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    
    /* 
      https://stackoverflow.com/questions/28365233/inline-css-styles-in-react-how-to-implement-ahover
        alternative to this is simply stick to css using... :local(.li:hover){ background: yellow; }
    */ 
    
    let inline_style1 = this.state.hover1 ? { backgroundColor: '#151d27' } : { backgroundColor: 'rgb(36,48,64)' };
    let inline_style2 = this.state.hover2 ? { backgroundColor: '#151d27' } : { backgroundColor: 'rgb(36,48,64)' };
    let inline_style3 = this.state.hover3 ? { backgroundColor: '#151d27' } : { backgroundColor: 'rgb(36,48,64)' };

    return (
      <nav class={"navbar navbar-inverse navbar-fixed-top bg-dark navbar-dark " + styles.nav_bar}  role="navigation" >
        <div className="container">        
          <a class={"navbar-brand " + styles.nav_a_img} href="#">
            <img className={styles.nav_img} src="/static/aws.jpg" alt="logo" />
          </a>
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse" + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }} style={inline_style1} onMouseEnter={this.togglehover1.bind(this)} onMouseLeave={this.togglehover1.bind(this)}>
                  Todos
                </IndexLink>
              </li>
              <li className={headersClass}>
                <Link to="headers" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }} style={inline_style2} onMouseEnter={this.togglehover2.bind(this)} onMouseLeave={this.togglehover2.bind(this)}>
                  Headers
                </Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }} style={inline_style3} onMouseEnter={this.togglehover3.bind(this)} onMouseLeave={this.togglehover3.bind(this)}>
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
