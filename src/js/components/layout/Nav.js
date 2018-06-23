import React from "react";
import { IndexLink, Link } from "react-router";
//https://webpack.js.org/concepts/loaders/
import styles from "style-loader!css-loader?modules!./Nav.css";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true, 
      hover: false, 
      link1: { hover: false },
      link2: { hover: false },
      link3: { hover: false },
    };
  }
  
  toggleHover1(){
    console.log(location.pathname);
    if (location.pathname != "/") {
      this.setState({link1: {...this.state.link1, hover: !this.state.link1.hover}});
    }
  }

  toggleHover2(){
    console.log(location.pathname);
    if (location.pathname.match(/^\/favorites/) == false) {
      this.setState({link2: {...this.state.link2, hover: !this.state.link2.hover}});
    }
  }
  
  toggleHover3(){
    if (location.pathname.match(/^\/settings/) == false) {
      this.setState({link3: {...this.state.link3, hover: !this.state.link3.hover}});
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
    const archivesClass = location.pathname.match(/^\/favorites/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    
    /* 
      https://stackoverflow.com/questions/28365233/inline-css-styles-in-react-how-to-implement-ahover
        alternative to this is simply stick to css using... :local(.li:hover){ background: yellow; }
    */ 
    
    var inline_style1;

    if (this.state.link1.hover) {
      inline_style1 = {
        backgroundColor: '#151d27'
      }
    } else {
      inline_style1 = {
        backgroundColor: 'rgb(36,48,64)'
      }
    }
    
    var inline_style2;

    if (this.state.link2.hover) {
      inline_style2 = {
        backgroundColor: '#151d27'
      }
    } else {
      inline_style2 = {
        backgroundColor: 'rgb(36,48,64)'
      }
    }

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
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }} style={inline_style1} onMouseEnter={this.toggleHover1.bind(this)}>// onMouseLeave={this.toggleHover1.bind(this)}>
                  Todos
                </IndexLink>
              </li>
              <li className={archivesClass}>
                <Link to="favorites" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }} style={inline_style2} onMouseEnter={this.toggleHover2.bind(this)} onMouseLeave={this.toggleHover2.bind(this)}>
                  Favorites
                </Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }}>
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
