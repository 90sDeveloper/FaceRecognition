import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import './App.css';
import Particles from 'react-particles-js';


const app = new Clarifai.App({
  apiKey: '19b44b135bc249bca5b3eb980dc4641d'
 });

const particleOptions={
  particles: {
    number:{
      value:100,
      density:{
        enable:true,
        value_area: 500
      }
    }
  }
}


class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:''
    }
  }


  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }


  onButtonSubmit=()=>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bouding_box);
      },
      function(err){
        //there was an error
      }
    );
  }


  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} 
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>      
      </div>
    );
  }
}

export default App;
