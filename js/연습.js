function Student(inputGrade, inputBan, inputNumber, inputName){
  this.grade = inputGrade;
  this.ban = inputBan;
  this.number = inputNumber;
  this.name = inputName;

this.information = function(){
    let str = `${this.grade}학년 ${this.ban}반 ${this.number}번 ${this.name}`;
    return str;
}
}
