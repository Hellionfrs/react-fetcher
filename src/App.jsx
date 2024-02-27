import { useEffect, useState } from "react";
import "./App.css";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/`;

export function App() {
  const [fact, setFact] = useState("cat fact");
  const [firstWord, setFirstWord] = useState("first");
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        const firstWord = fact.split(" ", 3).join(" ");
        setFirstWord(firstWord);

        setImage(`https://cataas.com/cat/says/${firstWord}`);
      });
  }, []);
  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && (
          <img
            src={image}
            alt={`Img extracted using first word ${firstWord}`}
          />
        )}
      </section>
    </main>
  );
}
