let colorinputel = document.getElementById("colorinput")

colorinputel.addEventListener("change", (sa) => {
    console.log(sa.currentTarget.value)
    document.body.style.backgroundColor = sa.currentTarget.value
})