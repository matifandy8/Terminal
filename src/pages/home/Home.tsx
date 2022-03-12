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
            <span>$</span>
            <input
              value={value}
              onChange={handleChange}
              onKeyPress={handleKeypress}
              type="text"
            />
          </form>
        </div>
        <div className="terminal__output">
          <div className="title">
            <h1 >Hi, This is my portfolio interactive terminal with commands in help menu to navigate through the website and know more about me.</h1>
          <p>Used technologies React, Typescript, Sass</p>
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
