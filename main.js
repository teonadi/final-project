let allPlanetInfo;

fetch("https://planets-api.vercel.app/api/v1/planets/")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    allPlanetInfo = json;
  });

let headInfo = document.getElementsByClassName("headInfo")[0];
let overviewButtonHead = headInfo.children[0];
let internalButtonHead = headInfo.children[1];
let surfaceGeologyHead = headInfo.children[2];

let bodyInfo = document.getElementsByClassName("bodyInfo")[0];
let overviewButtonBody = bodyInfo.children[0];
let internalButtonBody = bodyInfo.children[1];
let surfaceGeologyBody = bodyInfo.children[2];

overviewButtonBody.onclick = function () {
  fillInformation(allPlanetInfo[0], "overview");
};
overviewButtonHead.onclick = function () {
  fillInformation(allPlanetInfo[0], "overview");
};

internalButtonBody.onclick = function () {
  fillInformation(allPlanetInfo[0], "internal");
};
internalButtonHead.onclick = function () {
  fillInformation(allPlanetInfo[0], "internal");
};

surfaceGeologyBody.onclick = function () {
  fillInformation(allPlanetInfo[0], "geology");
};
surfaceGeologyHead.onclick = function () {
  fillInformation(allPlanetInfo[0], "geology");
};

function fillInformation(planetInfo, type) {
  let planetNameElement = document.getElementsByClassName("planetName")[0];
  let textContent = document.getElementsByClassName("textContent")[0];
  let rotationTime = document
    .getElementsByClassName("info")[0]
    .children[0].getElementsByClassName("infoNumber")[0];
  let revolutionTime = document
    .getElementsByClassName("info")[0]
    .children[1].getElementsByClassName("infoNumber")[0];
  let radius = document
    .getElementsByClassName("info")[0]
    .children[2].getElementsByClassName("infoNumber")[0];
  let temp = document
    .getElementsByClassName("info")[0]
    .children[3].getElementsByClassName("infoNumber")[0];
  let planetImage = document.getElementsByClassName("mainImg")[0];

  if (type === "overview") {
    textContent.innerHTML = planetInfo.overview.content;
    planetImage.src = planetInfo.images.planet;
  } else if (type === "internal") {
    textContent.innerHTML = planetInfo.structure.content;
    planetImage.src = planetInfo.images.internal;
  } else if (type === "geology") {
    textContent.innerHTML = planetInfo.geology.content;
    planetImage.src = planetInfo.images.geology;
  }

  planetNameElement.innerHTML = planetInfo.name;
  rotationTime.innerHTML = planetInfo.rotation;
  revolutionTime.innerHTML = planetInfo.revolution;
  radius.innerHTML = planetInfo.radius;
  temp.innerHTML = planetInfo.temperature;
}
