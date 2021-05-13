const HtmlWebPackPlugin = require('html-webpack-'

module.exports = {

    mode : 'development',
    module : {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                },
            }
        ]
    }

}