let btn = document.querySelectorAll(".btn");
let text = document.querySelectorAll(".text");



for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", () => {
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove("activeBtn");
        }
            btn[i].classList.add("activeBtn");

        for (let i = 0; i < text.length; i++) {
            text[i].classList.remove("active");
        }
            text[i].classList.add("active");

    })


}
document.querySelector(".btn").click()






