import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailContainer from './ThumbnailContainer';
import '../styles/PhotoGallery.css';

const PhotoGallery = props => {
  return (
    <div className="PhotoGallery">
      {
        props.images.map(image => {
          return <ThumbnailContainer
            key={image.id}
            image={image}
          />
        })
      }
    </div>
  );
}

PhotoGallery.propTypes = {
  images: PropTypes.array
};

export default PhotoGallery;
