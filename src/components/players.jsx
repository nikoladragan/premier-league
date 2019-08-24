import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Arrow from './arrow';

const useStyles = makeStyles(theme => {
	return {
		activeRow: {
			backgroundColor: theme.palette.grey[200],
			boxShadow: theme.shadows[2]
		},
	};
});


const Players = ({ playerData, setActivePlayer, activePlayer, lastWeek }) => {
	// console.log('players rerendered');

	const classes = useStyles();



	return (
		<Table size="small">
			<TableHead>
				<TableRow>
					<TableCell align="right">#</TableCell>
					<TableCell>Name</TableCell>
					<TableCell align="right">Points</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{playerData.map((d, index) =>
					<TableRow key={d.name} onClick={() => setActivePlayer(d.name)} className={d.name === activePlayer ? classes.activeRow : null}>
						<TableCell align="right">{index + 1}</TableCell>
						<TableCell>{d.name} <Arrow lastWeek={lastWeek} name={d.name} index={index} /></TableCell>
						<TableCell align="right">{d.points}</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default React.memo(Players);