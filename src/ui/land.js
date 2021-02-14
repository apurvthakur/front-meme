import React from 'react';
import './land.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

import Show from './show';

export default function land() {
    return ( 
        <div>
            <Navbar />
            <div class="bg center indigo darken-3">
                <div class="inside center">
                <h5 class="white-text" id="fontt"><br></br>M e m e S t r e a m</h5>
                <h5 class="white-text" id="fontts"><br></br>Meme sharing for the memers</h5><br></br>
                <h6 class=" grow">Grow your network, meet creative people and unleash your creativity!</h6>
                </div>
                <div class="center">
                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_yriifcob.json"  background="transparent"  speed="1"  style={{width: '1515px', height: '330px'}}  loop  autoplay></lottie-player>
                </div><br></br><br></br>
                <Link to="/memes"><a class="waves-effect orange waves-light btn" style={{textTransform:"lowercase", marginTop:""}}><b>Get my memes!</b></a></Link>
                
            </div>
        </div>
    )
}
