document.querySelector(".box").innerHTML="My name is Mayukh"

// document.querySelector(".container").hidden=true

// document.querySelector(".box").hasAttribute("style");

document.querySelector(".box").setAttribute("style","color: red")
document.querySelector(".box").removeAttribute("style")


document.querySelector(".box").classList.toggle("red")

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by harry</b>"
div.setAttribute("class", "created");
document.querySelector(".container").before(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")