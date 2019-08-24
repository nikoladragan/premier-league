import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@material-ui/core';
import getTeamBadge from '../getTeamBadge';

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

const PickedTable = ({ activeWeek }) => {
	// console.log('picked table rerendered');

	const classes = useStyles();
	return (
		<Table size="small" >
			<TableHead>
				<TableRow>
					<TableCell>#</TableCell>
					<TableCell>Team name</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{activeWeek.map((p, index) =>
					<TableRow key={`${p}-2`}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>
							<Avatar alt={p} src={getTeamBadge(p)} className={classes.avatarRight} />
							{p}
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default React.memo(PickedTable);