import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/Video.js';
import AddVideo from './components/AddVideo/AddVideo.js';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';
import ForgotPassword from "./components/forgot/ForgotPassword.js"
import SlideTimeline from './components/timeline/SlideTimeline.js';


class App extends Component {

      constructor(props){
      super(props);
      this.state = {
        data:
        [
    {
        "type": "video",
        "iconUrl": "https://png.icons8.com/ios/50/000000/play-button-circled-filled.png",
        "title": "The Rabbit and the turle",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "description": "",
        "content":
        {
            "src": "https://pixabay.com/en/background-image-colorful-art-967820/"
        }
    },
    {
        "type": "image",
        "iconUrl": "https://png.icons8.com/ios-glyphs/50/000000/picture.png",
        "title": "Startup Trip",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content":
        {
            "src": ["https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/"]
        }
    },
    {
        "type": "code",
        "iconUrl": "https://png.icons8.com/ios/50/000000/code-file-filled.png",
        "title": "The Rabbit and the turle",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content":
        {
            "codeImage": "https://pixabay.com/en/background-image-colorful-art-967820/",
            "authorImage": "https://pixabay.com/en/background-image-colorful-art-967820/",
            "authorName": "Aemal Surname"
        }
    }
      ],
      youtubeCode: ['HCnGKF_Ro2A']
    }
  }

endingHandler = () => {
  console.log("The video has ended");
}
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Video youtubeCode={this.state.youtubeCode} endingHandler={() => {this.endingHandler()}} />
          {this.state.data.map((item,value) => <ModulesSideBar key={value} data={item} /> )}
        <ForgotPassword />
        <Login  />
        <AddVideo />
        <SlideTimeline />
      </div>
    );
  }
}

export default App;
