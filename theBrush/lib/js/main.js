let click = document.querySelector(".main_container");
let imageChange = document.querySelector("#rengar");

click.onclick = function()
{
    imageChange.src = "assets/rengar.png";
    alert("You've been deleted!");
}