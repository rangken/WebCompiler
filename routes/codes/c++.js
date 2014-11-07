var exec = require('child_process').exec;
var fs = require('fs');

exports.compile = function(code, callback){
  var time = new Date().getTime();
  var compile_cmd = "echo '" + code + "' | g++ -x c++ -o " + time +" - ";
  exec(compile_cmd, function(err,stdout,stderr){
    if(stderr){
      callback(err,stdout,stderr);
    }else{
      run(time, function(err, stdout, stderr){
        callback(err,stdout,stderr);
      });
    }
  });
};

var makefile = function(filename){

}

var removefile = function(filename){
  //fs.unlinkSync("./"+filename);
  fs.unlink("./"+filename, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted");
    }
  });
}

var run = function(filename, callback){
  var run_cmd = "./"+filename;
  exec(run_cmd, function(err, stdout, stderr){
    removefile(filename);
    callback(err,stdout,stderr);
  });
}
