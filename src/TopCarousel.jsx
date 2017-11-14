import React, { Component } from 'react';


class TopCarousel extends Component {


    render() {
        return (
               

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/*<!-- Indicators -->*/}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="https://assets.adventivecdn.com/357/ab3a8a25-ef8d-42fc-a409-0131ecda4267" alt="Image" />
            </div>

            <div className="item">
              <img src="https://tpc.googlesyndication.com/simgad/8003340074677083885" alt="Image" />
            </div>
          </div>

          {/*<!-- Left and right controls -->*/}
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </a>
        </div>

        );
    };
};


        export default TopCarousel;
