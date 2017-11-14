import React, { Component } from 'react';
import TCont1 from './TCont1.jsx';
import TCont2 from './TCont2.jsx';
import TCont3 from './TCont3.jsx';

class ThreeContainer extends Component {


    render() {
        return [

            <div>
                <div className="row">
                    <div className="threecontent">
                        <TCont1 />
                        <TCont2 />
                        <TCont3 />
                        <br />
                    </div>
                </div>
                <br />

            </div>

        ];
    };
};


export default ThreeContainer;
