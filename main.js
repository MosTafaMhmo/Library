var add = document.getElementsByClassName("add")[0];
var remove = document.getElementsByClassName("remove")[0];
var addbook = document.getElementsByClassName("addbook")[0];
var container = document.querySelector(".land .container");
var btnadd = document.getElementsByTagName("button")[0];
var btnremove = document.getElementsByTagName("button")[1];
var bookname = document.querySelector("#bookname");
var authorname = document.querySelector("#authorname");
var bookid = document.querySelector("#bookid");
var boxs = document.getElementsByClassName("box");
var box = boxs[0];

function showadd() {
    addbook.classList.add("show");
    for (var i = 0; i < l; i++) {
        boxs[i].classList.remove("deletebox");
    }
}
add.onclick = showadd;
var l = boxs.length;
function AddNewBook() {
    var newbook = box.cloneNode(true);
    var h2 = newbook.querySelector(".name");
    var h3 = newbook.querySelector(".author");
    var Bid = newbook.querySelector(".id");
    h2.textContent = bookname.value;
    h3.textContent = "Author: " + authorname.value;
    Bid.textContent = "ID: " + bookid.value;
    container.prepend(newbook);
    addbook.classList.remove("show");

}
btnadd.onclick = AddNewBook;
btnremove.onclick = function () {
    addbook.classList.remove("show");
}
function del() {
    for (var i = 0; i < l; i++) {
        boxs[i].classList.add("deletebox");
        boxs[i].onclick = function (e) {
            if (this.classList.contains("deletebox")) {
                this.remove();
            }
        }
    }

}
remove.onclick = del;