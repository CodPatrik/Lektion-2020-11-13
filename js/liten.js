
window.onload = (event) => {
    //console.log(event.type);
    init();
};

function init() {
    let containerHandle = document.getElementById("itemContainer");
    let annonser = getData(); // Läser in data
    createHtml(containerHandle, annonser);
}

function createHtml(containerHandle, annonser) {

    annonser.forEach(annons => {

        createOne(containerHandle, annons);

    });


}

function createOne(containerHandle, annons) {
    containerHandle.innerHTML += `
                <div class="smallItem">
                <img src="./pictures/${annons.picture}" style="height:100px; width:100px;">
                <h1>${annons.rubrik}</h1>          
                <p>${annons.text}</p>
                </div>
                `
}