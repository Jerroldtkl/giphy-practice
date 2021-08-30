import React, { useState, useEffect } from "react";
import Giphy from "./Giphy";

function Random() {
  const [random, setRandom] = useState();
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    const uri = `https://api.giphy.com/v1/gifs/search?api_key=iInrXoDTJnWBPH41u1Pnfc09eGy7z29l&q=feelings&limit=25&offset=0&rating=g&lang=en`;

    try {
      const res = await fetch(uri);

      const data = await res.json();
      console.log(data);

      let randomNumber = Math.floor(Math.random() * data.data.length);

      setRandom(data.data[randomNumber].images.fixed_height.url);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  function handleRandom() {
    setRandom(random);
  }

  return (
    <div>
      <button onClick={fetchPost}>
        <img src={random} alt={""}></img>
        Unsure on how you're feeling? Hit me!
      </button>
    </div>
  );
}

export default Random;
