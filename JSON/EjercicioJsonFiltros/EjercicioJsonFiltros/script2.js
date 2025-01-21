// Ruta del archivo JSON
const jsonUrl = 'animes.json';
let jsonData = [];

// Función para cargar datos desde el JSON
fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    jsonData = data;  // Guarda los datos cargados
    displayData(jsonData);  // Muestra los datos
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Función para mostrar los datos en la tabla
function displayData(data) {
  const tableBody = document.getElementById('data-table-body');
  tableBody.innerHTML = ''; // Limpiar tabla antes de agregar los datos

  data.forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.nombre;
    row.appendChild(nameCell);

    const autorCell = document.createElement('td');
    autorCell.textContent = item.autor;
    row.appendChild(autorCell);

    const capCell = document.createElement('td');
    capCell.textContent = item.capitulos;
    row.appendChild(capCell);

    const tradCell = document.createElement('td');
    tradCell.textContent = item.traducido;
    row.appendChild(tradCell);

    const persCell = document.createElement('td');
    persCell.textContent = item.personajes;
    row.appendChild(persCell);

    
    

    tableBody.appendChild(row);
  });
}
// Función para filtrar los datos según los valores en los inputs
function filterData() {
  const nameFilter = document.getElementById('nameFilter').value.toLowerCase();
  

  const filteredData = jsonData.filter(item => {
    const nameMatch = item.nombre.toLowerCase().includes(nameFilter);
    

    return nameMatch;
  });

  displayData(filteredData);  // Muestra los datos filtrados
}
