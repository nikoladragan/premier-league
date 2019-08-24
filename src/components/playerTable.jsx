import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableCell, TableRow, TableBody, Avatar } from '@material-ui/core';
import getTeamBadge from '../getTeamBadge';

const useStyles = makeStyles(() => {
	return {
		avatarLeft: {
			width: 24,
			height: 24,
			display: 'inline-block',
			verticalAlign: 'middle',
			marginLeft: 10,
		},
	};
});


const PlayerTable = ({ playerPicks }) => {
	// console.log('player table rerendrered');

	const classes = useStyles();
	return (
		<Table size="small">
			<TableHead>
				<TableRow>
					<TableCell align="right">Team name</TableCell>
					<TableCell align="right">#</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{playerPicks.map((p, index) =>
					<TableRow key={`${p}-1`}>
						<TableCell align="right">
							{p}
							<Avatar alt={p} src={getTeamBadge(p)} className={classes.avatarLeft} />
						</TableCell>
						<TableCell align="right">{index + 1}</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default React.memo(PlayerTable);