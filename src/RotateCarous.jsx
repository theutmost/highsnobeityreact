import React, { Component } from 'react';
import Mcarousel1 from './Mcarousel1.jsx';
import Mcarousel2 from './Mcarousel2.jsx';
import Mcarousel3 from './Mcarousel3.jsx';

class RotateCarous extends Component {


    render() {
        return [


                <div className="container text-center">


                    <div id="mainContent">

                    <div id="carousel-example-generic" className="carousel slide slide2" data-ride="carousel">
                            {/*<!-- Wrapper for slides -->*/}
                            
                            
                            <div className="carousel-inner" id="mainTextArea">

                                        <div className="item active">
                                                <div className="holder col-sm-8">
                                                    <img className="img-responsive" src="https://static.highsnobiety.com/wp-content/uploads/2017/10/06111750/london-supreme-stone-island-drop-street-style-feature.jpg"
                                                    alt="..." />
                                                </div>
                                                        <div className="col-sm-4" color="green">
                                                            <div className="carousel-caption">
                                                            <h2 className=".carousel-title">SNEAKERS</h2>
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                                                            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                            Nullam dictum felis eu pede mollis pretium.</p>
                                                            </div>
                                                        </div>
                                        </div>
                                        <div className="item ">
                                                <div className="holder col-sm-8">
                                                    <img className="img-responsive" src="https://static.highsnobiety.com/wp-content/uploads/2017/10/04181704/26-best-sneakers-to-buy-this-weekend-00.jpg"
                                                    alt="..." />
                                                </div>
                                                        <div className="col-sm-4">
                                                            <div className="carousel-caption">
                                                            <h2 className=".carousel-title">LIFESTYLE</h2>
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                                                            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                            Nullam dictum felis eu pede mollis pretium. </p>
                                                            </div>
                                                        </div>
                                        </div>



                                        <div className="item">
                                                <div className="holder col-sm-8">
                                                    <img className="img-responsive" src="https://static.highsnobiety.com/wp-content/uploads/2017/10/05154655/jaden-smith-interview-0000.jpg"
                                                    alt="..." />
                                                </div>
                                                        <div className="col-sm-4">
                                                            <div className="carousel-caption">
                                                            <h2 className=".carousel-title">MUSIC</h2>
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                                                            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                            Nullam dictum felis eu pede mollis pretium.
                                                            </p>
                                                            </div>
                                                        </div>
                                        </div>

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
                
                
                        
                            </div>



                        ];
    };
};


export default RotateCarous;



       