# ✦ Pritam Kumar — Digital Identity Portfolio

A modern, responsive developer portfolio built with **HTML, CSS and vanilla JavaScript**.

It includes a unique **PRITAM AI** portfolio assistant that works **without an API**. The chatbot uses a local knowledge base and rule/intent matching in JavaScript.

## Features

- Futuristic dark developer UI
- Fully responsive mobile layout
- About, Skills, Projects, Education and Contact sections
- Project category filters
- Dark / light theme with localStorage
- Scroll reveal animations
- GitHub and LinkedIn links
- Interactive terminal-style hero card
- No-API portfolio chatbot
- Chatbot quick questions
- No backend required
- No API key required

## Project Structure

```text
pritam-ai-portfolio/
├── index.html
├── style.css
├── script.js
├── chatbot.js
├── README.md
└── .gitignore
```

## Run Locally

This project is a static website, so you can simply open `index.html` in a browser.

For a better development experience, use VS Code with Live Server or another local static server.

## Customize Your Portfolio

### 1. Update personal information

Open `index.html` and update:

- About section
- Education
- Projects
- Contact information
- Social links

### 2. Update chatbot knowledge

Open `chatbot.js`.

The main object is:

```javascript
const portfolioKnowledge = {
  name: "Pritam Kumar",
  role: "...",
  skills: [],
  projects: [],
  github: "...",
  linkedin: "...",
  email: "..."
};
```

You can add more intents to make the chatbot understand more questions.

### 3. Add your resume

Place your resume inside an `assets` folder:

```text
assets/resume.pdf
```

Then add a link to `resume.pdf` in `index.html`.

## Important

This chatbot is **not a generative AI model**. It does not call ChatGPT, Gemini or any other external AI service. It is a JavaScript rule/knowledge based assistant.

That makes it:

- Free to run
- API-key free
- Easy to understand
- Easy to host as a static website

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload all project files.
3. Make the repository public if you want to showcase it publicly.
4. Open repository **Settings → Pages**.
5. Select the deployment source/branch and publish the site.

## GitHub

https://github.com/pritam4503

## LinkedIn

https://www.linkedin.com/in/pritam-kumar-79601a379

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Intersection Observer API

## Future Upgrades

Possible future versions can add:

- Voice input
- Text-to-speech
- More advanced NLP
- Project live-demo buttons
- Resume download
- Backend
- AI API integration

## License

You can customize this project for your personal portfolio.
