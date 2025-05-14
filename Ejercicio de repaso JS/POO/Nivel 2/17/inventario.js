class Producto {
  constructor(nombre, categoria, precio, stock) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }
}

class Tienda {
  constructor() {
    this.productos = [];
    this.descuentosCategoria = {};
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  aplicarDescuento(categoria, porcentaje) {
    this.descuentosCategoria[categoria] = porcentaje;
  }

  buscarProducto(nombre) {
    return this.productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  }

  actualizarStock(nombre, cantidad) {
    const producto = this.buscarProducto(nombre);
    if (producto) producto.stock -= cantidad;
  }

  obtenerPrecioFinal(producto) {
    const descuento = this.descuentosCategoria[producto.categoria] || 0;
    return producto.precio * (1 - descuento / 100);
  }
}

class Carrito {
  constructor(tienda) {
    this.tienda = tienda;
    this.items = [];
  }

  agregar(nombre, cantidad) {
    const producto = this.tienda.buscarProducto(nombre);
    if (!producto) return console.log("Producto no encontrado.");
    if (producto.stock < cantidad) return console.log("Stock insuficiente.");

    const existente = this.items.find(i => i.producto.nombre === nombre);
    if (existente) {
      if (producto.stock < existente.cantidad + cantidad) {
        return console.log("Stock insuficiente para esa cantidad adicional.");
      }
      existente.cantidad += cantidad;
    } else {
      this.items.push({ producto, cantidad });
    }

    console.log(`${cantidad} ${nombre}(s) añadido(s) al carrito.`);
  }

  quitar(nombre, cantidad) {
    const index = this.items.findIndex(i => i.producto.nombre === nombre);
    if (index === -1) return console.log("Producto no está en el carrito.");

    const item = this.items[index];
    if (cantidad >= item.cantidad) {
      this.items.splice(index, 1);
      console.log(`${nombre} eliminado completamente del carrito.`);
    } else {
      item.cantidad -= cantidad;
      console.log(`${cantidad} ${nombre}(s) removido(s) del carrito.`);
    }
  }

  mostrarCarrito() {
    console.log("Carrito actual:");
    this.items.forEach(i => {
      const precioFinal = this.tienda.obtenerPrecioFinal(i.producto);
      console.log(`${i.producto.nombre} (${i.cantidad}) - $${precioFinal.toFixed(2)} c/u`);
    });
  }

  finalizarCompra() {
    let total = 0;
    this.items.forEach(i => {
      const precioFinal = this.tienda.obtenerPrecioFinal(i.producto);
      total += precioFinal * i.cantidad;
      this.tienda.actualizarStock(i.producto.nombre, i.cantidad);
    });
    console.log(`Total a pagar: $${total.toFixed(2)}`);
    this.items = [];
  }
}


const tienda = new Tienda();

tienda.agregarProducto(new Producto("Camiseta del Real Madrid", "Ropa", 120.0, 50));
tienda.agregarProducto(new Producto("Pantalón Levis", "Ropa", 40.0, 20));
tienda.agregarProducto(new Producto("Portatil", "Electrónica", 1000.0, 2));
tienda.agregarProducto(new Producto("Cascos", "Electrónica", 100.0, 4));

tienda.aplicarDescuento("Ropa", 10);

const carrito = new Carrito(tienda);

carrito.agregar("Camiseta del Real Madrid", 2);
carrito.agregar("Portatil", 1);
carrito.quitar("Cascos", 1);
carrito.mostrarCarrito();
carrito.finalizarCompra();

console.log("Inventario después de la compra:");
tienda.productos.forEach(p =>
  console.log(`${p.nombre} - Stock: ${p.stock}`)
);
