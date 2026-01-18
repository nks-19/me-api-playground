const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/database");

// middleware
app.use(cors());
app.use(express.json());

// health check (REQUIRED by assessment)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// seed profile data (run once)
app.get("/seed", (req, res) => {
  db.serialize(() => {
    db.run(`DELETE FROM profile`);
    db.run(`DELETE FROM skills`);
    db.run(`DELETE FROM projects`);
    db.run(`DELETE FROM work`);

    db.run(
      `INSERT INTO profile (name, sub_heading, email, github, linkedin, geeksforgeeks, portfolio, summary)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        "Neha Kumari Singh",
        "Full Stack Web Developer | Software Engineer | Cloud Enthusiast",
        "nehakumarisingh1904@gmail.com",
        "https://github.com/nks-19",
        "https://www.linkedin.com/in/neha-kumari-singh-89385a24b/",
        "https://www.geeksforgeeks.org/profile/nehakumari0g3a",
        "https://nks-portfolio.netlify.app/",
        "Aspiring Full Stack Developer with a strong foundation in backend development, REST APIs, and database design. Experienced in building scalable web applications using JavaScript, Node.js, and modern frontend technologies, with hands-on exposure to cloud platforms (AWS) and API-driven architectures. Comfortable working with data structures, problem-solving, and collaborative development in fast-paced environments. Actively exploring AI-assisted development and retrieval-based systems, with a focus on writing clean, production-ready code.",
      ],
    );
    db.run(
      `INSERT INTO work (company, role, duration)
   VALUES (?, ?, ?)`,
      [
        "Intelligent Cloud Application",
        "Full Stack Developer Intern",
        "Jun 2024 – Jun 2025",
      ],
    );
    const education = [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Government College of Engineering, Kalahandi",
        duration: "2022 – 2026",
        score: "CGPA: 8.81",
      },
      {
        degree: "Intermediate in Science",
        institution: "Centurion Public School, Rayagada",
        duration: "2020 – 2022",
        score: "90.8%",
      },
      {
        degree: "Matriculation",
        institution: "New Life English Medium School, Rayagada",
        duration: "2018 – 2020",
        score: "84%",
      },
    ];
    education.forEach((e) => {
      db.run(
        `INSERT INTO education (degree, institution, duration, score)
     VALUES (?, ?, ?, ?)`,
        [e.degree, e.institution, e.duration, e.score],
      );
    });

    const certifications = [
  {
    title: "160 Days Problem Solving",
    issuer: "GeeksForGeeks",
    year: "2025",
    link: "https://drive.google.com/file/d/1jR-nb6fdGaTuo8JmhzpvJbDAQj12BFIk/view"
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    year: "2024",
    link: "https://www.freecodecamp.org/certification/nks_19__/responsive-web-design"
  },
  {
    title: "Smart India Hackathon (Internal)",
    issuer: "GCEK",
    year: "2024",
    link: "https://drive.google.com/file/d/1kKbR-yqOhUjDR21_UN7XbwpVOuQhVENw/view"
  },
  {
    title: "Operation Placement",
    issuer: "PrepInsta, Career247",
    year: "2025",
    link: "https://www.eduskillsfoundation.org/"
  },
  {
    title: "Data Visualization",
    issuer: "Tata Group (Forage)",
    year: "2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_r4wEtnsdAEuSfmssw_1746641498112_completion_certificate.pdf"
  }
];

    certifications.forEach((c) => {
      db.run(
        `INSERT INTO certifications (title, issuer, year, link)
     VALUES (?, ?, ?, ?)`,
        [c.title, c.issuer, c.year, c.link],
      );
    });

    db.run(
      `INSERT INTO projects (title, description, link)
   VALUES (?, ?, ?)`,
      [
        "Note Taking App",
        "Built a serverless application using AWS that reduced API response time by 20%",
        "https://neha-notes-app.netlify.app/",
      ],
    );

    db.run(
      `INSERT INTO projects (title, description, link)
   VALUES (?, ?, ?)`,
      [
        "Portfolio Website",
        "Developed a responsive personal portfolio website",
        "https://nks-portfolio.netlify.app/",
      ],
    );

    db.run(
      `INSERT INTO projects (title, description, link)
   VALUES (?, ?, ?)`,
      [
        "Heatmap of Boudh District",
        "Designed a responsive ReactJS web page displaying a heatmap of the Boudh district",
        "https://github.com/nks-19/boudh_frontend.git/",
      ],
    );

    const skills = [
      { category: "Programming", name: "Java" },
      { category: "Programming", name: "Python" },
      { category: "Programming", name: "C (with DSA)" },

      { category: "Web Development", name: "HTML" },
      { category: "Web Development", name: "CSS" },
      { category: "Web Development", name: "JavaScript" },
      { category: "Web Development", name: "React" },
      { category: "Web Development", name: "API Integration" },

      {
        category: "Cloud Services",
        name: "AWS (S3, CloudFront, Lambda, Cognito, Route53)",
      },
      { category: "Database", name: "MySQL" },
      { category: "Database", name: "SQL" },
      { category: "Testing", name: "Postman" },
      { category: "Testing", name: "Unit Testing" },
      { category: "Data Visualization", name: "Power BI" },
      { category: "AI/ML", name: "ML Basics & Generative AI" },
    ];

    skills.forEach((skill) => {
      db.run(`INSERT INTO skills (category, name) VALUES (?, ?)`, [
        skill.category,
        skill.name,
      ]);
    });
  });

  res.json({ message: "Database seeded successfully" });
});
// get profile
app.get("/profile", (req, res) => {
  db.get(`SELECT * FROM profile LIMIT 1`, [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});
// get work experience
app.get("/work", (req, res) => {
  db.all(`SELECT * FROM work`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});
app.get("/education", (req, res) => {
  db.all(`SELECT * FROM education`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
app.get("/certifications", (req, res) => {
  db.all(`SELECT * FROM certifications`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// get all projects
app.get("/projects", (req, res) => {
  db.all(`SELECT * FROM projects`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});
// search projects by keyword
app.get("/projects/search", (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword query is required" });
  }

  db.all(
    `SELECT * FROM projects 
     WHERE title LIKE ? OR description LIKE ?`,
    [`%${keyword}%`, `%${keyword}%`],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    },
  );
});
// get all skills
app.get("/skills", (req, res) => {
  db.all(`SELECT * FROM skills`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// search skills by name
app.get("/skills/search", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Skill name query is required" });
  }

  db.all(
    `SELECT * FROM skills WHERE name LIKE ?`,
    [`%${name}%`],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    },
  );
});

app.use(express.static("public"));

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
