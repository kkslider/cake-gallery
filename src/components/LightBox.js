import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LightBox.css';

const LightBox = props => {
  const shouldShow = props.show ? 'show' : '';

  return (
    <div className={`LightBox ${shouldShow}`}>
      {/* <img src={props.image.url} /> */}
    </div >
  );
}

LightBox.propTypes = {
  show: PropTypes.bool,
  image: PropTypes.object
};

export default LightBox;
