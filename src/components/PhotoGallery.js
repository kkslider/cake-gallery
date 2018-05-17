import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailContainer from './ThumbnailContainer';
import LightBox from './LightBox';
import '../styles/PhotoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightBox: false,
      selectedImage: null
    };
  }

  showLightBox = (image) => {
    this.setState({
      showLightBox: true,
      selectedImage: image
    });
  }

  hideLightBox = () => {
    this.setState({
      showLightBox: false
    });
  }

  showPreviousImage = () => {
    const currentImageId = this.state.selectedImage.id;

    if (currentImageId > 0) {
      const previousImage = this.props.images[currentImageId - 1];
      this.setState({
        selectedImage: previousImage
      });
    }
  }

  showNextImage = () => {
    const currentImageId = this.state.selectedImage.id;

    if (currentImageId < this.props.images.length - 1) {
      const nextImage = this.props.images[currentImageId + 1];
      this.setState({
        selectedImage: nextImage
      });
    }
  }

  render() {
    return (
      <div className="PhotoGallery" >
        {
          this.props.images.map(image => {
            return <ThumbnailContainer
              key={image.id}
              image={image}
              clickHandler={this.showLightBox.bind(this)}
            />
          })
        }
        <LightBox
          show={this.state.showLightBox}
          handleClose={this.hideLightBox}
          image={this.state.selectedImage}
          goLeft={this.showPreviousImage}
          goRight={this.showNextImage}
        />
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  images: PropTypes.array
};

export default PhotoGallery;
