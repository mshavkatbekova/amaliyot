import React from "react";
import useCollection from "../hooks/useCollection";
import RecipiesList from "../components/RecipiesList";

function Home() {
  
  const { documents: recipies, isPending, error } = useCollection();

  return (
    <div className="max-container">
      {isPending && <h1>Loading...</h1>}
      {recipies &&  <RecipiesList recipies={recipies}/>}
    </div>
  );
}

export default Home;
