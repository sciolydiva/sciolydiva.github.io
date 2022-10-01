const navbar = await (await fetch("/components/navbar.html")).text()
document.querySelector("#navbar").innerHTML = navbar

const footer = await (await fetch("/components/footer.html")).text()
document.querySelector("#footer").innerHTML = footer
