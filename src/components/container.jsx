import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { weeks, players } from '../data';
import Players from './players';
import PickWeek from './pickWeek';
import PlayerTable from './playerTable';
import PickedTable from './pickedTable';


function AppContainer() {
	// console.log('container rerendered');
	const [ playerData, setPlayerData ] = useState(players);
	const [ playerPicks, setPlayerPicks ] = useState([]);
	const [ activeWeek, setActiveWeek ] = useState([]);
	const [ activeWeekId, setActiveWeekId ] = useState(0);

	const [ activePlayer, setActivePlayer ] = useState('');

	useEffect(() => {
		setActivePlayer(playerData[0].name);
	}, [ playerData ]);

	useEffect(() => {
		getPlayerPicks();
	}, [ activePlayer ]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		setActiveWeek(weeks[activeWeekId]);
	}, [ activeWeekId ]);

	useEffect(() => {
		const newPlayerData = JSON.parse(JSON.stringify(playerData));

		newPlayerData.forEach(d => {
			d.points = 0;
			return d.picks.forEach((p, index1) => {
				activeWeek.forEach((t, index2) => {
					if (p === t) {
						const x = getPoints(index1, index2);
						d.points += x;
					}
				});
			});
		});


		setPlayerData(newPlayerData.sort((a, b) => b.points - a.points));
	}, [ activeWeek ]); // eslint-disable-line react-hooks/exhaustive-deps


	const getPlayerPicks = () => {
		const picks = playerData.filter(p => p.name === activePlayer);

		if (picks.length) {
			setPlayerPicks(picks[0].picks);
		}
	};

	const getPoints = (i1, i2) => {
		const points = 7 - Math.abs(i1 - i2);
		return Math.max(points, 0);
	};

	const getPreviousWeek = () => {
		const newPlayerData = JSON.parse(JSON.stringify(playerData));
		const lastWeek = weeks[activeWeekId - 1];

		if (!lastWeek) return false;

		newPlayerData.forEach(d => {
			d.points = 0;
			return d.picks.forEach((p, index1) => {
				lastWeek.forEach((t, index2) => {
					if (p === t) {
						const x = getPoints(index1, index2);
						d.points += x;
					}
				});
			});
		});

		return newPlayerData.sort((a, b) => b.points - a.points);
	};

	return (
		<Container>
			<PickWeek activeWeekId={activeWeekId} setActiveWeekId={setActiveWeekId} />
			<h2>Week {activeWeekId + 1}</h2>
			<Grid container spacing={3}>
				<Grid item xs={5}>
					<Players playerData={playerData} setActivePlayer={setActivePlayer} activePlayer={activePlayer} lastWeek={getPreviousWeek()} />
				</Grid>
				{
					playerPicks.length ?
						<>
							<Grid item xs={3}>
								<PlayerTable playerPicks={playerPicks} />
							</Grid>
							<Grid>
								x
							</Grid>
							<Grid item xs={3}>
								<PickedTable activeWeek={activeWeek} />
							</Grid>
						</>
						: null
				}
			</Grid >
		</Container >
	);
}

export default React.memo(AppContainer);
