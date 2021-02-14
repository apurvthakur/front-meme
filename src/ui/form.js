import React, { Component } from 'react'
import './form.css';
import axios from 'axios';
import Navbar from './navbar';
import qs from 'qs';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 


export default class Form extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            caption: '',
            url: ''
        }
    };

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    submitHandler = (e) => 
    {
        
        e.preventDefault();
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const data = qs.stringify({
            name:this.state.name,
            caption: this.state.caption,
            url:this.state.url
        });
        
        console.log(data);
        axios.post("http://localhost:5000/memes", data, {headers:headers})
        .then(res => {
            console.log(res);
            this.setState({
                name: '',
                caption: '',
                url: ''
              });

            
        })
        .catch((err) => {
            console.log("ERROR: ====", err);
            alert(err);
        });

        
        
    }
    
    render(){
        const {name, caption, url} = this.state
    return (
        <div class="center grey lighten-3 mainform">
        <Navbar />
         <div class="container forms">
            <h4 class="indigo-text"><b>Post a Meme</b></h4>
            <div class="row forms white">
                <form class="col s12" onSubmit= {this.submitHandler}>
                    <div class="row">
                    <div class="input-field col s12">
                        <input id="owner" type="text" name="name" value={name} class="validate" required onChange={this.changeHandler}/>
                        <label for="owner">Meme Owner- Enter your name</label>
                    </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="caption" type="text" name="caption" class="validate" value={caption} required onChange={this.changeHandler}/>
                        <label for="caption">Caption your submission</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="memeurl" type="text" name="url" class="validate" value={url} required onChange={this.changeHandler}/>
                        <label for="memeurl">Meme URL</label>
                        </div>
                    </div>
                    <button class="indigo" type="submit"><b>Submit my meme</b></button>
                </form>
                
            </div>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_K6QVqD.json"  background="transparent"  speed="1"  style={{width:'1085px', height: '150px', marginTop:'2%'}}  loop  autoplay></lottie-player>
            </div>
        </div>
    )
    }
}
