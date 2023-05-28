const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
    const isDev = env === 'development';

    return {
        mode: isDev ? 'development' : 'production',
        entry: './src/page.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new CleanWebpackPlugin(),
            ...(isDev
                ? []
                : [
                    new BundleAnalyzerPlugin({
                        analyzerMode: 'static',
                        openAnalyzer: false,
                    }),
                ]),
        ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            historyApiFallback: true,
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };
};
