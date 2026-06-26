function esc(str) {
  const m = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' };
  return String(str).replace(/[&<>"']/g, c => m[c]);
}

fetch("productos.json")
.then(r => r.json())
.then(productos => {
  productos.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${esc(p.nombre)}</h2><img src="${esc(p.imagen)}" width="200"><p>RD$ ${esc(p.precio)}</p>`;
    document.body.appendChild(div);
  });
});