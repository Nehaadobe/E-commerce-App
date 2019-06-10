import { css } from 'styled-components'
import themeColor from 'Style/theme/colors'

export default css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  margin: 1.125rem;
  background-color: ${themeColor.lightBlue};
  .size__filter select {
    width: 100%;
    font-size: 0.875rem;
  }
`
