#!/usr/bin/env node
const getTitleAtUrl = require('get-title-at-url');
const customersList = require('./customer.json'); 

const customers = customersList;
const redColor = '\x1b[31m';
const greenColor = '\x1b[32m';
const blackColor = '\x1b[0m';

customers.forEach(customer => {
    const URL = customer.trim();
    getTitleAtUrl(`${URL}`, (title)=> {
        const status = `${title === undefined ? `${redColor} DOWN` : `${greenColor} UP  `} ${blackColor}`;
        const t = title === undefined ? '' : title;
        console.log(`[${status}] ${URL} | ${t.trim()}`);
    });
});