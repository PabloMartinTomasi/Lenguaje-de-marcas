document.addEventListener("DOMContentLoaded", function() {
    fetch("tienda.json")  // Cargar el JSON
        .then(response => response.json())
        .then(data => {
            mostrarPedidos(data);
            mostrarClientes(data);
            mostrarFactura(data);
            mostrarProductosVendidos2023(data);
            mostrarProductosVendidos2024(data);
        })
        .catch(error => {
            console.error("Error cargando los datos:", error);
            document.body.innerHTML = "<h1>Error cargando los datos.</h1>";
        });
});

function formatearFecha(fecha) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
}

function mostrarPedidos(data) { //Funcion para poder observar en el html los pedidos que se han efectuado
    const tablaPedidos = document.querySelector("#tabla-pedidos tbody");

    Object.keys(data.pedidos).forEach(year => {
        Object.keys(data.pedidos[year]).forEach(trimestre => {
            data.pedidos[year][trimestre].forEach(pedido => {
                const fila = document.createElement("tr");

                const productosLista = pedido.productos.map(prod => 
                    `${prod.nombre_producto} (x${prod.unidades}) - ${prod.precio.toFixed(2)} €`
                ).join("<br>");

                fila.innerHTML = `
                    <td>${pedido.numero_pedido}</td>
                    <td>${formatearFecha(pedido.fecha_compra)}</td>
                    <td>${formatearFecha(pedido.fecha_entrega)}</td>
                    <td>${productosLista}</td>
                    <td>${pedido.total_factura.toFixed(2)} €</td>
                `;

                tablaPedidos.appendChild(fila);
            });
        });
    });
}

function mostrarClientes(data) { //funcion para poder mostrar a todos los clientes que han efectuado algun pedido
    const tablaClientes = document.querySelector("#tabla-clientes tbody");
    const clientes = {};

    Object.keys(data.pedidos).forEach(year => {
        Object.keys(data.pedidos[year]).forEach(trimestre => {
            data.pedidos[year][trimestre].forEach(pedido => {
                const cliente = pedido.cliente;

                if (!clientes[cliente.email]) {
                    clientes[cliente.email] = {
                        nombre: cliente.nombre,
                        apellidos: cliente.apellidos,
                        telefono: cliente.telefono,
                        email: cliente.email,
                        direccion: cliente.direccion || {},
                        numPedidos: 0
                    };
                }

                clientes[cliente.email].numPedidos++;

            });
        });
    });

    Object.keys(clientes).forEach(email => {
        const cliente = clientes[email];
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.email}</td>
            <td>${cliente.direccion.calle || ''}, ${cliente.direccion.ciudad || ''}, ${cliente.direccion.codigo_postal || ''}, ${cliente.direccion.provincia || ''}</td>
            <td>${cliente.numPedidos}</td> <!-- Número de pedidos -->
        `;

        tablaClientes.appendChild(fila);
    });
}


function mostrarFactura(data) { //funcion para poder observar la factura de un cliente
    const tablaFactura = document.querySelector("#tabla-factura tbody");

    Object.keys(data.pedidos).forEach(year => {
        Object.keys(data.pedidos[year]).forEach(trimestre => {
            data.pedidos[year][trimestre].forEach(pedido => {
                const fila = document.createElement("tr");

                // Agrupar los productos en una celda con unidades y precio unitario
                let productosHTML = pedido.productos.map(prod => 
                    `${prod.nombre_producto} (x${prod.unidades}) - ${prod.precio.toFixed(2)} €`
                ).join("<br>");

                fila.innerHTML = `
                    <td>${pedido.cliente.nombre} ${pedido.cliente.apellidos}</td>
                    <td>${pedido.numero_pedido}</td>
                    <td>${formatearFecha(pedido.fecha_compra)}</td>
                    <td>${productosHTML}</td>
                    <td>${pedido.total_factura.toFixed(2)} €</td>
                `;

                tablaFactura.appendChild(fila);
            });
        });
    });
}

function mostrarProductosVendidos2023(data) { //funcion para poder observar los productos vendidos en el primer trimestre de 2023
    const tablaProductosVendidos2023 = document.querySelector("#tabla-productos2023 tbody");

    if (data.pedidos["2023"] && data.pedidos["2023"]["T1"]) {
        data.pedidos["2023"]["T1"].forEach(pedido => {
            pedido.productos.forEach(prod => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${prod.nombre_producto}</td>
                    <td>${prod.referencia}</td>
                    <td>${prod.precio}</td>
                    <td>${prod.unidades}</td>
                `;
                tablaProductosVendidos2023.appendChild(fila);
            });
        });
    } else {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td colspan="2">No hay productos vendidos en el primer trimestre de 2023.</td>`;
        tablaProductos.appendChild(fila);
    }
}

function mostrarProductosVendidos2024(data) { //funcion para poder mostrar los productos vendidos en el ultimo trimestre de 2024
    const tablaProductosVendidos2024 = document.querySelector("#tabla-productos2024 tbody");

    if (data.pedidos["2024"] && data.pedidos["2024"]["T4"]) {
        data.pedidos["2024"]["T4"].forEach(pedido => {
            pedido.productos.forEach(prod => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${prod.nombre_producto}</td>
                    <td>${prod.referencia}</td>
                    <td>${prod.precio}</td>
                    <td>${prod.unidades}</td>
                `;
                tablaProductosVendidos2024.appendChild(fila);
            });
        });
    } else {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td colspan="2">No hay productos vendidos en el primer trimestre de 2023.</td>`;
        tablaProductos.appendChild(fila);
    }
}