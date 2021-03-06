const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv)
        }
    }),
    new HtmlWebpackPlugin({
        title: 'Typescript Webpack Starter',
        template: '!!ejs-loader!src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            tslint: {
                emitErrors: true,
                failOnHint: true
            }
        }
    }),
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3100/'
    }, {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
    })
];

var config = {
    devtool: isProd ? 'hidden-source-map' : 'source-map',
    context: path.resolve('./src'),
    entry: {
        app: './index.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: [/\/node_modules\//],
                use: ['awesome-typescript-loader', 'source-map-loader']
            },
            !isProd
                ? {
                    test: /\.(js|ts)$/,
                    loader: 'istanbul-instrumenter-loader',
                    exclude: [/\/node_modules\//],
                    query: {
                        esModules: true
                    }
                }
                : null,
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ].filter(Boolean)
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'd3': 'd3/index.js'
        }
    },
    plugins: plugins,
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 3100,
        hot: true
    }
};

module.exports = config;
