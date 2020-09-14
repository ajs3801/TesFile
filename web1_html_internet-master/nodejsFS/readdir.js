var testFolder = './data'; //      ./data = data
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})

//data폴더 안의 목록을 배열로 전해준다.
