(function () {
  const listEl = document.getElementById("product-list");
  if (!listEl) return;

  const formatPrice = (n) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(n);

 
  fetch("http://10.57.30.104:3000/products")
    .then((res) => res.json())
    .then((products) => {
      listEl.replaceChildren();
      for (const p of products) {
        const li = document.createElement("li");
        li.className = "item";

        const name = document.createElement("span");
        name.className = "item-name";
        name.textContent = p.name;

        const price = document.createElement("span");
        price.className = "item-price";
        price.textContent = formatPrice(p.price);

        li.append(name, price);
        listEl.appendChild(li);
      }
    })
    .catch((err) => {
      listEl.innerHTML = "<li>Error al cargar productos</li>";
      console.error(err);
    });
})();
