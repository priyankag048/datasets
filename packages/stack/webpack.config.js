const path = require('path');
const webpackConfig = require('../../webpack.config');

module.exports = {
	...webpackConfig,
	entry: './src/Stack.ts',
	output: {
		filename: 'Stack.min.js',
		path: path.resolve(__dirname, 'dist')
	}
};
