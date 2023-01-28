import "./About.scss";

import { useState, useEffect } from "react";

const About = () => {
  const [user, setUser] = useState([]);
  const userURL = "https://api.escuelajs.co/api/v1/users?offset=0&limit=6";
  useEffect(() => {
    fetch(userURL)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <section className="about" id="about">
      <h1>About</h1>
      <h2 className="about-h2">meet our teem</h2>
      <div className="users-container">
        {user.map((u) => {
          const { id, email, avatar, name } = u;
          return (
            <article key={id} className="user">
              <img src={avatar} alt={name} />
              <h2>{name}</h2>
              <p>{email}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
