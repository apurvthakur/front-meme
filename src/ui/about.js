import React from 'react'
import Navbar from './navbar';
import './about.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

export default function about() {
    return (
        <div class="grey lighten-3 mainabout">
            <Navbar />
            <br></br><br></br><br></br>
            <div class="row">
            <div class="col s12 m4 l4 offset-l1">
              <div class="card">
                <div class="card-image">
                  <img src="https://i.pinimg.com/originals/b6/a7/9c/b6a79c6b19543745b488932553656c50.jpg" style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} />
                </div>
                <div class="card-action" style={{marginTop:'-5%'}}>
                  <a href="https://www.linkedin.com/in/apoorvasingh3010/" target="_blank">Find me here!</a>
                </div>
              </div>
            </div>
            <div class="col s12 m8 l5 offset-l1">
                <h1><b>Apoorva <span class="indigo-text">Singh</span></b></h1><br></br>
                <p style={{fontWeight:'lighter', fontSize:'18px'}}>I am an undergraduate student of Computer Engineering <br></br>who is a sucker for dogs and chai. I am passionate about
                breaking  <br></br>traditional norms and encouraging animal adoption to the fullest.<br></br> It took me about 2 hours to think of interesting facts
                about myself but I have given up. Instead, I would add the links to a few of my favourite stuff online. <br></br><br></br><strong>Make sure you <span class="indigo-text">have a look</span></strong>!
                </p><br></br><br></br>
                <a href="https://www.youtube.com/c/TuckerBudzyn" target="_blank"><h5 class="red" style={{color:'white'}}>🐶🐕🐩🐕‍🦺🦮🐾</h5></a><br></br>
                <a href="https://www.youtube.com/channel/UCy436qLXlyLqddExVC64auw" target="_blank"><h5 class="yellow" style={{color:'white'}}> 🎸🎷🥁📯🎧🎹</h5></a><br></br>
                <a href="https://linuxize.com/post/chmod-command-in-linux/" target="_blank"><h5 class="blue" style={{color:'white'}}> 💻🖱🔌🔋💾🖨</h5></a><br></br>
            </div>
          </div>

        </div>
    )
}
