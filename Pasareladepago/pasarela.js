   // Función para obtener la lista de ciudades de Colombia
   async function getCities() {
    const response = await fetch("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json");
    const cities = await response.json();
    const colombianCities = cities.filter(city => city.country === "CO"); // Filtrar las ciudades de Colombia
    const citySelect = document.getElementById("city-select");
    colombianCities.forEach(city => {
        const option = new Option(city.name, city.name);
        citySelect.appendChild(option);
    });
}

document.getElementById('Volver').addEventListener('click', function() {
    window.location.href = '../Ecomerce/index.html'; // Cambia 'index.html' por la ruta correcta de tu página de inicio
  });


// Llamar a la función para obtener la lista de ciudades de Colombia al cargar la página
getCities();



