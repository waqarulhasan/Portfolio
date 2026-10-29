export default function Home() {
  const skills = [
    ".NET Core",
    "ASP.NET MVC",
    "Angular",
    "React",
    "Next.js",
    "React Native",
    ".NET MAUI",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "Azure",
    "AWS",
    "Docker",
    "Node.js",
  ];

  const projects = [
    "VZTA Platform",
    "Guul Prime",
    "YouBega",
    "Neos-7",
    "E-Invoice",
    "WendeWork",
    "BrainGain",
    "AD Log",
    "CertCom",
  ];

  return (
    <main style={{
      background:"#0a0a0a",
      color:"#fff",
      minHeight:"100vh",
      fontFamily:"Inter, sans-serif"
    }}>
      {/* HERO */}
      <section style={{
        padding:"120px 10%",
        textAlign:"center",
        background:
          "linear-gradient(135deg,#111827,#0f172a,#1e293b)"
      }}>
        <p style={{color:"#60a5fa"}}>FULL STACK SOFTWARE ENGINEER</p>

        <h1 style={{
          fontSize:"4rem",
          margin:"20px 0"
        }}>
          Waqar UL Hassan
        </h1>

        <p style={{
          maxWidth:"800px",
          margin:"auto",
          color:"#cbd5e1",
          fontSize:"1.2rem"
        }}>
          Building scalable web, mobile, and cloud solutions with
          ASP.NET Core, Angular, React, React Native, .NET MAUI,
          Azure, and AWS.
        </p>

        <div style={{
          marginTop:"30px",
          display:"flex",
          gap:"15px",
          justifyContent:"center",
          flexWrap:"wrap"
        }}>
          <a
            href="mailto:waqarulhassan2040@gmail.com"
            style={{
              background:"#2563eb",
              padding:"12px 24px",
              borderRadius:"8px",
              color:"#fff",
              textDecoration:"none"
            }}
          >
            Contact Me
          </a>

          <a
            href="tel:03337419194"
            style={{
              border:"1px solid #2563eb",
              padding:"12px 24px",
              borderRadius:"8px",
              color:"#fff",
              textDecoration:"none"
            }}
          >
            Call Now
          </a>
        </div>

        <div style={{
          marginTop:"60px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
          gap:"20px"
        }}>
          <div>
            <h2>6+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>30+</h2>
            <p>Projects Delivered</p>
          </div>

          <div>
            <h2>10+</h2>
            <p>Technologies</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{padding:"80px 10%"}}>
        <h2>About Me</h2>

        <p style={{
          color:"#cbd5e1",
          lineHeight:"1.8"
        }}>
          Full-Stack Software Engineer with more than 6 years
          of experience delivering enterprise web applications,
          mobile applications, SaaS solutions, and cloud-native
          systems for international clients.
        </p>
      </section>

      {/* SKILLS */}
      <section style={{
        padding:"80px 10%",
        background:"#111827"
      }}>
        <h2>Skills</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
          gap:"15px",
          marginTop:"30px"
        }}>
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                background:"#1e293b",
                padding:"15px",
                borderRadius:"10px",
                textAlign:"center"
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{padding:"80px 10%"}}>
        <h2>Experience</h2>

        <div style={{marginTop:"30px"}}>
          <div style={{marginBottom:"25px"}}>
            <h3>DigiTech Fox</h3>
            <p>Full Stack .NET Developer (2023 - Present)</p>
          </div>

          <div style={{marginBottom:"25px"}}>
            <h3>Expert Soft Solution</h3>
            <p>Full Stack Developer (2022 - 2023)</p>
          </div>

          <div style={{marginBottom:"25px"}}>
            <h3>Auxilium Digital</h3>
            <p>Full Stack Developer (2021 - 2022)</p>
          </div>

          <div style={{marginBottom:"25px"}}>
            <h3>Ultimate Solutions</h3>
            <p>Team Lead / ASP.NET Core Developer</p>
          </div>

          <div style={{marginBottom:"25px"}}>
            <h3>East Flicker</h3>
            <p>ASP.NET Developer</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{
        padding:"80px 10%",
        background:"#111827"
      }}>
        <h2>Featured Projects</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          marginTop:"30px"
        }}>
          {projects.map((project) => (
            <div
              key={project}
              style={{
                background:"#1e293b",
                padding:"20px",
                borderRadius:"12px"
              }}
            >
              <h3>{project}</h3>
              <p style={{color:"#cbd5e1"}}>
                Enterprise-grade software solution.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{
        padding:"100px 10%",
        textAlign:"center"
      }}>
        <h2>Let's Build Something Great</h2>

        <p style={{marginTop:"20px"}}>
          waqarulhassan2040@gmail.com
        </p>

        <p>03337419194</p>

        <a
          href="mailto:waqarulhassan2040@gmail.com"
          style={{
            display:"inline-block",
            marginTop:"25px",
            background:"#2563eb",
            padding:"15px 30px",
            borderRadius:"10px",
            color:"#fff",
            textDecoration:"none"
          }}
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
