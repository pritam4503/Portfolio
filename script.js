document.addEventListener("DOMContentLoaded", () => {
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  $("#year").textContent = new Date().getFullYear();

  // Mobile navigation
  $("#menuBtn").addEventListener("click", () => $("#nav").classList.toggle("open"));
  $$("#nav a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("open")));

  // Theme
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") document.body.classList.add("light");
  $("#themeBtn").textContent = document.body.classList.contains("light") ? "☾" : "☀";
  $("#themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light");
    const light = document.body.classList.contains("light");
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
    $("#themeBtn").textContent = light ? "☾" : "☀";
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));

  // Project filtering
  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      $$(".project-card").forEach(card => {
        const visible = filter === "all" || card.dataset.category.includes(filter);
        card.style.display = visible ? "" : "none";
      });
    });
  });

  // Cursor glow on desktop
  const glow = $("#cursorGlow");
  window.addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  // Chat UI
  const panel = $("#chatPanel");
  $("#chatFab").addEventListener("click", () => {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) $("#chatInput").focus();
  });
  $("#chatClose").addEventListener("click", () => panel.classList.remove("open"));

  const messages = $("#chatMessages");
  function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = `msg ${type}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  addMessage("Hi! I'm Pritam AI ✦\nAsk me about Pritam's skills, projects, education or contact details.", "bot");

  function sendQuestion(question) {
    const clean = question.trim();
    if (!clean) return;
    addMessage(clean, "user");
    setTimeout(() => addMessage(getPortfolioAnswer(clean), "bot"), 350);
  }

  $("#chatForm").addEventListener("submit", e => {
    e.preventDefault();
    sendQuestion($("#chatInput").value);
    $("#chatInput").value = "";
  });

  $$(".suggestions button").forEach(btn => {
    btn.addEventListener("click", () => sendQuestion(btn.dataset.q));
  });
});
