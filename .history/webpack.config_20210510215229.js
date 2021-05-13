module.exports = {

    mode : 'development',
    module : {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        
                    }
                ]
            }
        ]
    }

}