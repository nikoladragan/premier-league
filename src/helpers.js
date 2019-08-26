export const getPoints = (i1, i2) => {
	const points = 7 - Math.abs(i1 - i2);
	return Math.max(points, 0);
};

const interpolateColor = (color1, color2, factor = 0.5) => {
	const result = color1.slice();
	for (let i = 0; i < 3; i++) {
		result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
	}
	return result;
};

export const interpolateColors = (color1, color2, steps) => {
	const stepFactor = 1 / (steps - 1),
		interpolatedColorArray = [];

	color1 = color1.match(/\d+/g).map(Number);
	color2 = color2.match(/\d+/g).map(Number);

	for (let i = 0; i < steps; i++) {
		interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
	}

	return interpolatedColorArray;
};