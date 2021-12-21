import { useState } from "react";
import AboutMe from "./AboutMe";
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
          <span>$</span>
          <form onSubmit={onSubmitForm}>
            <input
              value={value}
              onChange={handleChange}
              onKeyPress={handleKeypress}
              type="text"
            />
          </form>
        </div>
        <div className="terminal__output">
          {tag === "ab" ? <AboutMe /> : ""}
          {tag === "pjs" ? <Projects /> : ""}
          {tag === "ct" ? <p>Contact</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
