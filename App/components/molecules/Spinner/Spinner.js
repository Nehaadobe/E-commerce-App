import React from 'react'
import { RingLoader } from 'react-spinners'
import SpinnerStyle from './Spinner.style'

const Spinner = () => {
  return (
    <SpinnerStyle>
      <RingLoader size={50} color="#123abc" />
    </SpinnerStyle>
  )
}
export default Spinner
