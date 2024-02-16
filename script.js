const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inpVal = document.querySelector("input")
    if (inpVal.value == "Dunyo" || inpVal.value == "dunyo") {
        document.querySelector("h1").classList.remove("hide")
        document.querySelector(".touch").classList.remove("hide")
    }
    else {
        alert("To'g'ri yozing yoki kiritmang")
    }
})

const btn = document.querySelector(".touch")
btn.addEventListener("click", () => {
    window.location.assign('mp.html')
})