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
let add = document.getElementById("deldiv")
var div = document.createElement("div")
div.innerHTML = ("chicken");

}
function dellist()
{
    let del = document.getElementById("deldiv")
     del.innerHTML = ('')
}

