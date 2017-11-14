import React, { Component } from 'react';


class Footer extends Component {


    render() {
        return [

<div>
     <footer className="container-fluid text-center">

                <div id="footwrapper">
                  <div className="one">
                    <img id="logobottom" src="http://www.paperfactoryhotel.com/wp-content/uploads/2016/05/press-highsnobiety.png" />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <p className="pline"></p>

                    <p> ABOUT HIGHSNOBIETY</p>

                    <p>Highsnobiety is an online publication covering forthcoming trends and news in fashion, art, music, and culture, all
          on one platform.</p>

          <p>Highsnobiety has steadily built a strong brand in the online fashion and lifestyle world. Today the blog and print
            magazine sit among the most visited global sources for inspiration in the areas of fashion, sneakers, music,
            art and lifestyle culture. Innovation, progression and always being several steps ahead of the curve are just
            some of the core values of Highsnobiety.</p>
                      <br /><br />
                      <p>INTELLECTUAL PROPERTY POLICY</p>

            <p>If you believe that any content of this Website violates your copyright, please see our Copyright Policy for
              instructions on sending us a notice of copyright infringement.
            </p>
      </div>

                      <div className="two">
                        <br />
                        <p className="pline2"></p>

                        <p>SUBSCRIBE TO OUR NEWSLETTER:</p><br />


                        <form>
                          <div className="input-group col-xs-9">
                            <input type="email" className="form-control " required="required" placeholder="ENTER EMAIL FOR DAILY NEWS" />
                              <span className="input-group-btn ">
                                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-chevron-right"></i></button>
                              </span>
          </div>
        </form>


      </div>

                        <div id="footwrapper">
                          <div className="three">


                            <p><span id="titeltext">© TITEL MEDIA GMBH 2017 &nbsp;&nbsp; </span>
                              <a href="#">ABOUT &nbsp;&nbsp; </a>
                              <a href="#">JOBS &nbsp;&nbsp; </a>
                              <a href="#">CONTACT &nbsp;&nbsp; </a>
                              <a href="#"> IMPRINT
             </a>
                            </p>

                          </div>

                          <div className="four">
                            <div id="followus">
                              <p>FOLLOW US &nbsp;&nbsp;</p>
                            </div>
                            <div id="allicons">
                              <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a> &nbsp;&nbsp;
            <a href="#"> <i className="fa fa-instagram" aria-hidden="true"></i></a> &nbsp;&nbsp;
            <a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i></a> &nbsp;&nbsp;
            <a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a> &nbsp;&nbsp;
            <a href="#"><i className="fa fa-snapchat-ghost"></i></a>
                            </div>


                          </div>


                        </div>
                      </div>

  </footer>
</div>


                ];
    };
};


export default Footer;
