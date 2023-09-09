fetch("https://planets-api.vercel.app/api/v1/planets/")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    fillInformation(json[1]);
  });

function fillInformation(planetInfo) {
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

  planetImage.src = planetInfo.images.planet;
  planetNameElement.innerHTML = planetInfo.name;
  textContent.innerHTML = planetInfo.overview.content;
  rotationTime.innerHTML = planetInfo.rotation;
  revolutionTime.innerHTML = planetInfo.revolution;
  radius.innerHTML = planetInfo.radius;
  temp.innerHTML = planetInfo.temperature;
}
