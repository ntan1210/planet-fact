function updateColor() { 
    const selected = document.querySelectorAll(".btn-hover");
    selected.forEach((el) => { 
        el.classList.remove("btn-hover");
    })
}

function overview() {
    updateColor();
    document.querySelectorAll(".overview").forEach((el) => {
        el.classList.add("btn-hover");
    })
    const image = document.querySelector(".plannet-image");
    image.src = "./assets/planet-mars.svg"
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.";
}

function structure() {
    updateColor();
    document.querySelectorAll(".structure").forEach((el) => {
        el.classList.add("btn-hover");
    })
    const image = document.querySelector(".plannet-image");
    image.src = "./assets/planet-mars-internal.svg";
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
}

function surface() {
    updateColor();
    document.querySelectorAll(".surface").forEach((el) => { 
        el.classList.add("btn-hover");
    })
    document.querySelector(".surface-img").classList.remove("is-hidden");
    document.querySelector(".content").innerHTML = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
}


const collapseMenu = document.querySelector(".collapse-menu");
collapseMenu.addEventListener('click', () => {
    const dropList = document.querySelector(".category-drop-list");
    dropList.classList.toggle("collapse-drop-list");
})






