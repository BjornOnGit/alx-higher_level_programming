#!/usr/bin/node
const numr = Math.floor(Number(process.argv[2]));

console.log(isNaN(numr) ? 'Not a number' : `My number: ${numr}`);