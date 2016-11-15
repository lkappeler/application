(function() {
    'use strict';


    const envr              = require('envr');
    const Application       = require('./src/Application');


    // start it
    new Application(envr.config(__dirname));
})();
