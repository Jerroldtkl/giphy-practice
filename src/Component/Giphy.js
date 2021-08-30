import React, { useState, useEffect } from "react";

function Giphy() {
  const [post, setPost] = useState("");
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    const uri = `https://api.giphy.com/v1/gifs/search?api_key=iInrXoDTJnWBPH41u1Pnfc09eGy7z29l&q=mood&limit=25&offset=0&rating=g&lang=en`;

    try {
      const res = await fetch(uri);

      const data = await res.json();
      console.log(data);

      let randomNumber = Math.floor(Math.random() * data.data.length);

      setPost(data.data[randomNumber].images.fixed_height.url);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <React.Fragment>
      <div>
        <button onClick={fetchPost}>
          Unsure on how you're feeling? Hit me!
        </button>
      </div>
      <div>
        <img className="giphy" src={post} alt={""}></img>
      </div>
    </React.Fragment>
  );
}

export default Giphy;
