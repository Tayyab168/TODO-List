// 

let input = document.getElementById("input")

let ul = document.querySelector("ul")
let form = document.querySelector("form")

form.addEventListener("submit",function(e){
  e.preventDefault();
  if(input.value==""){
    alert("plz enter the task")
  }
  else{
    let li = document.createElement("li")
    li.classList.add("li");
    li.style.listStyle = "none";
    li.style.fontSize="50px"
    li.style.color = "red";
    li.innerHTML=input.value
    ul.appendChild(li)
    let span = document.createElement("span")
    let txt = document.createTextNode("x")
    txt.className = "txt";
    span.className = "close";
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    li.appendChild(editButton);
    span.appendChild(txt)
    li.appendChild(span)

    span.addEventListener("click",function(){
      ul.removeChild(li);
    })

    editButton.addEventListener("click", function() {
      let newText = prompt("Edit task:", li.textContent);
      if (newText !== null) {
          li.textContent = newText;
      }
  });
    input.value="";

  }
}) 
