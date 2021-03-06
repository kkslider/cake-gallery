import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ThumbnailContainer.css';

const ThumbnailContainer = props => {
  const image = props.image;

  return (
    <div className="ThumbnailContainer" onClick={() => props.clickHandler(image)}>
      <img src={image.thumbnail_url} alt="thumbnail" />
    </div>
  );
}

ThumbnailContainer.propTypes = {
  image: PropTypes.object,
  clickHandler: PropTypes.func
};

export default ThumbnailContainer;
