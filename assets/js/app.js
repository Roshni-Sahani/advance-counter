let addbtn = document.querySelector("#addbtn")
let h2 = document.querySelector("h2")
let savebtn = document.querySelector("#savebtn")
let saveno = document.querySelector("#saveno")
let resetbtn = document.querySelector("#resetbtn")


addbtn.addEventListener("click", function () {
    h2.innerHTML = +h2.innerHTML + 1;
})
savebtn.addEventListener("click", function () {
    if (saveno.innerHTML == 0) {
        saveno.innerHTML = h2.innerHTML;
    }
    else {
        saveno.innerHTML = saveno.innerHTML + ", " + h2.innerHTML
    }
})
resetbtn.addEventListener("click", function () {
    h2.innerHTML = 0;
    saveno.innerHTML = 0;
}
)







