import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ThumbnailContainer.css';

const ThumbnailContainer = props => {
  const image = props.image;

  return (
    <div className='ThumbnailContainer'>
      <img src={image.thumbnail_url} />
    </div>
  );
}

ThumbnailContainer.propTypes = {
  image: PropTypes.object
};

export default ThumbnailContainer;
