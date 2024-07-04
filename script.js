let input = document.getElementById("input");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Enter a task");
  } else {
    // new li creat kry gee
    let li = document.createElement("li");
    // cls name given
    li.className = "li";
    // li m value add kry ge
    li.innerHTML = input.value;
    // li ko ul ke child m add krdy ge
    ul.appendChild(li);

    // ek span creat kee
    let span = document.createElement("SPAN");
    // text node m kuch b likh skty hain
    let txt = document.createTextNode("x");
    txt.className = "txt";
    txt.style.color = "red";
    // span class name deaya
    span.className = "close";
    // text ko span k sth appen keay append ka ek or function prepand hoto jo new list ko top pay rkhta
    span.appendChild(txt);
    // li ko span k sth appen kr deaya
    li.appendChild(span);
    // span pay functin run keaya
    span.addEventListener("click", function () {
      // parentelement ek propety han  or lst m ul m say chiled delte keay
      var listItem = this.parentElement;
      ul.removeChild(listItem);
    });
    input.value = "";
    // Clear the input field after the press the enter
  }
});
