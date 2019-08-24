import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { weeks } from '../data';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => {
	return {
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
			cursor: 'pointer'
		},
		formControl: {
			minWidth: '200px'
		},
		activeRow: {
			backgroundColor: theme.palette.grey[200],
			boxShadow: theme.shadows[2]
		},
		avatarLeft: {
			width: 24,
			height: 24,
			display: 'inline-block',
			verticalAlign: 'middle',
			marginLeft: 10,
		},
		avatarRight: {
			width: 24,
			height: 24,
			display: 'inline-block',
			verticalAlign: 'middle',
			marginRight: 10,
		},
	};
});

const PickWeek = ({ activeWeekId, setActiveWeekId }) => {
	// console.log('pick week rerendered');

	const classes = useStyles();

	return (
		<FormControl className={classes.formControl}>
			<InputLabel htmlFor="week-simple">Week</InputLabel>
			<Select
				value={activeWeekId}
				onChange={(e) => setActiveWeekId(e.target.value)}
				inputProps={{
					name: 'week',
					id: 'week-simple',
				}}
			>
				{weeks.map((x, index) => {
					return (
						<MenuItem key={index} value={index}>Week - {index + 1}</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default React.memo(PickWeek);