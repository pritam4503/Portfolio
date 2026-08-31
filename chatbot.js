/*
  PRITAM AI — No API Portfolio Chatbot
  This is a rule/knowledge based assistant.
  Edit the data below to update the chatbot.
*/

const portfolioKnowledge = {
  name: "Pritam Kumar",
  role: "B.Tech Computer Science & Engineering student and web developer",
  college: "Government Engineering College, Gopalganj (BEU)",
  session: "2025–2029",
  skills: ["HTML", "CSS", "JavaScript", "C", "Java", "Python", "OOP", "basic DSA/problem solving", "Git/GitHub", "responsive web design"],
  projects: [
    "Tic Tac Toe — interactive browser game with winner and draw detection.",
    "Calculator — responsive calculator using HTML, CSS and JavaScript.",
    "Weather App — responsive frontend weather project.",
    "Student Management System — academic project concept focused on student records.",
    "Task Manager — productivity project concept for organizing tasks.",
    "AI-Style Portfolio — this portfolio with a no-API smart chatbot."
  ],
  github: "https://github.com/pritam4503",
  linkedin: "https://www.linkedin.com/in/pritam-kumar-79601a379",
  email: "pritamkumar4503@gmail.com"
};

const intents = [
  {
    keys: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
    answer: () => "Hello! 👋 I'm Pritam AI. Ask me about Pritam's skills, projects, education or contact details."
  },
  {
    keys: ["who are you", "what are you", "about you", "introduce yourself"],
    answer: () => "I'm Pritam AI, a no-API portfolio assistant. I answer questions using Pritam's portfolio knowledge."
  },
  {
    keys: ["who is pritam", "about pritam", "tell me about pritam", "introduce pritam"],
    answer: () => `${portfolioKnowledge.name} is a ${portfolioKnowledge.role}. He is currently studying at ${portfolioKnowledge.college}.`
  },
  {
    keys: ["skill", "skills", "technology", "technologies", "language", "languages", "know"],
    answer: () => `Pritam's current skills include:\n• ${portfolioKnowledge.skills.join("\n• ")}`
  },
  {
    keys: ["project", "projects", "work", "built", "made", "portfolio projects"],
    answer: () => `Pritam's projects include:\n• ${portfolioKnowledge.projects.join("\n• ")}`
  },
  {
    keys: ["tic tac toe", "tictactoe"],
    answer: () => "Tic Tac Toe is an interactive browser game built with HTML, CSS and JavaScript, including winner and draw detection."
  },
  {
    keys: ["calculator"],
    answer: () => "The Calculator project is a responsive web calculator built with HTML, CSS and JavaScript."
  },
  {
    keys: ["weather"],
    answer: () => "Pritam has built a responsive Weather App project to practice frontend development and data handling."
  },
  {
    keys: ["education", "college", "study", "degree", "btech", "b.tech", "university"],
    answer: () => `Pritam is pursuing ${portfolioKnowledge.session.includes("2025") ? "B.Tech in Computer Science & Engineering" : "B.Tech CSE"} at ${portfolioKnowledge.college}.`
  },
  {
    keys: ["github", "code", "repository", "repo"],
    answer: () => `GitHub: ${portfolioKnowledge.github}`
  },
  {
    keys: ["linkedin", "profile", "professional profile"],
    answer: () => `LinkedIn: ${portfolioKnowledge.linkedin}`
  },
  {
    keys: ["contact", "email", "mail", "reach", "hire"],
    answer: () => `You can contact Pritam at ${portfolioKnowledge.email}.\nGitHub: ${portfolioKnowledge.github}\nLinkedIn: ${portfolioKnowledge.linkedin}`
  },
  {
    keys: ["resume", "cv"],
    answer: () => "The portfolio is designed to present Pritam's skills, education and projects. Add your resume.pdf file and link it from the navigation or contact section when ready."
  },
  {
    keys: ["java"],
    answer: () => "Pritam works with Core Java and has been learning OOP and problem solving."
  },
  {
    keys: ["javascript", "js"],
    answer: () => "Pritam uses JavaScript for DOM manipulation, events, interactive UI and browser projects."
  },
  {
    keys: ["html", "css", "frontend", "front end", "web development"],
    answer: () => "Pritam focuses on frontend web development using HTML, CSS and JavaScript, with responsive design."
  },
  {
    keys: ["thank", "thanks", "thank you"],
    answer: () => "You're welcome! ✦ Good luck exploring the portfolio."
  }
];

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s.-]/g, " ").replace(/\s+/g, " ").trim();
}

function getPortfolioAnswer(question) {
  const q = normalize(question);

  // Exact-ish intent matching
  for (const intent of intents) {
    if (intent.keys.some(key => q.includes(normalize(key)))) {
      return intent.answer();
    }
  }

  // Helpful fallback based on common question words
  if (q.includes("how") && (q.includes("contact") || q.includes("reach"))) {
    return `You can reach Pritam at ${portfolioKnowledge.email}.`;
  }

  return "I don't have that information in my portfolio knowledge yet. Try asking about Pritam's skills, projects, education, GitHub, LinkedIn or contact details.";
}
