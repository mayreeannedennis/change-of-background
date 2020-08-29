let showresult =document.getElementById("result");
let maincolor = document.getElementById("main");
let mybutton = document.getElementById("mybtn")
mybutton.addEventListener("click", show);
function show(){
let coloR=['red', 'black', 'skyblue', 'yellow', 'purple','blue','orange', 'brown', 'pink', 'green', 'purple', 'honey', 'squash', 'amber','indigo', ' teal'];
let num =Math.floor(Math.random()* coloR.length);
let mycoLorShow = coloR[num];
showresult.innerHTML = mycoLorShow;
maincolor.style.backgroundColor = mycoLorShow; 
console.log(mycoLorShow);
console.log(num);

}