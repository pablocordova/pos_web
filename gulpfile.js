var gulp = require('gulp');

var exec = require('child_process').exec;
gulp.task('default', function(cb) {

  	// ng build
  	exec('ng build --watch', function(err) {
		if (err) return cb(err); 
		cb(); 
  	});

  	//Nodemon
  	exec('nodemon', function(err) {
		if (err) return cb(err); 
		cb(); 
  	});
});