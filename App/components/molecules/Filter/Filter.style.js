import { css } from 'styled-components';
import ThemeColors from '../../../style/theme/colors';

export default css`
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    margin: 25px 18px 10px 16px;
    background-color: ${ThemeColors.lightBlue};
    .size-filter select {
        width: 170px;
        font-size: 14px;
    }
`