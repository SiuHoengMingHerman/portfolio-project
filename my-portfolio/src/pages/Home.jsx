import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(data => {
        console.log("Backend response:", data);
        setData(data);
      })
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>

      <section>
        <h2>About Me</h2>
        <p>This is a brief introduction about myself.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>You can reach me at herman200336@gmail.com.</p>
      </section>

      <pre>{data ? JSON.stringify(data, null, 2) : "Loading API data..."}</pre>
    </div>
  );
};

export default Home;
``