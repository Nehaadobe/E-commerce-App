import React from 'react'
import globalStyle from 'Global/globalStyle'
import propTypes from 'prop-types'

const Tag = props => {
  const { tagLabel, className } = props
  return <div className={className}>{tagLabel}</div>
}

Tag.propTypes = {
  tagLabel: propTypes.string.isRequired,
  className: propTypes.string
}

export default globalStyle(Tag)
