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
        />
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  images: PropTypes.array
};

export default PhotoGallery;
