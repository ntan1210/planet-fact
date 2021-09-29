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
    image.src = "./assets/planet-neptune.svg"
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
}

function structure() {
    updateColor();
    document.querySelectorAll(".structure").forEach((el) => {
        el.classList.add("btn-hover");
    })
    const image = document.querySelector(".plannet-image");
    image.src = "./assets/planet-neptune-internal.svg";
    document.querySelector(".surface-img").classList.add("is-hidden");

    document.querySelector(".content").innerHTML = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
}

function surface() {
    updateColor();
    document.querySelectorAll(".surface").forEach((el) => { 
        el.classList.add("btn-hover");
    })
    document.querySelector(".surface-img").classList.remove("is-hidden");
    document.querySelector(".content").innerHTML = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
}


const collapseMenu = document.querySelector(".collapse-menu");
collapseMenu.addEventListener('click', () => {
    const dropList = document.querySelector(".category-drop-list");
    dropList.classList.toggle("collapse-drop-list");
})






