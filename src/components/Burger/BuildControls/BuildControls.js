import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = ( props ) => (
	<div className={ classes.buildControls }>
		<p>Price: <strong>£{ props.price.toFixed(2) }</strong></p>
		{ controls.map(control => (
			<BuildControl 
				key={ control.label } 
				label={ control.label }
				added={ () => props.ingredientAdded(control.type) } 
				removed={ () => props.ingredientRemoved(control.type) } 
				disabled={ props.disabled[control.type] } />
		)) }
		<button 
			className={ classes.orderButton }
			disabled={ !props.purchasable } 
			onClick={ props.ordered } >Confirm Order
		</button>
	</div>
);

export default buildControls;