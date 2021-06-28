export const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
	let randomNum = randomIntegerFromInterval(1, colors.length - 1);
	return colors[randomNum];
}

export default randomColor;
