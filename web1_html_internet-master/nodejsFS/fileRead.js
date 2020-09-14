var fs = require('fs'); //filesystem모듈 불러오기
fs.readFile('sample.txt', 'utf8' ,function(err, data){
  console.log(data);
});
//파일 읽기 기능
