import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		icon: {
			verticalAlign: 'middle',
		},
		colorRed: {
			color: theme.palette.error.main
		},
		colorGreen: {
			color: '#388e3c'
		}
	};
});

const Arrow = ({ lastWeek, name, index }) => {
	const classes = useStyles();

	console.log(ArrowDropUpIcon, SvgIcon);
	// {comparePlayers(d.name, index)}

	const comparePlayers = (name, index) => {
		let place = 0;

		if (!lastWeek) return null;

		lastWeek.forEach((team, i) => {
			if (team.name === name) {
				place = i - index;
			}
		});

		if (place > 0) {
			return <span className={classes.colorGreen}><ArrowDropUpIcon className={classes.icon} />{place}</span>;
		} else if (place < 0) {
			return <span className={classes.colorRed}><ArrowDropDownIcon className={classes.icon} />{place}</span>;
		}
		return null;

	};

	return (
		<span>
			{comparePlayers(name, index)}
		</span>
	);
};

export default Arrow;