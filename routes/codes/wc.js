var cplusplus = require('./c++');
var javac = require('./java');

exports.getCompiler = function(language){
  if(language == "c" || language == "c++"){
    return cplusplus.compile;
  }else if(language == "java"){
    return javac.compile;
  }
};
