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
    image.src = "./assets/planet-jupiter.svg"
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.";
}

function structure() {
    updateColor();
    document.querySelectorAll(".structure").forEach((el) => {
        el.classList.add("btn-hover");
    })
    const image = document.querySelector(".plannet-image");
    image.src = "./assets/planet-jupiter-internal.svg";
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
}

function surface() {
    updateColor();
    document.querySelectorAll(".surface").forEach((el) => { 
        el.classList.add("btn-hover");
    })
    document.querySelector(".surface-img").classList.remove("is-hidden");
    document.querySelector(".content").innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
}


const collapseMenu = document.querySelector(".collapse-menu");
collapseMenu.addEventListener('click', () => {
    const dropList = document.querySelector(".category-drop-list");
    dropList.classList.toggle("collapse-drop-list");
})






