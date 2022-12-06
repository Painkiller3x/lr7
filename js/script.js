const div = document.createElement('div');
div.classList.add('div');
document.body.appendChild(div);
let img = document.createElement('img');
img.src="img/magic_ball.png";
img.setAttribute("class","img");
img.classList.add('img','scale');
div.prepend(img);
const inputText = document.createElement('input');
inputText.setAttribute("type","text");
inputText.setAttribute("placeholder","Сьогодні п'ятниця?");
div.appendChild(inputText);
const br = document.createElement('br');
div.appendChild(br);
const br2 = document.createElement('br');
div.appendChild(br2);
const btn = document.createElement('button');
btn.innerHTML="Спитати";
div.appendChild(btn);
const text_ball = document.createElement("p");
div.appendChild(text_ball);
btn.addEventListener('click', () => {
var st = String(inputText.value).indexOf("?");
if(st==-1){
text_ball.textContent="Задайте питання"}
else{
const array = Array("Так","Ні","Можливо","Точно ні","Точно так");
const answer=array[Math.floor(Math.random()*5)]
text_ball.textContent=answer;
}});