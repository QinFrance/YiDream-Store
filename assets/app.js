fetch("apps.json")
  .then(response => {
    if (!response.ok) throw new Error("apps.json introuvable");
    return response.json();
  })
  .then(apps => {
    const container = document.getElementById("apps");

    apps.forEach(app => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${app.name}</h2>
        <p>${app.description}</p>
        <a class="btn" href="${app.page}">Ouvrir</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("apps").innerHTML =
      `<p style="color:red">Erreur : ${err.message}</p>`;
  });
