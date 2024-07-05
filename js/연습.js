function check1(){
  const input1 = document.getElementById("input1");
  const value = Number(input1.value);
  if(value >0){
    alert(`${value} 가 양수입니다`)

  }
  if(value <= 0){
    alert(`${value} 가 음수입니다.`)
  }
}

function check3(){
  const input3 = document.getElementById("input3");
  const value = Number(input3.value);

  
let result; // 결과를 저장할 변수
// 양수 판별
if(value > 0){
  result = "양수";
// 음수 판별
}
else if(value < 0){
  result = "음수";
// 양수도 음수도 아닌경우
}
else{
  result = "0";
}
alert(`${value}은/는 ${result} 입니다.`)
}

function check4(){
  const input4 = document.getElementById("input4");
  const value = Number(input3.value);

  let result;

  if(value<0 ||value > 120){
    alert("잘못 입력하셨습니다")
  }
}


