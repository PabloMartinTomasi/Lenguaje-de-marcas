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

window.onload = function() {
    fetch('https://www.el-tiempo.net/api/json/v2/home')
        .then(response => response.json())
        .then(data => {
            const cities = data.ciudades;
            const citySelect = document.getElementById('indexSelect');
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.name;
                option.text = city.name;
                citySelect.appendChild(option);
            });
            citySelect.addEventListener('change', function() {
                const selectedCity = cities.find(city => city.name === this.value);
                if (selectedCity) {
                    const weatherTable = document.getElementById('weather-table');
                    weatherTable.innerHTML = `
                        <thead>
                            <tr>
                                <th>Ciudad</th>
                                <th>Provincia</th>
                                <th>Descripción del Clima</th>
                                <th>Temperatura Máxima (°C)</th>
                                <th>Temperatura Mínima (°C)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${selectedCity.name}</td>
                                <td>${selectedCity.nameProvince}</td>
                                <td>${selectedCity.stateSky.description}</td>
                                <td>${selectedCity.temperatures.max}</td>
                                <td>${selectedCity.temperatures.min}</td>
                            </tr>
                        </tbody>
                    `;
                }
            });
            citySelect.dispatchEvent(new Event('change')); // Trigger the change event to load the data initially
        })
        .catch(error => console.error('Error:', error));
};