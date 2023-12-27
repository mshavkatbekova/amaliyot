import React from "react";
import { useDoc } from "../hooks/useDoc";
import { Link, useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const { recipe, isPending } = useDoc(id);
  console.log(recipe);
  return (
    <div className="max-container">
      <Link to="/">Go Back</Link>
      {isPending && <h1 className="text-3xl ">Loading...</h1>}
      {recipe && (
        <>
          <div className=" relative h-56 overflow-hidden rounded-lg md:h-96">
            <figure className="mb-5">
              <img src={recipe.images[0]} alt="" />
            </figure>
            <div>
              <h2 className="mb-3">
                <span className="font-bold">Title: </span> {recipe.title}
              </h2>
              <p>{recipe.method}</p>
              <p>
                <span className="font-bold">CookingTime: </span>{" "}
                {recipe.cookingTime}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Recipe;
