import React, { Fragment } from 'react';

const orderSummary = ( props ) => {
	const ingredientSummary = Object.keys(props.ingredients)
														.map(key => {
														return ( 
														<li key={ key }>
															<span style={ {textTransform: 'capitalize'} }>{ key }</span> x { props.ingredients[key] }
														</li>
														)});
	return (
		<Fragment>
			<h3>Your Order</h3>
			<p>A burger with the following ingredients:</p>
			<ul>
				{ ingredientSummary }
			</ul>
			<p>Checkout?</p>
		</Fragment>
	);
};

export default orderSummary;