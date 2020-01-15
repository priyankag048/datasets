const path = require('path');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{ 
				test : /\.ts$/,
				use : 'ts-loader',
				exclude : /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts'],
	},
};
