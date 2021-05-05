module.exports = {
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    entry: './static/jsx/index.jsx',
    output: {
        path: __dirname + '/static/js',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // babelの設定
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: ['@babel/plugin-syntax-jsx']
                    },
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']  // .jsxも省略可能対象にする
    }
};