fetch("productos.json")
.then(response => response.json())
.then(productos => {

    console.log(productos);

    productos.forEach(producto => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" width="200">
            <p>RD$ ${producto.precio}</p>
        `;

        document.body.appendChild(div);

    });

});