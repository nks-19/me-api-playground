const API_BASE = "http://localhost:3000";

// ==============================
// Profile + Sub-heading + Summary
// ==============================
async function loadProfile() {
  const res = await fetch(`${API_BASE}/profile`);
  const p = await res.json();

  document.querySelector(".subtitle").textContent = p.sub_heading;
  document.getElementById("summary").textContent = p.summary;

  document.getElementById("profile").innerHTML = `
    <p><strong>Email:</strong> ${p.email}</p>

    <div class="button-group">
      <a href="${p.github}" target="_blank" class="btn">GitHub</a>
      <a href="${p.linkedin}" target="_blank" class="btn">LinkedIn</a>
      <a href="${p.geeksforgeeks}" target="_blank" class="btn">GeeksForGeeks</a>
      <a href="${p.portfolio}" target="_blank" class="btn primary">Portfolio</a>
    </div>
  `;
}

// ==============================
// Work Experience
// ==============================
async function loadWork() {
  const res = await fetch(`${API_BASE}/work`);
  const data = await res.json();

  document.getElementById("work").innerHTML = data
    .map(
      (w) => `
      <div class="work-item">
        <strong>${w.role}</strong><br/>
        ${w.company}<br/>
        ${w.duration}
      </div>
    `
    )
    .join("");
}

// ==============================
// Education
// ==============================
async function loadEducation() {
  const res = await fetch(`${API_BASE}/education`);
  const data = await res.json();

  document.getElementById("education").innerHTML = data
    .map(
      (e) => `
      <div class="edu-item">
        <strong>${e.degree}</strong><br/>
        ${e.institution}<br/>
        ${e.duration} | ${e.score}
      </div>
    `
    )
    .join("");
}

// ==============================
// Certifications
// ==============================
async function loadCertifications() {
  const res = await fetch(`${API_BASE}/certifications`);
  const data = await res.json();

  document.getElementById("certifications").innerHTML = data
    .map(
      (c) => `
      <div class="cert-item">
        <strong>${c.title}</strong><br/>
        ${c.issuer} (${c.year})<br/>
        <a href="${c.link}" target="_blank">View Certificate</a>
      </div>
    `
    )
    .join("");
}

// ==============================
// Projects
// ==============================
async function loadProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  const projects = await res.json();

  document.getElementById("projects").innerHTML = projects
    .map(
      (p) => `
      <div class="project">
        <strong>${p.title}</strong><br/>
        ${p.description}<br/>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `
    )
    .join("");
}

// ==============================
// Skills
// ==============================
async function loadSkills() {
  const res = await fetch(`${API_BASE}/skills`);
  const skills = await res.json();

  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const skillsContainer = document.getElementById("skills");
  skillsContainer.innerHTML = "";

  for (const category in grouped) {
    const div = document.createElement("div");
    div.className = "skill-group";
    div.innerHTML = `
      <strong>${category}:</strong>
      ${grouped[category].join(", ")}
    `;
    skillsContainer.appendChild(div);
  }
}

// ==============================
// Load everything
// ==============================
loadProfile();
loadWork();
loadEducation();
loadCertifications();
loadProjects();
loadSkills();
