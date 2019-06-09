import { css } from 'styled-components';
import ThemeColors from '../../../style/theme/colors';

export default css`
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 18px;
    background-color: ${ThemeColors.lightBlue};
    .size-filter select {
        width: 170px;
        font-size: 0.875em;
    }
`