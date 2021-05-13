const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    mode : 'development',
    module : {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(),
    ]

}