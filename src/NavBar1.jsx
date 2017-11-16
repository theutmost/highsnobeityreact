
import React, { Component } from 'react';


class NavBar extends Component {


  constructor(props){
    super(props)
    this.state = {
      fixed: false
    }
  }

componentDidMount() { window.addEventListener('scroll', this.handleScroll) }
componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

handleScroll = () => {
  // console.log(window.scrollY)
  console.log(this.nav.getBoundingClientRect().top)
  if (this.nav.getBoundingClientRect().top < 0) {
    this.setState({
      fixed: true
    })
  }
}

    render() {
      const navStyle = {
          position: this.state.fixed ? "fixed" : "static",
          top: "0px"
      }
        return (
        <nav className="navbar navbar-inverse" style={navStyle} ref={(nav) => { this.nav = nav;}}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img id="hslogo" src="https://static1.squarespace.com/static/54202fb7e4b0a990b3411355/58c1fa75440243d83e886983/58c1fafd6a4963a1d42d4fe3/1489121807689/highsnobiety-logo-cf686926144b96237a59bfb15ac935a565085c73b2df990f7a1287f793aac22d.png" /></a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#" id="astylesH">HOME</a></li>
                <li><a href="#" id="astylesS">STYLE</a></li>
                <li><a href="#" id="astylesN">SNEAKERS</a></li>
                <li><a href="#" id="astylesL">LIFESTYLE</a></li>
                <li><input type="text" id="yourtexthere" placeholder="SEARCH HERE" /></li>
                <li><a href="#"><span className="glyphicon glyphicon-search"></span></a></li>

              </ul>
              <ul className="nav navbar-nav navbar-right">

              </ul>
            </div>
          </div>
        </nav>


        );
    };
};


export default NavBar;
