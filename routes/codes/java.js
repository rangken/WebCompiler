var exec = require('child_process').exec;
var fs = require('fs');

exports.compile = function(code, callback){
  var time = new Date().getTime();
  var javafilename = './'+time+'.java';
  fs.writeFile('./'+time+'.java', code, function(err) {
    if(err) throw err;
    var compile_cmd = "javac " + javafilename;
    var regexp = new RegExp("\\s*class (\\w+)");
    var arrmath = code.match(regexp);
    var runfilename = arrmath[1];
    if(arrmath.length != 0){
      exec(compile_cmd, function(err,stdout,stderr){
        if(stderr){
          removefile(javafilename);
          callback(err,stdout,stderr);
        }else{
          run(runfilename, function(err, stdout, stderr){
            removefile(javafilename);
            removefile(runfilename+".class");
            callback(err,stdout,stderr);
          });
        }
      });
    }else{
      callback("fuck","fuck","fuck");
    }
  });
};

var makefile = function(filename){

}

var removefile = function(filename){
  fs.unlink("./"+filename, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted");
    }
  });
}

var run = function(filename, callback){
  var run_cmd = "java "+filename;
  exec(run_cmd, function(err, stdout, stderr){
    //removefile(filename);
    callback(err,stdout,stderr);
  });
}
