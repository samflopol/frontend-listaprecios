(function () {
  const listEl = document.getElementById("product-list");

  if (!listEl) return;

  const products =
    typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS) ? PRODUCTS : [];

  const formatPrice = (n) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(n);

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
})();
