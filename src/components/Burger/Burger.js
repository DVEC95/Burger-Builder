import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
	const ingredients = Object.keys(props.ingredients)
											.map(key => {
												return [...Array(props.ingredients[key])].map((_, i) => {
													return <BurgerIngredient key={key + i} type={key} />
												});
											});										
	return (
		<div className={classes.burger}>
			<BurgerIngredient type="bread-top" />
			{ ingredients }
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;