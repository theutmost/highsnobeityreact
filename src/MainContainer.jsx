import React, { Component } from 'react';
import ThreeContainer from './ThreeContainer.jsx';
import RotateCarous from './RotateCarous.jsx';
import './App.css';

class MainContainer extends Component {


    render() {
        return [

            <div>

                <div className="container text-center">


                    <div id="mainContent">

                        <div id="carousel-example-generic" className="carousel slide slide2" data-ride="carousel">
                            {/*<!-- Wrapper for slides -->*/}


                            <div className="carousel-inner">
                                <RotateCarous />
                                {/*<!-- Indicators -->*/}
                                <div className="allindicators">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarouse2" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>


                        </div>
                    </div> 
                    
                    <br /> <br /> 
                       <ThreeContainer />

                </div>
             
            </div>


        ];
    };
};


export default MainContainer;



