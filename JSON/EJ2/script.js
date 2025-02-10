// Ruta del archivo JSON
const jsonUrl = 'data.json';
let jsonData = [];  // Declare the variable to store the fetched data

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

    const nombreCell = document.createElement('td');
    nombreCell.textContent = item.nombre;
    row.appendChild(nombreCell);

    const fundacionCell = document.createElement('td');
    fundacionCell.textContent = item.fundacion;
    row.appendChild(fundacionCell);

    const europeoCell = document.createElement('td');
    europeoCell.textContent = item.europeo;
    row.appendChild(europeoCell);

    const paisCell = document.createElement('td');
    paisCell.textContent = item.pais;
    row.appendChild(paisCell);

    const estadioCell = document.createElement('td');
    estadioCell.textContent = item.estadio;
    row.appendChild(estadioCell);

    tableBody.appendChild(row);
  });
}

// Función para filtrar los datos según los valores en los inputs
function filterData() {
  const filterNombre = document.getElementById('nameFilter').value.toLowerCase();
  

  const filteredData = jsonData.filter(item => {
    const nameMatch = item.nombre.toLowerCase().includes(filterNombre);
    return nameMatch;
  });

  displayData(filteredData);  // Muestra los datos filtrados
}

function filterNumber() {
  const filterFundacion = document.getElementById('numberFilter').value;
  

  if (filterFundacion !== '') {
    const filteredNumber = jsonData.filter(item => {
      return item.fundacion.toString().includes(filterFundacion);
    });
    displayData(filteredNumber);  // Muestra los datos filtrados
  } else {
    displayData(jsonData);  // Si el campo está vacío, mostrar todos los datos
  }
}

function filterEuropeo() {
  const filterEuropeo = document.getElementById('paisEuropeo').value.toLowerCase();
  

  const filteredEuropeo = jsonData.filter(item => {
    const nameMatch = item.europeo.toLowerCase().includes(filterEuropeo);
    return nameMatch;
  });

  displayData(filteredEuropeo);  // Muestra los datos filtrados
}

function filterPais() {
  const filterPais = document.getElementById('paisFilter').value.toLowerCase();
  

  const filteredPais = jsonData.filter(item => {
    const nameMatch = item.pais.toLowerCase().includes(filterPais);
    return nameMatch;
  });

  displayData(filteredPais);  // Muestra los datos filtrados
}

function filterEstadio() {
  const filterEstadio = document.getElementById('estadioFilter').value.toLowerCase();
  

  const filteredEstadio = jsonData.filter(item => {
    const nameMatch = item.estadio.toLowerCase().includes(filterEstadio);
    return nameMatch;
  });

  displayData(filteredEstadio);  // Muestra los datos filtrados
}