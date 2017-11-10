'use strict';

const express = require('express');

const app = express();

//Folder being accessed
app.use(express.static('tests'));

//Port and environment variable
app.set('port', (process.env.PORT || 3000));

//Functions being accessed
import {} from './car.js';
import {} from './ferry.js';
// const TestableCarRoutes = require('./car');
// const TestableFerryRoutes = require('./ferry');