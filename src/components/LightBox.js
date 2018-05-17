import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/images/close.svg';
import leftArrow from '../assets/images/left-arrow.svg';
import rightArrow from '../assets/images/right-arrow.svg';
import '../styles/LightBox.css';

const LightBox = props => {
  const shouldShow = props.show ? 'show' : '';
  const imageUrl = props.image ? props.image.url : '';
  const caption = props.image ? props.image.caption : '';

  return (
    <div className={`LightBox ${shouldShow}`}>
      <img className="close" src={closeIcon} alt="close-icon" onClick={props.handleClose} />
      <div className="image-row">
        <img className="left-arrow" src={leftArrow} alt="left-navigation-arrow" />
        <img className="detailed-image" src={imageUrl} alt='detailed-image' />
        <img className="right-arrow" src={rightArrow} alt="right-navigation-arrow" />
      </div>
      <span>{caption}</span>
    </div >
  );
}

LightBox.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  image: PropTypes.object
};

export default LightBox;
