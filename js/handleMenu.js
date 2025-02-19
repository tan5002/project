const icon = document.querySelector(".icon")
const listItem = document.querySelectorAll(".item")
const menuItem = document.querySelector(".menu-item")
const logo = document.querySelector(".logo");
const dropDown = document.querySelector(".drop-down")

icon.addEventListener("click", () => {
    listItem.forEach((item) => {
        item.classList.toggle("hidden");
    })
    menuItem.classList.toggle("menu-item")
})

const listLi = document.querySelectorAll(".container-left li");
const listBox = document.querySelectorAll(".container-right main .box");

listLi.forEach((item,index) => {
    item.addEventListener("click", () => {
        listLi.forEach((item) => {
            item.style.color = "black";
            item.style.backgroundColor = "transparent"
        })
        item.style.color ="white";
        item.style.backgroundColor = " black";
        listBox.forEach((item) => item.style.display = "none")
        listBox[index].style.display = "block";
    })
})

logo.addEventListener("click", () =>{
    dropDown.classList.toggle("hidden")
})
