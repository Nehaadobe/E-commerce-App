import React from 'react'
import globalStyle from 'Global/globalStyle'
import propTypes from 'prop-types'

/**
 * @desc Label component is used to display Labels. This component is connected with Styled component
 *  to add and modify inline styles.
 *  @tagLabel : This prop expect a tagLabel will appear as label Text.
 */

const Tag = props => {
  const { tagLabel, className } = props
  return <div className={className}>{tagLabel}</div>
}

Tag.propTypes = {
  tagLabel: propTypes.string.isRequired,
  className: propTypes.string
}

export default globalStyle(Tag)
