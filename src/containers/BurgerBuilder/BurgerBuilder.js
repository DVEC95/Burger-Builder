import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.5,
	meat: 2.5,
	bacon: 1.0
};

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 3,
		purchasable: false,
		purchasing: false
	};

	updatePurchaseState (ingredients) {
		const sum = Object.keys( ingredients )
								.map(key => {
									return ingredients[key];
								})
								.reduce(( sum, element ) => {
									return sum + element;
								}, 0);
		this.setState({ purchasable: sum > 0 });
	};

	addIngredientHandler = (type) => {
		// incrementing ingredient value
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		// updating price
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		// decreasing ingredient value
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		};
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		// updating price
		const priceSubtraction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceSubtraction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState({purchasing: true});
	};

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	};

	purchaseContinueHandler = () => {
		alert('You continue!');
	};

	render () {
		const disabledInfo = { 
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		};
		return (
			<Fragment>
				<Modal show={ this.state.purchasing } modalClosed={ this.purchaseCancelHandler } >
					<OrderSummary 
						ingredients={ this.state.ingredients } 
						purchaseCancelled={ this.purchaseCancelHandler }
						purchaseContinued={ this.purchaseContinueHandler }
						price={ this.state.totalPrice }
					/>
				</Modal>
				<Burger ingredients={ this.state.ingredients }/>
				<BuildControls 
					ingredientAdded={ this.addIngredientHandler } 
					ingredientRemoved={ this.removeIngredientHandler } 
					disabled={ disabledInfo } 
					price={ this.state.totalPrice }
					purchasable={ this.state.purchasable } 
					ordered={ this.purchaseHandler } />
			</Fragment>
		);
	};
};

export default BurgerBuilder;