module.exports = {

    mode : 'development',
    module : {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',

                    }
                ]
            }
        ]
    }

}