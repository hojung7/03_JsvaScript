const resultBtn = document.querySelector("#result");

resultBtn.addEventListener("click", function(){
 const box = document.querySelector(".box");

 const width = Number(document.querySelector("#width").value);
 box.style.width = width + "px";

 const height = Number(document.querySelector("#height").value);
 box.style.height = height + "px";

 const fontSize = Number(document.querySelector("#fontSize").value);
 box.style.fontSize = fontSize + "px";

const fontWeight = document.querySelectorAll('#fontWeight');
if(fontWeight[0].checked === true){
   box.style.fontWeight = `${fontWeight[0].value}`;
}
if(fontWeight[1].checked === true){
   box.style.fontWeight = `${fontWeight[1].value}`;
}



 const color = document.querySelector("#color").value;
    box.style.color = color;
 const backGround = document.querySelector("#backGround").value;
    box.style.backgroundColor = backGround;



 const horizon = document.querySelectorAll("#horizon");
 if(horizon[0].checked === true){
    box.style.justifyContent = `${horizon[0].value}`;
 }  
 else if(horizon[1].checked === true){
    box.style.justifyContent = `${horizon[1].value}`;
 }  
 else{
    box.style.justifyContent = `${horizon[2].value}`};


const vertical = document.querySelectorAll("#vertical");
if(vertical[0].checked === true){
   box.style.alignItems = `${vertical[0].value}`;
}
else if (vertical[1].checked === true){
   box.style.alignItems = `${vertical[1].value}`;
}
else{
   box.style.alignItems = `${vertical[2].value}`;
}














 const string = document.querySelector("#string");
    box.innerText = string.value;
  


})
