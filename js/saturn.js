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
    image.src = "./assets/planet-saturn.svg"
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";
}

function structure() {
    updateColor();
    document.querySelectorAll(".structure").forEach((el) => {
        el.classList.add("btn-hover");
    })
    const image = document.querySelector(".plannet-image");
    image.src = "./assets/planet-saturn-internal.svg";
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
}

function surface() {
    updateColor();
    document.querySelectorAll(".surface").forEach((el) => { 
        el.classList.add("btn-hover");
    })
    document.querySelector(".surface-img").classList.remove("is-hidden");
    document.querySelector(".content").innerHTML = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ";
}


const collapseMenu = document.querySelector(".collapse-menu");
collapseMenu.addEventListener('click', () => {
    const dropList = document.querySelector(".category-drop-list");
    dropList.classList.toggle("collapse-drop-list");
})






