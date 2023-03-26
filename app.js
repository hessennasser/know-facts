let btn = document.querySelector(".btn");
let fact = document.querySelector(".fact");

let url = "https://api.api-ninjas.com/v1/facts?limit=1";
let options = {
    method: "GET",
    headers: {
        "X-Api-Key": "VTOMZO2EHgXCKNUu6C5G4Q==3HksQbohiVTSTlnX",
        "content-type": "application/json"
    }
};

btn.addEventListener("click", () => {
    getFact();
});
window.addEventListener("load", () => {
    getFact();
});

let getFact = () => {
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            fact.textContent = `"${data[0].fact}"`;
        });
};