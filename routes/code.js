
/*
 * GET users listing.
 */
var exec = require('child_process').exec;
var wc = require('./codes/wc.js');

exports.compile = function(req, res){
  var time = new Date().getTime();
  var language = req.body.language;
  var compile = wc.getCompiler(language);
  compile(req.body.code, function(err, stdout, stderr){
    res.header("Content-Type", "text/plain; charset=utf-8");
    if(stderr){
      res.end(stderr);
    }else{
      res.end(stdout);
    }
  });


  /*
  var compile_cmd="";
  if(language === "c++"){
    compile_cmd = "echo '" + req.body.code + "' | g++ -x c++ -o " + time +" - ";
  }else if(language === "java"){
    compile_cmd = "echo '" + req.body.code + "' | g++ -x c++ -o " + time +" - ";
  }
  exec(compile_cmd, function(err,stdout,stderr){
    if(stderr){
      res.end(stderr);
    }else{
      var run_cmd = "./"+time;

      exec(run_cmd, function(err, stdout, stderr){
        fs.unlinkSync("./"+time);
        if(stderr){
          res.end(stderr);
        }else{
          res.end(stdout);
        }
      });
    }
  })
  */
};
