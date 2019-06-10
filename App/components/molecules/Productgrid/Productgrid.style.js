import { css } from "styled-components";
import themeColor from "Style/theme/colors";
import themeFont from "Style/typography";
export default css`
	border: 0.0625rem solid ${themeColor.lightGray};
	list-style: none;
	display: flex;
	flex: 1 1 17.81rem;
	margin-top: -0.0625rem 0 0 -0.0625rem;
	flex-wrap: wrap;
	padding: 1.875rem 0.625rem;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 0;
	
	.sale-tag{
		background-color: ${themeColor.red};
		color: ${themeColor.white};
		padding: 1rem 1.313rem;
		display: inline-block;
	}
	
	.exclusive-tag{
		background-color:${themeColor.green};
		color: ${themeColor.white};
		padding: 1rem 2.188rem;
		display: inline-block;
	}

	.product-description{
		display: flex;
		justify-content: space-between;
		margin-top: 1.875rem;
		align-items: baseline;
	}
	.product-name{
		font-size: ${themeFont.productTitle}
		max-width: 10.63rem;
		font-weight: bold;
	}
	.product-price {
		font-size: ${themeFont.productPrice}
		font-weight: bold;
	}
}`;
