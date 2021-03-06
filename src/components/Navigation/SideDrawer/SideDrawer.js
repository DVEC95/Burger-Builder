import React, { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {
	let attachedClasses = [classes.sideDrawer, classes.close];
	if (props.open) {
		attachedClasses = [classes.sideDrawer, classes.open];
	}
	return (
		<Fragment>
			<Backdrop show={ props.open } clicked={ props.closed }/>
			<div className={ attachedClasses.join(' ') }>
				<div className={ classes.logo }>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
	);
};

export default sideDrawer;