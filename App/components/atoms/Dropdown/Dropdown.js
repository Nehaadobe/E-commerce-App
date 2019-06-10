import React, { PureComponent } from 'react'
import globalStyle from 'Global/globalStyle'
import propTypes from 'prop-types'

class Dropdown extends PureComponent {
  static defaultProps = {
    className: '',
    onSelect: () => {}
  }

  state = {
    value: this.props.selected
  }

  onChange(e) {
    const { value } = e.target
    this.props.onSelect(value)
    this.setState({ value })
    return { value }
  }

  render() {
    const { options, className } = this.props
    const { value } = this.state
    return (
      <div className={`form-group select-box ${className}`}>
        <label className="sr-only" htmlFor="select-box">
          Select
        </label>
        <select
          id="select-box"
          value={`${value}`}
          onChange={e => this.onChange(e)}
          className="form-control">
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
}
Dropdown.propTypes = {
  options: propTypes.instanceOf(Array).isRequired,
  className: propTypes.string
}
export default globalStyle(Dropdown)
