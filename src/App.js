import React, { Component } from 'react';
import images from './assets/images.js';
import PhotoGallery from './components/PhotoGallery';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>cake gallery</h1>
        <PhotoGallery images={images} />
      </div >
    );
  }
}

export default App;
