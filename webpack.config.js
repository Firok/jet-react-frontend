/**
 * Created by batefirok on 1/9/2018.
 */

let webpack = require("webpack");
let path = require("path");


let DIST_DIR = path.resolve(__dirname, "public");
let SRC_DIR = path.resolve(__dirname, "src");


let config ={
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module:{
        loaders:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query:{
                    presets: ["env","react", "stage-2"]
                }
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            }
        ]
    }
};

module.exports = config;