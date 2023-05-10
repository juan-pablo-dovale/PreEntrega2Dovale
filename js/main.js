var nav = 6;
var monto = 0;

function sumar(precio) {
    monto += precio;
    nav = 6;
    return monto, nav;
}

function handleClick() {
    if (nav === 6) {
        nav = parseFloat(prompt("Ingrese el número correspondiente para agregar el producto deseado. Ingrese '0' para terminar la orden.\n1-Motherboard($17000).\n2-RAM 16Gb($12000).\n3-GPU 8Gb VRAM($150000).\n4-CPU($80000).\n5-Gabinete($30000)"));
    } else if (!(nav <= 6 && nav >= 0)) {
        nav = parseFloat(prompt("Ingrese un número válido! Ingrese '6' para volver al menú"));
    }

    switch (nav) {
        case 1:
            alert("Agregado al carrito: Motherboard($17000)");
            sumar(17000);
            break;
        case 2:
            alert("Agregado al carrito: RAM 16Gb($12000)");
            sumar(12000);
            break;
        case 3:
            alert("Agregado al carrito: GPU 8Gb VRAM($150000)");
            sumar(150000);
            break;
        case 4:
            alert("Agregado al carrito: CPU($80000)");
            sumar(80000);
            break;
        case 5:
            alert("Agregado al carrito: Gabinete($30000)");
            sumar(30000);
            break;
    }

    localStorage.setItem('montoTotal', JSON.stringify(monto));

    var montoAlmacenado = localStorage.getItem('montoTotal');

    if (montoAlmacenado) {
        monto = JSON.parse(montoAlmacenado);
        alert("Monto total es de: $" + monto);
    }
}
var boton = document.getElementById('miBoton');
boton.addEventListener('click', handleClick);
