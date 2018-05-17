import React, { Component } from 'react';
import images from './assets/images.js';
import PhotoGallery from './components/PhotoGallery';

class App extends Component {
  render() {
    return (
      <div>
        <PhotoGallery images={images} />
      </div>
    );
  }
}

export default App;
