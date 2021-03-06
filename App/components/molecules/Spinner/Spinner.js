import React from 'react'
import { RingLoader } from 'react-spinners'
import SpinnerStyle from './Spinner.style'

/**
 * @desc Spinner is ussing React Spiner https://www.npmjs.com/package/react-spinners
 */

const Spinner = () => {
  return (
    <SpinnerStyle>
      <RingLoader size={50} color="#123abc" />
    </SpinnerStyle>
  )
}
export default Spinner
