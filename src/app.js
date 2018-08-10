'use strict';

import * as Hapi from 'hapi';
import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';
import home from './pages/home';
import name from './pages/name';
import hello from './pages/hello';

const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '/config.json');
let config = null;

if (fs.existsSync(source) && fs.statSync(source).isFile()) {
    const configfile = fs.readFileSync(source, 'utf8');
    config = JSON.parse(configfile.toString());
}

const server = Hapi.server({
    host: config !== null ? config.host : 'localhost',
    port: config !== null ? config.port : 3000
});

const init = async () => {
    await server.register(require('./chat'));
    await server.register(require('inert'));
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: false,
            logEvents: ['response']
        }
    });

    server.route(home);
    server.route(page1);
    server.route(page2);
    server.route(page3);
    server.route(name);
    server.route(hello);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

