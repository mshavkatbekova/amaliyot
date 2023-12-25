import React from "react";
import useCollection from "../hooks/useCollection";

function Home() {
  const { documents, isPending, error } = useCollection();
  console.log(documents);
  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="max-container">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        deleniti ipsam quae incidunt, mollitia recusandae, cum autem optio quam
        magni, laboriosam dolorem facilis! Fugit earum, maxime voluptate
        recusandae corrupti vero.
      </p>
    </div>
  );
}

export default Home;
