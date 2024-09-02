

const resultBtn = document.querySelector("#btn-result");

resultBtn.addEventListener("click",function(){
  const final = document.querySelector(".final");

  const width = document.querySelector("#input1"); 
  
    final.style.width = width.value +"px";

  const height = document.querySelector("#inputheight");
    
    final.style.height = height.value +"px";

  const fontSize = document.querySelector("#input2");
    final.style.fontSize = fontSize.value +"px";

  const checkBtn1 = document.querySelector('input[name= "check-btn1"]:checked').value;
  
  final.style.fontWeight = checkBtn1;

  const checkBtn2 = document.querySelector('input[name= "check-btn2"]:checked').value;
  
  final.style.justifyContent = checkBtn2; 

  const checkBtn3 = document.querySelector('input[name= "check-btn3"]:checked').value;
  
  final.style.alignItems = checkBtn3;  
 
 





  const fontColor = document.querySelector("#input3");

    final.style.color = fontColor.value;

  const bk = document.querySelector("#input3-1");
    
    final.style.backgroundColor = bk.value;
    
  
  const resultStr = document.querySelector("#result-r");
     final.innerText = resultStr.value;
  
 

})
