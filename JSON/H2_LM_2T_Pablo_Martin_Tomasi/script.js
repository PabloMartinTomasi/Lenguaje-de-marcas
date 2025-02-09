// Ruta del archivo JSON
const jsonUrl = 'tienda.json';
let jsonData = [];
let pedidosData = {};

// Función para cargar datos desde el JSON
fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        // Cargar clientes
        if (data && data.clientes) {
            jsonData = data.clientes;  // Accede correctamente al arreglo 'clientes'
            displayData(jsonData);     // Muestra los datos de los clientes
        } else {
            throw new Error('La propiedad "clientes" no se encuentra en el JSON');
        }

        // Cargar pedidos (tanto 2023 como 2024)
        if (data && data.pedidos) {
            pedidosData = data.pedidos;  // Accede a los pedidos
            displaypedidos(pedidosData); // Muestra los datos de los pedidos del 2023
            displayPedidos(pedidosData); // Muestra los datos de los pedidos del 2024
        } else {
            throw new Error('La propiedad "pedidos" no se encuentra en el JSON');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Función para mostrar los datos de los clientes en la tabla
function displayData(data) {
    const tableBody = document.getElementById('data-table-body-clientes');
    tableBody.innerHTML = ''; // Limpiar tabla antes de agregar los datos

    data.forEach(item => {
        const row = document.createElement('tr');

        const id_clienteCell = document.createElement('td');
        nombreCell.textContent = item.id_cliente;
        row.appendChild(id_clienteCell);

        const nombreCell = document.createElement('td');
        nombreCell.textContent = item.nombre;
        row.appendChild(nombreCell);

        const apellidosCell = document.createElement('td');
        apellidosCell.textContent = item.apellidos;
        row.appendChild(apellidosCell);

        const telefonoCell = document.createElement('td');
        telefonoCell.textContent = item.telefono;
        row.appendChild(telefonoCell);

        const direccionCell = document.createElement('td');
        direccionCell.textContent = `${item.direccion.calle}, ${item.direccion.ciudad}, ${item.direccion.codigo_postal}, ${item.direccion.provincia}`;
        row.appendChild(direccionCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = item.email || 'No disponible';  // Si no hay email, mostrar "No disponible"
        row.appendChild(emailCell);

        tableBody.appendChild(row);
    });
}

// Función para mostrar los pedidos del año 2023 en la tabla
function displaypedidos(pedidos) {
    const tableBody = document.getElementById('data-table-body-pedidos');
    tableBody.innerHTML = ''; // Limpiar tabla antes de agregar los datos

    if (pedidos["2023"]) {
        for (const trimestre in pedidos["2023"]) {
            pedidos["2023"][trimestre].forEach(pedido => {
                const row = document.createElement('tr');

                const id_clienteCell = document.createElement('td');
                id_clienteCell.textContent = pedido.id_cliente;
                row.appendChild(id_clienteCell);

                const numero_pedidoCell = document.createElement('td');
                numero_pedidoCell.textContent = pedido.numero_pedido;
                row.appendChild(numero_pedidoCell);

                const fecha_compraCell = document.createElement('td');
                fecha_compraCell.textContent = pedido.fecha_compra;
                row.appendChild(fecha_compraCell);

                const fecha_entregaCell = document.createElement('td');
                fecha_entregaCell.textContent = pedido.fecha_entrega;
                row.appendChild(fecha_entregaCell);

                const total_facturaCell = document.createElement('td');
                total_facturaCell.textContent = `$${pedido.total_factura.toFixed(2)}`;
                row.appendChild(total_facturaCell);

                const nombre_productoCell = document.createElement('td');
                nombre_productoCell.textContent = pedido.productos.nombre_producto;
                row.appendChild(nombre_productoCell);

                const referenciaCell = document.createElement('td');
                referenciaCell.textContent = pedido.productos.referencia;
                row.appendChild(referenciaCell);

                const precioCell = document.createElement('td');
                precioCell.textContent = `$${pedido.productos.precio.toFixed(2)}`;
                row.appendChild(precioCell);

                const unidadesCell = document.createElement('td');
                unidadesCell.textContent = pedido.productos.unidades;
                row.appendChild(unidadesCell);

                tableBody.appendChild(row);
            });
        }
    } else {
        console.error('No se encontraron pedidos para el año 2023.');
    }
}

// Función para mostrar los pedidos del año 2024 en la tabla
function displayPedidos(pedidos) {
    const tableBody = document.getElementById('data-table-body-Pedidos');
    tableBody.innerHTML = ''; // Limpiar tabla antes de agregar los datos

    if (pedidos["2024"]) {
        for (const trimestre in pedidos["2024"]) {
            pedidos["2024"][trimestre].forEach(pedido => {
                const row = document.createElement('tr');

                const id_clienteCell = document.createElement('td');
                id_clienteCell.textContent = pedido.id_cliente;
                row.appendChild(id_clienteCell);

                const numero_pedidoCell = document.createElement('td');
                numero_pedidoCell.textContent = pedido.numero_pedido;
                row.appendChild(numero_pedidoCell);

                const fecha_compraCell = document.createElement('td');
                fecha_compraCell.textContent = pedido.fecha_compra;
                row.appendChild(fecha_compraCell);

                const fecha_entregaCell = document.createElement('td');
                fecha_entregaCell.textContent = pedido.fecha_entrega;
                row.appendChild(fecha_entregaCell);

                const total_facturaCell = document.createElement('td');
                total_facturaCell.textContent = `$${pedido.total_factura.toFixed(2)}`;
                row.appendChild(total_facturaCell);

                const nombre_productoCell = document.createElement('td');
                nombre_productoCell.textContent = pedido.productos.nombre_producto;
                row.appendChild(nombre_productoCell);

                const referenciaCell = document.createElement('td');
                referenciaCell.textContent = pedido.productos.referencia;
                row.appendChild(referenciaCell);

                const precioCell = document.createElement('td');
                precioCell.textContent = `$${pedido.productos.precio.toFixed(2)}`;
                row.appendChild(precioCell);

                const unidadesCell = document.createElement('td');
                unidadesCell.textContent = pedido.productos.unidades;
                row.appendChild(unidadesCell);

                tableBody.appendChild(row);
            });
        }
    } else {
        console.error('No se encontraron pedidos para el año 2024.');
    }
}
