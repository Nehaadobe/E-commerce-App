import React from 'react';
import globalStyle  from '../../../global/globalStyle';
import propTypes from 'prop-types';

const Image = ({ className, src, placeholderSrc, alt, ref, ...other }) => (
    <img
      className={className}
      src={src}
      alt={alt}
      ref={ref}
      {...other}
      onError={event => {
        event.target.src = placeholderSrc;
      }}
    />
  );
  
  Image.propTypes = {
    src: propTypes.string.isRequired,
    alt: propTypes.string,
    placeholderSrc: propTypes.string,
    className: propTypes.string
  };
  
  export default globalStyle(Image);