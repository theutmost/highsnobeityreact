import React, { Component } from 'react';


class ColorsContainer extends Component {


    render() {
        return [

            <div>
                <div id="lastcontainer">


                    <div>
                        <ul id="colorednav-cent">
                            <li className="active"><a href="#" id="astylesH">HOME</a></li>
                            <li><a href="#" id="astylesS">STYLE</a></li>
                            <li><a href="#" id="astylesN">SNEAKERS</a></li>
                            <li><a href="#" id="astylesL">LIFESTYLE</a></li>
                        </ul>
                    </div>


                    <div id="colored-wrapper">
                        <div className="colored-one">
                            <p className="textbig">Here’s 8 of Our Favorite Nike Kicks for Fall & Winter</p><br />
                            <span className="textcatag"> <p>SNEAKERS</p></span>
                        </div>

                        <div className="colored-two">
                            
                            
                            <p className="textbig">10 of the Most Iconic Athlete Protests Against Racism & Social Inequality</p><br />
                            <span className="textcatag"> <p>SNEAKERS</p></span>
                        </div>


                        <div className="colored-three">
                            
                            <p className="textbig">10 of the Most Iconic Athlete Protests Against Racism & Social Inequality</p><br />
                            <span className="textcatag"><p> SNEAKERS</p></span>
                        </div>

                        <div className="colored-four">
                            <p className="textbig">Here’s 8 of Our Favorite Nike Kicks for Fall & Winter</p><br />
                            <span className="textcatag"><p> SNEAKERS</p></span>
                        </div>
                    </div>

                </div>
            </div>


                        ];
    };
};

export default ColorsContainer;

