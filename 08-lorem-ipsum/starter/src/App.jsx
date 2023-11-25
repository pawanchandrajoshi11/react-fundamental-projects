import { useState } from "react";
import data from "./data";
import { v4 as uuid } from "uuid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const intCount = parseInt(count);
    setText(data.slice(0, intCount));
  };
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((para) => {
          return <p key={uuid()}>{para}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
