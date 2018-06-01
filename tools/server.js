import express from 'express';
import webpack from 'webpack';
import open from 'open';
let path = require('path');
import colors from 'colors';
import config from '../webpack.config.js';
/* eslint-disable no-console */
console.log('starting srcServer...'.white);

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
