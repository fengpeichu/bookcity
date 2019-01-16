const fs = require('fs');
const path = require('path');
exports.getfile = function(name) {
    return JSON.parse(fs.readFileSync(path.resolve('src/mock', name), 'utf8'))
}