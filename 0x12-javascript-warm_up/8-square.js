#!/usr/bin/node

const size = Math.floor(Number(process.argv[2]));
if (size === NaN) {
   console.log('Missing size');
}
else{
    for (let i = 0; i < size; i++) {
        let row = ' ';
        for (let j = 0; j < size; j++) {
            row += 'X';
            console.log(row);
        }
    }
}