import React, { useEffect, useState } from 'react';
import { getPoints, interpolateColors } from '../helpers';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const getColors = (index) => {
	const colorsArray = interpolateColors('rgb(244, 67, 54)', 'rgb(56, 142, 60)', 8);

	const formattedArray = colorsArray.map(c => {
		return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
	});

	// const formattedArray = [ 'red', 'orange', 'yellow', 'blue', 'olive', 'purple', 'lightblue', 'green' ];

	return formattedArray[index];
};

const Points = ({ team1, team2 }) => {
	const [ points, setPoints ] = useState([]);

	useEffect(() => {
		const tempPoints = [];
		team1.forEach((t1, index1) => {
			team2.forEach((t2, index2) => {
				if (t1 === t2) {
					const x = getPoints(index1, index2);
					tempPoints.push(x);
					// console.log(`za ${t1} si dobio ${x} bodova, jer je ${t2} bio na ${index2 + 1} mestu`);
				}
			});
		});

		console.log(getColors(2));

		setPoints(tempPoints);
	}, [ team1, team2 ]);

	return (
		<div style={{ margin: '0 -24px' }}>
			<Table size="small" >
				<TableHead>
					<TableRow>
						<TableCell align="center">Points</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{points.map((p, index) =>
						<TableRow key={`points-${index}`}>
							<TableCell align="center">
								<strong style={{ minHeight: 24, lineHeight: '24px', color: getColors(p) }}>{p}</strong>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default Points;