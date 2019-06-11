import Styled from 'styled-components'

export default (components, style) => Styled(components)`
    ${() => (style ? style : '')}
`
