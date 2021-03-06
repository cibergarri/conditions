'use strict';
const src = require('../src'),
    path = require('path');

(function doLoad() {
    debugger;
    src([path.join(__dirname, 'load-example/main.config'), 'main.development.config'], { })
        .then(config => {
            debugger;
            console.log(JSON.stringify(config, null, 4));
        })
        .catch(function (err) {
            console.error(err);
        });
}());
