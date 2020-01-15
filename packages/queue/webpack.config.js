const path = require('path');
const webpackConfig = require('../../webpack.config');

module.exports = {
	...webpackConfig,
	entry: './src/Queue.ts',
	output: {
		filename: 'Queue.min.js',
		path: path.resolve(__dirname, 'dist')
	}
};
