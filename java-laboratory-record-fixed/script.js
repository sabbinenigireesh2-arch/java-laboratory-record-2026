const assignments = [
  { week: 1, title: "Week 1 Assignment", description: "Java installation and setup.", file: "assignments/week1.pdf" },
  { week: 2, title: "Week 2 Assignment", description: "Student and object-oriented programming exercises.", file: "assignments/week2.pdf" },
  { week: 3, title: "Week 3 Assignment", description: "Java basics, variables, and operators.", file: "assignments/week3.pdf" },
  { week: 4, title: "Week 4 Assignment", description: "This assignment has not been assigned yet." },
  { week: 5, title: "Week 5 Assignment", description: "This assignment has not been assigned yet." },
  { week: 6, title: "Week 6 Assignment", description: "Inheritance and related Java concepts.", file: "assignments/week6.pdf" },
  { week: 7, title: "Week 7 Assignment", description: "Exception handling and I/O stream exercises.", file: "assignments/week7.pdf" },
  { week: 8, title: "Week 8 Assignment", description: "String handling and inheritance exercises.", file: "assignments/week8.pdf" },
  { week: 9, title: "Week 9 Assignment", description: "Packages and interfaces (12 experiments).", file: "assignments/week9.pdf" },
  { week: 10, title: "Week 10 Assignment", description: "Java practical assignment.", file: "assignments/week10.pdf" },
  { week: 11, title: "Week 11 Assignment", description: "Character streams and multithreaded programming.", file: "assignments/week11.pdf" },
  { week: 12, title: "Week 12 Assignment", description: "Multithreaded programming and lambda expressions (15 exercises).", file: "assignments/week12.pdf" }
];

const grid = document.getElementById("assignment-grid");
const availableCount = assignments.filter(item => item.file).length;
document.getElementById("available-count").textContent = availableCount;

assignments.forEach(item => {
  const card = document.createElement("article");
  card.className = `assignment-card ${item.file ? "available" : "pending-card"}`;

  const status = item.file
    ? '<span class="status ready">PDF AVAILABLE</span>'
    : '<span class="status pending">NOT ASSIGNED YET</span>';

  const actions = item.file
    ? `<div class="card-actions">
         <a class="card-button" href="${item.file}" target="_blank" rel="noopener">View PDF ↗</a>
         <a class="card-button secondary" href="${item.file}" download>Download ↓</a>
       </div>`
    : '<div class="card-actions"><span class="card-button secondary" aria-disabled="true">Coming later</span></div>';

  card.innerHTML = `
    <div class="card-top">
      <div class="file-icon">${item.file ? "▤" : "＋"}</div>
      ${status}
    </div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    ${actions}
  `;
  grid.appendChild(card);
});
