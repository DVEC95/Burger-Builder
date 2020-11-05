import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

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
			<p><strong>Total Price: £{ props.price.toFixed(2) }</strong></p>
			<p>Checkout?</p>
			<Button btnType="danger" clicked={ props.purchaseCancelled } >Cancel</Button>
			<Button btnType="success" clicked={ props.purchaseContinued }>Continue</Button>
		</Fragment>
	);
};

export default orderSummary;