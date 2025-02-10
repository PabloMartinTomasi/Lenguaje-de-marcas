// Ruta del archivo JSON
const jsonUrl = 'tienda.json';
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
        
    })
    .catch(error => {
        console.error('Error:', error);
    });



// Función para mostrar los datos en la tabla
function MostrarPedidos(data) {
    const tableBody = document.getElementById('data-table-body-pedidos');
    tableBody.innerHTML = ''; // Limpiar tabla antes de agregar los datos

    data.forEach(item => {
        const row = document.createElement('tr');

        const numero_pedidoCell = document.createElement('td');
        numero_pedidoCell.textContent = item.numero_pedido;
        row.appendChild(numero_pedidoCell);

        const fecha_compraCell = document.createElement('td');
        fecha_compraCell.textContent = item.fecha_compra;
        row.appendChild(fecha_compraCell);

        const fecha_entregaCell = document.createElement('td');
        fecha_entregaCell.textContent = item.fecha_entrega;
        row.appendChild(fecha_entregaCell);

        const total_facturaCell = document.createElement('td');
        total_facturaCell.textContent = item.total_factura;
        row.appendChild(total_facturaCell);

        tableBody.appendChild(row);
    });
}