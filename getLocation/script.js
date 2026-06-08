const button = document.getElementById("location-btn");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7551528b9d8042efa71125114263003&q=${lat},${long}&aqi=yes`,
  );
  return await promise.json();
}

async function getLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude,
  );
  console.log(result);
}

async function failedLocation() {
  console.log("there was ans error");
}

button.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    getLocation,
    failedLocation,
  );
});
