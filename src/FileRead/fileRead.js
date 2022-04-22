const fs = require('fs');
const constants = require('../helper/constants');

function readFolder(path) {
    fs.readdir(path, (error, data) => {
        if (error){
            console.log(constants.errorText);
        } else {
            for(let elem of data){
                let file = `${path}/${elem}`;
                readFile(file);
            }
            console.log(data);
        }
    });

}

function readFile(path){
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log(constants.errorText);
        } else {
            console.log(data);
        }
    });
}

module.exports = {
    readFolder
}