let rightSide = document.querySelector(".right_side");
rightSide.style["background-color"] = "#d3c26f";

let newText = document.querySelectorAll(".name");
for(let i = 0; i < newText.length; i++)
{
    newText[i].style["text-shadow"] = "-6px 5px 2px yellow";
}