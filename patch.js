var path = require('path'),
    child_process = require('child_process');

module.exports = function(originalFile, targetFile, patchFile, cb) {

  var bspatchPath = path.join(__dirname, 'bin', process.platform, 'bspatch');

  if (process.platform === 'win32') {
    bspatchPath += '.exe';
  }

  var options = {
    timeout: 60 * 1000
  };

  var args = [originalFile, targetFile, patchFile];

  return child_process.execFile(bspatchPath, args, options, cb);
};
