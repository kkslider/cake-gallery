import React, { Component } from 'react';
import images from './assets/images.js';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoGallery images={images} />
      </div>
    );
  }
}

export default App;
