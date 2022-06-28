const openBtn = document.querySelector(".js-open")
const closeBtns = document.querySelectorAll(".js-close")
const modalBg = document.getElementById("modal-background")
const modalBox = document.getElementById("modal-box")

openBtn.addEventListener("click", function (event) {
    event.preventDefault()
    modalBg.classList.add("active")
    modalBox.classList.add("active")
})

closeBtns.forEach(node => {
    node.addEventListener("click", function (event) {
        event.preventDefault()
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")
    })
})