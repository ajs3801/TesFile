console(Math.round(1.6));        //Math는 객체 round는 내장함수, 결과는 2 반올림해줌

function sum (first,second){ //parameter 매개변수
  console.log(first+second);
}

sum(2,4); //argument인자

Math.round(1.6); //출력안됨
console(Math.round(1.6)) //출력됨

//-----------------------------------------------------------------------
function sum (first,second){ //parameter 매개변수
  return first+second; //return 즉시 함수 종류 + 값출력
}

console.log(sum(2,4));
