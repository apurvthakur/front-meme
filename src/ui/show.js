/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './show.css';
import qs from 'qs';
import Navbar from './navbar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default class show extends Component{

    constructor(props){
        super(props)

        this.state = {
            data: [],
            caption: '',
            url: '',
            display: 'none',
            id: '',
            upid:''
        }
    };

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    handleclick = (id)=> {
        this.setState({
            display: 'block',
            id: id
        });
        console.log(id);
    }

    closeModal = () => {
        this.setState({
            display: 'none'
        })
    }

    updateFunction=(e)=>{
        e.preventDefault();

        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",    
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        };
        // const dataupdate = qs.stringify({
        //     caption: (this.state.caption),
        //     url:this.state.url
        // });
        let dataUpdate= {};
        if(this.state.caption!=='')
            dataUpdate.caption = this.state.caption;
        if(this.state.url!=='')
            dataUpdate.url = this.state.url;
        dataUpdate = qs.stringify(dataUpdate);
        
        console.log(e);
        const requrl = "https://meme-app-stream.herokuapp.com/memes/"+this.state.data[this.state.id].id;
        console.log(requrl);
        axios.patch(requrl, dataUpdate, {headers:headers})
        .then(res => {
            console.log(res); 
            this.props.history.push("/memes");
        })
        .catch((err) => {
            console.log("ERROR: ====", err);
            alert(err);
        });
        // this.setState({
        //     display: 'none'
        // });

    }
    
    componentDidMount(){
        axios.get("https://meme-app-stream.herokuapp.com/memes")
            .then(res => {
                console.log(res.data);
                this.setState({
                    data: res.data.reverse()
                  })
            });
        }

        
        
    render(){
    const cardrender = (
    this.state.data.map((pos,index) => {
        return(
            <div key={index} style={{width: '30%', minWidth:'fit-content', display:'inline-block'}}>
                <br></br>
                <div class="post">
                    <h6 style={{borderBottom:'1px solid #eeeeee', paddingBottom:'1.5%'}}><b>{pos.name}</b>
                    <a onClick= {() => {this.handleclick(index)}}><span style={{fontSize:'23px', textDecoration:'none', color:'black', cursor:'pointer'}} class="material-icons right grey-text">more_vert</span></a></h6>
                    <p class="center" style={{color:'#bdbdbd', fontSize:'13px'}}>Last updated on: {pos.updatedAt.slice(0,10)} at {pos.updatedAt.slice(11,19)}</p>
                    <div class="row ">
                        <div class="col s12 m12 l6" style={{width:"100%", marginLeft:"auto", marginRight:"auto", overflow:"hidden"}}>
                            <div class="center">
                                <div class="" >
                                    <img src={pos.url} width="100%" height="200px"/>
                                </div>
                                <div class="">
                                    <p>{pos.caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <br></br>
        </div>

        )}))
    
    return (
        <div class="mainshow grey center lighten-3">
        <div id="modal1" class="custom_modal" style={{marginTop:'10%', display: this.state.display, borderRadius:'20px', border: '5px solid indigo'}}>
        <span className='close_icon' onClick={() => {this.closeModal()}} style={{marginRight:'5px'}}>Close</span>
            <div class="modal-content" style={{margin:'10px'}}>
                <h4>Update this Post</h4>
                {console.log(this.state.data.id)}
                {console.log(this.state.data)}
                <p>Meme Owner: {this.state.id!== '' ?this.state.data[(this.state.id)].name:null}</p>
                
                <form onSubmit= {this.updateFunction}>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="caption" type="text" name="caption" class="validate"  onChange={this.changeHandler}/>
                        <label for="caption">Caption your submission</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12"> 
                            <input id="memeurl" type="text" name="url" class="validate"   onChange={this.changeHandler}/>
                        <label for="memeurl">Meme URL</label>
                        </div>
                    </div>
                    <button class="indigo" type="submit"><b>Submit my meme</b></button>
                </form>
            </div>
        </div>

        <Navbar />
        <br></br>
        <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_azuifv5c.json"  background="transparent"  speed="1"  style={{width: '1580px', height: '100px'}}   autoplay></lottie-player><br></br><br></br><br></br>
        
            <div class="main center white container">
            <div class="col s12 l4 m6">
                {
                    cardrender
                }
            </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
    }
}
