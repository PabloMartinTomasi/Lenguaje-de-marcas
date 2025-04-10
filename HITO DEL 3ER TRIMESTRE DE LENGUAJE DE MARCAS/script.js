let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.indicators');

// Crear indicadores
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(dot);
});
const indicators = document.querySelectorAll('.indicators div');

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        indicators[index].classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Inicializar
updateCarousel();


window.onload = function () {
    fetch('https://www.el-tiempo.net/api/json/v2/home')
        .then(response => response.json())
        .then(data => {
            const cities = data.ciudades;
            const citySelect = document.getElementById('indexSelect');
            const weatherStateSelect = document.getElementById('weatherState');

            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.name;
                option.text = city.name;
                citySelect.appendChild(option);
            });

            const weatherStates = [...new Set(cities.map(city => city.stateSky.description))];
            weatherStates.forEach(state => {
                const option = document.createElement('option');
                option.value = state.toLowerCase();
                option.text = state;
                weatherStateSelect.appendChild(option);
            });

            function updateWeatherData() {
                const selectedCity = document.getElementById('indexSelect').value;
                const minTemp = parseFloat(document.getElementById('minTemp').value) || -Infinity;
                const maxTemp = parseFloat(document.getElementById('maxTemp').value) || Infinity;
                const selectedWeatherState = document.getElementById('weatherState').value;

                let filteredCities = cities;

                if (selectedCity && selectedCity !== "all") {
                    filteredCities = filteredCities.filter(city => city.name === selectedCity);
                }

                filteredCities = filteredCities.filter(city => {
                    const minCityTemp = city.temperatures.min;
                    const maxCityTemp = city.temperatures.max;

                    return (minCityTemp >= minTemp && maxCityTemp <= maxTemp);
                });

                if (selectedWeatherState !== 'all') {
                    filteredCities = filteredCities.filter(city =>
                        city.stateSky.description.toLowerCase().includes(selectedWeatherState.toLowerCase())
                    );
                }

                const weatherTable = document.getElementById('weather-data');
                weatherTable.innerHTML = `
                            ${filteredCities.map(city => `
                                <tr>
                                    <td>${city.name}</td>
                                    <td>${city.nameProvince}</td>
                                    <td>${city.stateSky.description}</td>
                                    <td>${city.temperatures.max}</td>
                                    <td>${city.temperatures.min}</td>
                                </tr>
                            `).join('')}
                        `;
            }

            document.getElementById('minTemp').addEventListener('change', updateWeatherData);
            document.getElementById('maxTemp').addEventListener('change', updateWeatherData);
            document.getElementById('weatherState').addEventListener('change', updateWeatherData);
            document.getElementById('indexSelect').addEventListener('change', updateWeatherData);

            citySelect.dispatchEvent(new Event('change'));
        })
        .catch(error => console.error('Error:', error));
};
