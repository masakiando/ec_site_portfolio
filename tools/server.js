import express from 'express';
import webpack from 'webpack';
import open from 'open';
import config from '../webpack.config.js';
/* eslint-disable no-console */
import colors from 'colors';
console.log('starting srcServer...'.white);

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: false, publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
