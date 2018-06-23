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
    };
  }
  toggleHover(){
    console.log(this.state.hover);    
    this.setState({hover: !this.state.hover})
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
    
    var inline_style;

    if (this.state.hover) {
      inline_style = {
        backgroundColor: '#151d27'
      }
    } else {
      inline_style = {
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
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }}>
                  Todos
                </IndexLink>
              </li>
              <li className={archivesClass}>
                <Link to="favorites" onClick={this.toggleCollapse.bind(this)} activeStyle={{ background: '#151d27' }} style={inline_style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
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
