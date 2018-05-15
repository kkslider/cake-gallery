import React from 'react';
import PropTypes from 'prop-types';

const PhotoGallery = props => {
  const imageContainers = props.images.map(image => {
    return (
      <div key={image.id}>
        <img src={image.thumbnail_url} />
      </div>
    );
  });

  return (
    <div>{imageContainers}</div>
  );
}

PhotoGallery.propTypes = {
  images: PropTypes.array
};

export default PhotoGallery;
