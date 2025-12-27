export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section hero">
        <img
          src="/profile.jpg"
          alt="Palak Sinmore"
          className="profile-img"
        />

        <h1>Palak Sinmore</h1>
        <h2>Data Science Engineering Student</h2>

        <p>
          Aspiring Data Analyst passionate about data visualization,
          analytics, and solving real-world problems using data-driven
          insights.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="section">
        <h2>About Me</h2>
        <p style={{ marginTop: "20px", maxWidth: "800px", lineHeight: "1.6" }}>
          I am a 3rd-year BTech student in Data Science Engineering with a
          strong interest in analytics and business intelligence. I enjoy
          working with structured data, extracting insights, and presenting
          them in a meaningful and visual manner.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="section">
        <h2>Skills</h2>
        <div className="cards">
          <div className="card">
            <h3>Programming</h3>
            <p>Python, SQL</p>
          </div>

          <div className="card">
            <h3>Libraries</h3>
            <p>Pandas, NumPy, Matplotlib, Seaborn, Scikit Learn</p>
          </div> 

          <div className="card">
            <h3>Analytics</h3>
            <p>Data Cleaning, Visualization</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Git, GitHub, Excel,PowerBI,Tableau,Jupyter Notebook, VS Code</p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>Retail Sales Forecasting</h3>
            <p>
              Performed Exploratory Data Analysis and forecasting on
              historical retail sales data to identify trends and patterns.
            </p>
          </div>

          <div className="card">
            <h3>Green Supply Chain Optimizer</h3>
            <p>
              Analytics-based project focused on optimizing supply chains
              with sustainability and cost efficiency in mind.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: sinmorepalak@gmail.com</p>
        <p>GitHub: github.com/sinmorepalak-git1</p>
        <p>LinkedIn: linkedin.com/in/Palak Sinmore</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Palak Sinmore | Portfolio Website
      </footer>
    </>
  );
}