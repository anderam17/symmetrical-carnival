const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "http://baconmockup.com/250/200" },
  { name: "Voluptatem", image: "http://baconmockup.com/250/200" },
  { name: "Explicabo", image: "http://baconmockup.com/250/200" },
  { name: "Rchitecto", image: "http://baconmockup.com/250/200" },
  { name: " Beatae", image: "http://baconmockup.com/250/200" },
  { name: " Vitae", image: "http://baconmockup.com/250/200" },
  { name: "Inventore", image: "http://baconmockup.com/250/200" },
  { name: "Veritatis", image: "http://baconmockup.com/250/200" },
  { name: "Accusantium", image: "http://baconmockup.com/250/200" },
]

const showCoffees = () => {
    let output = "";
    coffees.forEach(({name, image}) => {
        output += 
        `<div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#">Taste</a>
        </div>
        `
    })
    container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then((res) => this.console.log("service worker registered"))
        .catch((err) => this.console.log("service worker not registered", err))
    })
}