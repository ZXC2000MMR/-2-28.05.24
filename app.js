function com()
{
let text = document.getElementById("com")
text.setAttribute("class","com1")
text.innerHTML=("Купить двери")
}

function removecom()
{
let remove = document.getElementById("com")
remove.removeAttribute("class")
remove.innerHTML=("Confortdveri")
}
num = 5
function addlist ()
{
let list = document.getElementById("list")
var ol = document.createElement("li")
ol.innerHTML = num++
list.appendChild(ol)
}
function addilist()
{
let del = document.getElementById("deldiv")
del.innerHTML = ('')
}
function izmenphoto()
{
   let click = document.getElementById("photoizmen")
   document.getElementById('photo').src = 'photografi/photo2.jpg';
}
function nazad()
{
   let click = document.getElementById("photonazad")
   document.getElementById('photo').src = 'photografi/photo.jpg';
}
function knopkacvet()
{
    
    document.getElementById("cvetknopki").classList.toggle("blue");
    document.getElementById("cvetknopki").classList.toggle("red");

}
function knopkabob()
{
    let text = document.getElementById("bob")
    text.setAttribute("class","bob1")
    text.innerHTML=("Губка боб")
}
function knopkabobdel ()
{
let remove = document.getElementById("bob")
remove.removeAttribute("class")
remove.innerHTML=("Кто проживает на дне океана?")
}
document.addEventListener("click", function(e) {
    let m = document.getElementById('menu');
    if (e.target.id != 'test' && e.target.id != 'menu') {
      m.style.display = 'none';
    } else if (e.target.id == 'test') {
      m.style.display = (m.style.display != 'block') ? 'block' : 'none';
    }
  });

  let input = document.querySelector('input'),
    btn = document.querySelector('button'),
    txt = document.querySelector('.txt');
btn.addEventListener('click', () => {
    txt.textContent += input.value;
})
const btn1 = document.body.appendChild(document.createElement('button'));
 
btn1.onclick = (v => (btn1.innerText = v, _ => btn1.innerText = ++v))(1);
