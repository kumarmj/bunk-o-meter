const path = require("path");
module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}