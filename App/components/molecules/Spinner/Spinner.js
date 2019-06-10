import React from 'react'
import { RingLoader } from 'react-spinners'
import globalStyle from 'Global/globalStyle'
import SpinnerStyle from './Spinner.style'

const Spinner = props => {
  const { isLoading } = props
  return (
    <SpinnerStyle>
      <RingLoader size={50} color="#123abc" loading={isLoading} />
    </SpinnerStyle>
  )
}
export default Spinner
