import React from 'react'
import globalStyle from 'Global/globalStyle'
import propTypes from 'prop-types'

/**
 * @desc Image component is used to display Images. This component is connected with Styled component
 *  to add and modify inline styles.
 *  @Src : Src is mandatory props to display images.
 */

const Image = ({ className, src, placeholderSrc, alt, ref, ...other }) => (
  <img
    className={className}
    src={src}
    alt={alt}
    ref={ref}
    {...other}
    onError={event => {
      event.target.src = placeholderSrc
    }} />
)

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string,
  ref: propTypes.string,
  placeholderSrc: propTypes.string,
  className: propTypes.string
}

export default globalStyle(Image)
