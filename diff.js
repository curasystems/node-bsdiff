var path = require('path'),
    child_process = require('child_process');

module.exports = function(originalFile, targetFile, patchFile, cb) {
  
  var bsdiffPath = path.join(__dirname, 'bin', process.platform, 'bsdiff');
  
  if (process.platform === 'win32') {
    bsdiffPath += '.exe';
  }
  
  var options = {
    timeout: 60 * 1000
  };
  
  var args = [originalFile, targetFile, patchFile];
  
  return child_process.execFile(bsdiffPath, args, options, cb);
};
