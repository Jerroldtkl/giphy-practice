import React, { useState, useEffect } from "react";
import Mood from "./Component/Mood";
import Random from "./Component/Random";
import Giphy from "./Component/Giphy";

function App() {
  // const [post, setPost] = useState("");
  // const [error, setError] = useState(null);

  // const fetchPost = async () => {
  //   const uri = `https://api.giphy.com/v1/gifs/search?api_key=iInrXoDTJnWBPH41u1Pnfc09eGy7z29l&q=mood&limit=25&offset=0&rating=g&lang=en`;

  //   try {
  //     const res = await fetch(uri);

  //     const data = await res.json();
  //     console.log(data);
  //     setPost(data.data[0].images.fixed_height.url);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchPost();
  //   console.log(post);
  // }, []);

  // console.log(post);
  return (
    <React.Fragment>
      <div className="container">
        <h2>Giphy</h2>
        <Mood></Mood>
        {/* <Random></Random> */}
        <Giphy></Giphy>
      </div>
    </React.Fragment>
  );
}

export default App;
