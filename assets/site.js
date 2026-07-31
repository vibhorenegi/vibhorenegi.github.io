/* ============================================================
   DO NOT EDIT — shared rendering logic for every page.
   Content lives in data.js, not here.
   ============================================================ */

function renderTopbar(activePage){
  const navHTML = NAV.map(item =>
    `<a href="${item.href}" class="${item.id === activePage ? 'active' : ''}">${item.label}</a>`
  ).join('');
  document.getElementById('topbar').innerHTML = navHTML;
}

function renderSidebar(){
  document.title = DATA.name + " — Astrophysicist";

  const linksHTML = Object.entries(DATA.links).map(([label, href]) => `<a href="${href}">${label} ↗</a>`).join('');

  document.getElementById('sidebar').innerHTML = `
    <img class="photo" id="js-photo" src="" alt="" style="display:none;">
    <!-- <svg class="finder" viewBox="0 0 120 120" role="img" aria-label="Finder chart illustration">
      <circle class="field" cx="60" cy="60" r="52"/>
      <circle class="field inner" cx="60" cy="60" r="34"/>
      <g class="tick">
        <line x1="60" y1="8" x2="60" y2="16"/>
        <line x1="60" y1="104" x2="60" y2="112"/>
        <line x1="8" y1="60" x2="16" y2="60"/>
        <line x1="104" y1="60" x2="112" y2="60"/>
      </g>
      <circle class="star" cx="38" cy="34" r="1.4"/>
      <circle class="star" cx="82" cy="30" r="1"/>
      <circle class="star" cx="90" cy="70" r="1.6"/>
      <circle class="star" cx="30" cy="80" r="1"/>
      <circle class="star" cx="72" cy="92" r="1.2"/>
      <circle class="star" cx="46" cy="70" r=".8"/>
      <circle class="star" cx="66" cy="46" r=".9"/>
      <circle class="target" cx="60" cy="60" r="7"/>
      <line class="crosshair" x1="60" y1="49" x2="60" y2="55"/>
      <line class="crosshair" x1="60" y1="65" x2="60" y2="71"/>
      <line class="crosshair" x1="49" y1="60" x2="55" y2="60"/>
      <line class="crosshair" x1="65" y1="60" x2="71" y2="60"/>
      <text x="60" y="18" text-anchor="middle">N</text>
      <text x="60" y="106" text-anchor="middle">S</text>
      <text x="14" y="63" text-anchor="middle">E</text>
      <text x="106" y="63" text-anchor="middle">W</text>
    </svg> -->
    <div class="id-block">
      <h1>${DATA.name}</h1>
      <div class="role">${DATA.role}</div>
      <div class="inst">${DATA.institution}</div>
      <div class="coords mono">${DATA.location}</div>
    </div>
    <div class="sidebar-links">${linksHTML}</div>
  `;

  if (DATA.photo){
    const photoEl = document.getElementById('js-photo');
    photoEl.src = DATA.photo;
    photoEl.alt = DATA.name;
    photoEl.style.display = 'block';
  }
}

function renderFooter(){
  document.getElementById('footer').innerHTML =
    `${DATA.name} · built with a static template · last updated
     ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`;
}

function renderTags(items){
  return items.map(t => `<span class="tag">${t}</span>`).join('');
}

function renderLog(items){
  return items.map(n => `
    <div class="log-entry">
      <time class="mono">${n.date}</time>
      <div>${n.text}</div>
    </div>
  `).join('');
}

// generic list renderer for leadership / service / talks / proposals
function renderItemList(items){
  return items.map(r => `
    <div class="item-row">
      <div class="when mono">${r.when}</div>
      <div class="what">
        <strong>${r.what}</strong>
        ${r.where ? `<div class="where">${r.where}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderPublications(pubs){
  return pubs.map(p => {
    const linkList = Object.entries(p.links || {}).map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
    return `
      <div class="pub">
        <div class="year mono">${p.year}</div>
        <div>
          <div class="title">${p.title}</div>
          <div class="authors">${p.authors}</div>
          <div class="venue">${p.venue}</div>
          ${linkList ? `<div class="pub-links">${linkList}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderCV(cv){
  const groups = [];
  if (cv.positions?.length){
    groups.push(`<div class="cv-group"><h3>Positions</h3>` +
      cv.positions.map(r => `
        <div class="cv-row">
          <div class="when mono">${r.when}</div>
          <div class="what"><strong>${r.what}</strong><div class="where">${r.where}</div></div>
        </div>
      `).join('') + `</div>`);
  }
  if (cv.education?.length){
    groups.push(`<div class="cv-group"><h3>Education</h3>` +
      cv.education.map(r => `
        <div class="cv-row">
          <div class="when mono">${r.when}</div>
          <div class="what"><strong>${r.what}</strong><div class="where">${r.where}</div></div>
        </div>
      `).join('') + `</div>`);
  }
  if (cv.awards?.length){
    groups.push(`<div class="cv-group"><h3>Awards & Grants</h3>` +
      cv.awards.map(r => `
        <div class="cv-row">
          <div class="when mono">${r.when}</div>
          <div class="what">${r.what}</div>
        </div>
      `).join('') + `</div>`);
  }
  if (cv.talks?.length){
    groups.push(`<div class="cv-group"><h3>Talks & Presentations</h3>` +
      cv.talks.map(r => `
        <div class="cv-row">
          <div class="when mono">${r.when}</div>
          <div class="what"><strong>${r.what}</strong><div class="where">${r.where}</div></div>
        </div>
      `).join('') + `</div>`);
  }
  if (cv.service?.length){
    groups.push(`<div class="cv-group"><h3>Service</h3>` +
      cv.service.map(r => `
        <div class="cv-row">
          <div class="when mono">${r.when}</div>
          <div class="what"><strong>${r.what}</strong><div class="where">${r.where}</div></div>
        </div>
      `).join('') + `</div>`);
  }
  return groups.join('');
}

function renderContact(contact){
  return Object.entries(contact).map(([k,v]) => `
    <div class="contact-item">
      <div class="k mono">${k}</div>
      <div class="v">${v}</div>
    </div>
  `).join('');
}