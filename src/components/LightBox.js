import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/images/close.svg';
import leftArrow from '../assets/images/left-arrow.svg';
import rightArrow from '../assets/images/right-arrow.svg';
import ReactSwipeEvents from 'react-swipe-events';
import '../styles/LightBox.css';

const LightBox = props => {
  const shouldShow = props.show ? 'show' : '';
  const imageUrl = props.image ? props.image.url : '';
  const caption = props.image ? props.image.caption : '';

  return (
    <ReactSwipeEvents onSwipedLeft={props.goLeft} onSwipedRight={props.goRight}>
      <div className={`LightBox ${shouldShow}`}>
        <img className="close" src={closeIcon} alt="close-icon" onClick={props.handleClose} />
        <div className="image-row">
          <img className="left-arrow" src={leftArrow} alt="left-navigation-arrow" onClick={props.goLeft} />
          <img className="detailed-image" src={imageUrl} alt='close-up' />
          <img className="right-arrow" src={rightArrow} alt="right-navigation-arrow" onClick={props.goRight} />
        </div>
        <span>{caption}</span>
      </div >
    </ReactSwipeEvents >
  );
}

LightBox.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  image: PropTypes.object,
  goLeft: PropTypes.func,
  goRight: PropTypes.func
};

export default LightBox;
