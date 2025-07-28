async function fetchProjects() {
    const url = "https://raw.githubusercontent.com/JohnVitor-Dev/BackEnd-Portfolio/refs/heads/main/projects.json";
    const projectsGrid = document.getElementById("projects-grid");

    const res = await fetch(url);
    const projects = await res.json();

    for (const project of projects) {
        const repoFullName = project.repo_url.split("github.com/")[1];
        const repoRes = await fetch(`https://api.github.com/repos/${repoFullName}`);
        const repoData = await repoRes.json();

        // Ícone de status
        const statusIcon =
            project.status === "done"
                ? "✅ <span class='status-text'>Concluído</span>"
                : "🚧 <span class='status-text'>Em construção</span>";

        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
        <div class="project-status">${statusIcon}</div>
        <h3>${repoData.name}</h3>
        <p>${repoData.description || "Sem descrição no GitHub."}</p>
        <p><strong>Tecnologias:</strong> ${project.techs.join(", ")}</p>
        <a href="${project.repo_url}" target="_blank">GitHub</a> |
        <a href="${project.deploy_url}" target="_blank">Deploy</a>
      `;
        projectsGrid.appendChild(card);
    }
}

fetchProjects().catch(err => {
    console.error("Erro ao carregar projetos:", err);
});
