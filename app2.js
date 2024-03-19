var fs = require('fs')

fs.rename("app.js","rename.js", function(err){
    if(err) throw err;
    console.log("file renamed");
})