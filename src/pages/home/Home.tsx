import { useState } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const [value, setValue] = useState("");
  const [tag, setTag] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(value);
    if (value === "") {
      alert("Please enter a value");
    } else {
      setTag(value);
      setValue("");
    }
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      onSubmitForm(e);
    }
  };

  return (
    <div className="home">
      <div className="terminal">
        <div className="terminal__form">
          <form onSubmit={onSubmitForm}>
          <span >C:/User/&gt;</span>
            <input
              value={value}
              onChange={handleChange}
              onKeyPress={handleKeypress}
              type="text"
              autoFocus
            />
          </form>
        </div>
        <div className="terminal__output">
          <div className="title">
            <h1>
              Hi, This is my portfolio interactive terminal with commands in
              help menu to navigate through the website and know more about me.
            </h1>
            <p>Used technologies React, Typescript, Sass</p>
            <p>
              Run the commands to see my information:
              <p>about me (ab)</p>
              <p>projects (pjs)</p>
              <p>contact (ct)</p>
            </p>
          </div>

          {tag === "ab" ? <AboutMe /> : ""}
          {tag === "pjs" ? <Projects /> : ""}
          {tag === "ct" ? <Contact /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
