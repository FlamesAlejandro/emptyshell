const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    mode : 'development',
    output: {
        
    }
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