import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoGallery.scss';

const ThumbnailContainer = props => {
  const image = props.image;

  return (
    <div>
      <img src={image.thumbnail_url} />
    </div>
  );
}

ThumbnailContainer.propTypes = {
  image: PropTypes.object
};

export default ThumbnailContainer;
