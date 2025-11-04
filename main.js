const burger =document.querySelector(".burger")
const header =document.querySelector(".header")


burger.addEventListener("click",() => {
    document.body.classList.toggle("none-scroll")
header.classList.toggle("header_active")
burger.classList.toggle("burger_active")
})