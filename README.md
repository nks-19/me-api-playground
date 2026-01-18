# Me API Playground

A full-stack Me-API Playground built as part of the Backend Assessment (Track A).
This project stores my real profile data in a database, exposes it via REST APIs, and renders it through a minimal frontend.

🚀 Live Demo

Live URL: (add after deploy, optional if not deployed)

Resume (PDF): /resume.pdf

🛠 Tech Stack

Backend: Node.js, Express.js

Database: SQLite

Frontend: HTML, CSS, Vanilla JavaScript

API Style: REST

Hosting: Local / Deployable to Render / Railway / Netlify (static)

📂 Features

Profile API with summary & links

Work experience, education, certifications

Skills grouped by category

Projects with links

Fully API-driven UI (no hardcoded resume data)

Health check endpoint

SQLite database with schema & seed data

🔗 API Endpoints
Health
GET /health

Profile
GET /profile

Work Experience
GET /work

Education
GET /education

Certifications
GET /certifications

Projects
GET /projects
GET /projects/search?keyword=AWS

Skills
GET /skills
GET /skills/search?name=Java

🧩 Database Schema

profile – name, sub-heading, summary, links

work – company, role, duration

education – degree, institution, duration, score

certifications – title, issuer, year, link

projects – title, description, link

skills – category, name

▶️ How to Run Locally
npm install
node index.js


Then seed the database (run once):

http://localhost:3000/seed


Open in browser:

http://localhost:3000

📌 Notes

All resume data is fetched from the database via APIs

No inline CSS or JavaScript

Clean separation of backend and frontend

Designed to be simple, readable, and production-minded

👩‍💻 Author

Neha Kumari Singh

GitHub: https://github.com/nks-19

LinkedIn: https://www.linkedin.com/in/neha-kumari-singh-89385a24b/

Portfolio: https://nks-portfolio.netlify.app/

GeeksForGeeks: https://www.geeksforgeeks.org/profile/nehakumari0g3a

✅ Submission Checklist

✔ Working APIs

✔ Seeded with real data

✔ README included

✔ Resume link included

✔ Clean UI

🚨 FINAL STEP (NOW)

Save this as README.md

Commit & push

Submit the repo link

You are READY.
This is a strong, clean submission.

give me to copy paste in readme

Copy everything below exactly as it is and paste it into your README.md.
Do not edit unless you want to add a live URL later.

Me API Playground

A full-stack Me API Playground built as part of the Backend Assessment (Track A).
This project stores my real profile data in a database, exposes it via REST APIs, and renders it through a minimal frontend.

🚀 Project Overview

Backend APIs to manage personal profile data

SQLite database seeded with real resume information

Minimal frontend that consumes APIs (no hardcoded data)

Clean, production-minded structure

🛠 Tech Stack

Backend: Node.js, Express.js

Database: SQLite

Frontend: HTML, CSS, Vanilla JavaScript

API Style: REST

📂 Features

Profile with summary & external links

Work experience

Education details

Certifications (with certificate links)

Projects with live/demo links

Technical skills grouped by category

Health check endpoint

Fully API-driven UI

🔗 API Endpoints
Health
GET /health

Profile
GET /profile

Work Experience
GET /work

Education
GET /education

Certifications
GET /certifications

Projects
GET /projects
GET /projects/search?keyword=AWS

Skills
GET /skills
GET /skills/search?name=Java

🧩 Database Schema

profile – name, sub-heading, email, links, summary

work – company, role, duration

education – degree, institution, duration, score

certifications – title, issuer, year, certificate link

projects – title, description, link

skills – category, name

▶️ How to Run Locally
npm install
node index.js


Seed the database (run once):

http://localhost:3000/seed


Open in browser:

http://localhost:3000

📄 Resume

Resume PDF is included in the project and accessible from the UI

Direct link: /resume.pdf

📌 Notes

All UI data is fetched dynamically from APIs

No inline CSS or JavaScript

Simple, readable, and production-oriented

Focused on correctness and clarity over over-engineering

👩‍💻 Author

Neha Kumari Singh

GitHub: https://github.com/nks-19

LinkedIn: https://www.linkedin.com/in/neha-kumari-singh-89385a24b/

Portfolio: https://nks-portfolio.netlify.app/

GeeksForGeeks: https://www.geeksforgeeks.org/profile/nehakumari0g3a