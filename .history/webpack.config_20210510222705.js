const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    mode : 'development',
    module : {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attributes: false,
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]

}