import "./App.css";
import Phrases from "./assets/phrase.json";
import { useState } from "react";
import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";
import Author from "./components/Author/Author";
import Phrase from "./components/Phrase/Phrase";

function App() {
  const imgArray = [image1, image2, image3, image4];

  const getImg = () => {
    let image = imgArray[Math.floor(Math.random(imgArray) * imgArray.length)];
    return image;
  };
  const getPhrase = () => {
    let phrase = Phrases[Math.floor(Math.random(Phrases) * Phrases.length)];
    return phrase;
  };

  const [img, setImage] = useState(getImg);
  const [phrase, setPhrase] = useState(getPhrase);

  const changePhrase = () => {
    let newImg = getImg();
    let newPhrase = getPhrase();

    while (newImg == img || newPhrase.quote == phrase.quote) {
      newImg = getImg();
      newPhrase = getPhrase();
    }
    setPhrase(newPhrase);
    setImage(newImg);
  };

  return (
    <div className="App" style={{ backgroundImage: `url("${img}")` }}>
      <button className="btn" onClick={changePhrase}>
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
      <h1>Fortune cookies</h1>
      <div className="phraseContainer">
        <Phrase phrase={phrase.quote} />
        <Author author={phrase.author} />
      </div>
    </div>
  );
}

export default App;
