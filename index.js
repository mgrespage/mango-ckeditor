var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync('./lib/ckeditor.js','utf8');
eval(filedata);

exports.CKEDITOR = window.CKEDITOR;