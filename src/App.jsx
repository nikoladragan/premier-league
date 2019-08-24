import React, { useEffect } from 'react';
import './App.scss';
import AppContainer from './components/container';
import { players, teams } from './data';


function App() {

	useEffect(() => {
		const picks = players.map(p => p.picks);

		picks.forEach(p1 => {
			p1.forEach((p2, index) => {
				teams[p2] += 21 - index;
			});
		});

		const values = Object.values(teams);
		const keys = Object.keys(teams);

		const data = [];

		values.forEach((x, index) => {
			data.push({
				team: keys[index],
				points: values[index]
			});
		});

		// const sorted = data.sort((a, b) => b.points - a.points);

		// console.log(sorted);
	}, []);

	return (
		<AppContainer />
	);
}

export default App;
