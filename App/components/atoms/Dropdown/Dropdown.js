import React, { PureComponent } from 'react'
import globalStyle from 'Global/globalStyle'
import propTypes from 'prop-types'

/**
 * @desc Dropdown component is used to display form element of Select box options. This component is connected with Styled component
 *  to add and modify inline styles.
 *  @options : options is mandatory props object which expect an array of object
 *  example : options = [{label:"size-1", value: "1"}]
 */

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
  className: propTypes.string,
  selected: propTypes.string,
  onSelect: propTypes.func
}
export default globalStyle(Dropdown)
