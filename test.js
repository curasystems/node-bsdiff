fs = require('fs');
assert = require('assert');

bs = require('./index');

bs.diff('./README.md', './package.json', './test.patch', function(err){
    bs.patch('./README.md', './generated.file.json', './test.patch', function(err){
        originalFile = fs.readFileSync( './package.json', {encoding:'utf8'} );
        generateFile = fs.readFileSync( './generated.file.json', {encoding:'utf8'} );

        assert( originalFile == generateFile, "Files should have been equal" );
    });
});