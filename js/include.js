async function loadComponent(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

loadComponent("navbar", "components/navbar/navbar.html");
loadComponent("footer", "components/footer/footer.html");
