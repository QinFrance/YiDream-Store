fetch('../apps.json')
.then(r=>r.json())
.then(apps=>{
  const c=document.getElementById('apps');
  apps.forEach(app=>{
    c.innerHTML += `
      <div class="card">
        <h2>${app.name}</h2>
        <p>${app.description}</p>
        <a class="btn" href="${app.page}">Ouvrir</a>
      </div>`;
  });
});
