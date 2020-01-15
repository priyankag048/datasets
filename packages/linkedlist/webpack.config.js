const path = require('path');
const webpackConfig = require('../../webpack.config');

module.exports = {
	...webpackConfig,
	entry: './src/LinkedList.ts',
	output: {
		filename: 'LinkedList.min.js',
		path: path.resolve(__dirname, 'dist')
	}
};
