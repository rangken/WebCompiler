
/*
 * GET users listing.
 */
var fs = require('fs');
var exec=require('child_process').exec;

exports.compile = function(req, res){
  var time = new Date().getTime();
  var cmd = "echo '" + req.body.code + "' | g++ -x c++ -o " + time +" - ";
  console.log(cmd);
  exec(cmd, function(err,stdout,stderr){
    if(stderr){
      res.end(stderr);
    }else{
      var cmd2 = "./"+time;
      exec(cmd2, function(err, stdout, stderr){
        fs.unlinkSync("./"+time);
        if(stderr){
          res.end(stderr);
        }else{
          res.end(stdout);
        }
      });
    }
  })
};
