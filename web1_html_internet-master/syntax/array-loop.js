var number = [1,400,12,34,5];
var i = 0;
while(i<5){
  console.log(number[i]);
  i = i + 1;
}

// 1, 400, 12, 34, 5 차례대로 출력

var number = [1,400,12,34,5];
var i = 0;
while(i<number.length){
  console.log(number[i]);
  i = i + 1;
}

//number.length -> 추가해도 모두 출력
var number = [1,400,12,34,5];
var i = 0;
var total = 0;
while(i<number.length){
  total = total + number[i];
  console.log(number[i]);
  i = i + 1;
}
//number안의 값들을 모두 더함
