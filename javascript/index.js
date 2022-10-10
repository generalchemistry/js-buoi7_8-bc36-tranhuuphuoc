var btnSubmit = document.getElementsByClassName("btn-success");
var alert= document.getElementsByClassName("alert"); 
var result = document.getElementsByClassName("text-success");
var addNumbtn=document.getElementsByClassName("addNum");
var removeNumbtn=document.getElementsByClassName("removeNum");
var informArrayValue=document.getElementsByClassName("informArrayValue");
var inputArray=document.getElementsByClassName("inputArray");
var arrayMain=[];
var array_ex9=[];
// THÊM SỐ
function addNumber(array,index){
  array[array.length]=inputArray[index].value*1;
  informArrayValue[index].innerHTML+="<li>"+array[array.length-1]+"</li>";
}
// XOÁ SỐ
function removeNumber(array,index){
  informArrayValue[index].getElementsByTagName("li")[array.length-1].remove();
  array.pop();
}
addNumbtn[0].onclick=function(){
  if(nullValue(inputArray[0].value)){
    if(intValidation(inputArray[0].value)){
      addNumber(arrayMain,0);
      alertInform(0,"");
    }
    else{alertInform(0,"Số được thêm phải là số nguyên") }}
  else{alertInform(0,"Hãy nhập số bạn cần thêm vào mảng");
  }
}
addNumbtn[1].onclick=function(){
  if(nullValue(inputArray[1].value)){
    addNumber(array_ex9,1);
    alertInform(9,"");
  }
  else{
    alertInform(9,"Hãy nhập số bạn cần thêm vào mảng");
  }
}
removeNumbtn[0].onclick=function(){
  removeNumber(arrayMain,0)
}
removeNumbtn[1].onclick=function(){
  removeNumber(array_ex9,1)
}

// THÔNG BÁO LỖI
function alertInform(i,text){
  result[i].classList.add("d-none");
  alert[i].innerHTML=text;
}
//THÔNG BÁO KẾT QUẢ
function resultInform(i,text){
  alert[i].innerHTML="";
  result[i].classList.remove("d-none");
  result[i].innerHTML=text;
}
// MẢNG KHÔNG CÓ PHẦN TỬ
function arrayAlert(i){
  if(arrayMain.length===0){
    alertInform(i,"Mảng không có phần tử")
    return false;
  }
  alertInform(i,"");
  return true;
}
//INPUT TRỐNG
function nullValue(value){
  if(value===""){
    return false;
  }
  return true;
}
// CHECK SỐ NGUYÊN
function intValidation(num){
  if(parseInt(num)!==parseFloat(num)){
    return false;
  }
  return true;
}
// CHECK SỐ NGUYÊN TỐ
function primeValid(number){
  if(number<=1){
    return false;
  }
  for(var i=2;i<number;i++){
    if(number%i===0){
      return false
    }
  }
  return true;
}
// TẠO MẢNG SỐ DƯƠNG
function getPositiveArray(array){
  var positiveArray=[];
  for(var i=0;i<array.length;i++){
    if(array[i]>0){
      positiveArray[positiveArray.length]=array[i];
    }
  }
  return positiveArray;
}
// MAIN FUNCTION
function exercise1(){
  var positiveArray=getPositiveArray(arrayMain);
  if(positiveArray.length===0){
    return false;
  }
  var sum= 0;
  for(var i=0;i<positiveArray.length;i++){
    sum+=positiveArray[i];
  }
  return sum;
}

function exercise2(){
  var positiveArray=getPositiveArray(arrayMain);
  if(positiveArray.length===0){
    return false;
  }
  return positiveArray.length;
}

function exercise3(){
  var min = arrayMain[0];
  for(var i=1;i<arrayMain.length;i++){
    if(arrayMain[i]<min){
      min=arrayMain[i];
    }
  }
  return min;
}

function exercise4(){
  var positiveArray=getPositiveArray(arrayMain);
  if(positiveArray.length===0){
    return false;
  }
  var min = positiveArray[0];
  for(var i=1;i<positiveArray.length;i++){
    if(positiveArray[i]<min){
      min=positiveArray[i];
    }
  }
  return min;
}

function exercise5(){
  for(var i=arrayMain.length-1;i>=0;i--){
    if(arrayMain[i]%2===0){
      return arrayMain[i];
    }
  }
  return false;
}

function exercise6(){
  var firstPlace=document.getElementById("firstPlace").value;
  var secondPlace=document.getElementById("secondPlace").value;
  var newArray=document.getElementById("newArray_ex6");
  if(!nullValue(firstPlace)||!nullValue(secondPlace)){
    return "nullValue"; //Dữ liệu trống
  }
  firstPlace= parseInt(firstPlace);
  secondPlace=parseInt(secondPlace);
  if(firstPlace===secondPlace){
    return "samePlace";  //2 vị trí mảng trùng nhau
  }
  if(firstPlace>arrayMain.length||secondPlace>arrayMain.length){
    return "logicalValue"; //vị trí mảng không hợp lệ
  }
  newArray.innerHTML=""; 
  for(var i=0;i<arrayMain.length;i++){
    if(i===firstPlace-1){
      newArray.innerHTML+='<li class="text-primary">'+arrayMain[secondPlace-1]+"</li>"
    }
    else if(i===secondPlace-1){
      newArray.innerHTML+='<li class="text-primary">'+arrayMain[firstPlace-1]+"</li>"
    }
    else{
      newArray.innerHTML+='<li>'+arrayMain[i]+"</li>"
    }
  }
  return true;
}

function exercise7(){
  var newArrayText=document.getElementById("newArray_ex7");
  var newArray=[];
  var minIndex;
  newArrayText.innerHTML="";
  // TẠO MẢNG MỚI ĐỂ XỬ LÍ
  for(var i=0;i<arrayMain.length;i++){
    newArray[newArray.length]=arrayMain[i];
  }
  while(newArray.length>0){
    minIndex =0;
    for(var j=1;j<newArray.length;j++){
      if(newArray[j]<newArray[minIndex]){
        minIndex=j;
      }
    }
    newArrayText.innerHTML+='<li>'+newArray[minIndex]+"</li>"
    newArray.splice(minIndex,1);
  }
}

function exercise8(){
  for(var i=0;i<arrayMain.length;i++){
    if(primeValid(arrayMain[i])){
      return arrayMain[i];
    }
  }
  return false;
}
function exercise9(){
  if (array_ex9.length===0){
    return false;
  }
  var count=0;
  for(var i=0;i<array_ex9.length;i++){
    if(intValidation(array_ex9[i])){
      count+=1;
    }
  }
  return count;
}
function exercise10(){
  var positiveArray=getPositiveArray(arrayMain);
  if(positiveArray.length>(arrayMain.length*0.5)){
    return "greater";
  }
  else if(positiveArray.length===(arrayMain.length*0.5)){
    return "draw";
  }
  return "less";
} 

btnSubmit[0].onclick=function(){
  if(arrayAlert(1)){
    if(!exercise1()){
      alertInform(1,"Mảng không có số nguyên dương");
      return;
    }
    resultInform(1,"Tổng các số nguyên dương của mảng là "+exercise1());
  }
}
btnSubmit[1].onclick=function(){
  if(arrayAlert(2)){
    if(!exercise2()){
      alertInform(2,"Mảng không có số nguyên dương");
      return;
    }
    resultInform(2,"Mảng có "+exercise2()+" số nguyên dương");
  }
}
btnSubmit[2].onclick=function(){
  if(arrayAlert(3)){
    resultInform(3,"Số nhỏ nhất trong mảng là "+exercise3());
  }
}
btnSubmit[3].onclick=function(){
  if(arrayAlert(4)){
    if(!exercise4()){
      alertInform(4,"Mảng không có số nguyên dương");
      return;
    }
    resultInform(4,"Số nguyên dương nhỏ nhất trong mảng là "+exercise4());
  }
}
btnSubmit[4].onclick=function(){
  if(arrayAlert(5)){
    if(!exercise5()){
      alertInform(5,"Mảng không có số chẵn");
      return;
    }
    resultInform(5,"Số chẵn cuối cùng của mảng là "+exercise5());
  }
}
btnSubmit[5].onclick=function(){
  if(arrayAlert(6)){
    switch(exercise6()){
      case "nullValue":
        alertInform(6,"Hãy nhập đủ 2 vị trí cần đổi giá trị");
        break;
      case "samePlace":
        alertInform(6,"Hãy vị trí cần đổi phải khác nhau");
        break;
      case "logicalValue":
        alertInform(6,"Vị trí không hợp lệ");
        break;
      default:
        alertInform(6,"");
    }
  }
}
btnSubmit[6].onclick=function(){
  if(arrayAlert(7)){
    exercise7();
  }
}
btnSubmit[7].onclick=function(){
  if(arrayAlert(8)){
    if(!exercise8()){
      alertInform(8,"Mảng không có nguyên tố");
      return;
    }
    resultInform(8,"Số nguyên tố đầu tiên trong mảng là "+exercise8());
  }
}
btnSubmit[8].onclick=function(){
  if(exercise9()===false){
    alertInform(9,"Mảng không có phần tử")
  }
  else if(exercise9()>0){
    resultInform(9,"Mảng có "+exercise9()+ " số nguyên");
  }
  else{
    alertInform(9,"Mảng không có số nguyên");
  }
}
btnSubmit[9].onclick=function(){
  if(arrayAlert(10)){
    switch(exercise10()){
      case "greater":
        resultInform(10,"Số nguyên dương nhiều hơn số nguyên âm");
        break;
      case "draw":
        resultInform(10,"Số nguyên dương bằng số nguyên âm");
        break;
      default:
        resultInform(10,"Số nguyên âm nhiều hơn số nguyên dương");
    }
    }
}


