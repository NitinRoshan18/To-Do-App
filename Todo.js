let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);

  input.value = "";
});

/*let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
}*/

ul.addEventListener("click", function(event){
if (event.target.nodeName == "BUTTON"){
  let listItem = event.target.parentElement;
  listItem.remove();

}


});

