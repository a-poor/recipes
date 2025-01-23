'use client';

import { useQuery } from "@rocicorp/zero/react";
import { useZero } from "@/components/zero-provider";

export function Recipe({ recipeId }: { recipeId: string }) {
  const z = useZero();
  const [recipe] = useQuery(z.query.recipe.where("ownerId", "=", z.userID).where("id", recipeId).one());
  const [ingredients] = useQuery(z.query.ingredient.where("ownerId", "=", z.userID).where("recipeId", "=", recipeId));
  const [steps] = useQuery(z.query.recipeStep.where("ownerId", "=", z.userID).where("recipeId", "=", recipeId));
  const [tags] = useQuery(z.query.recipeTag.where("ownerId", "=", z.userID).where("recipeId", "=", recipeId));
  return (
    <div>
      <h1>{recipe?.name}</h1>
      <p>{recipe?.description}</p>
      <pre>
        {JSON.stringify(recipe, null, 2)}
      </pre>
      <h2>Ingredients</h2>
      <pre>
        {JSON.stringify(ingredients, null, 2)}
      </pre>
      <h2>Steps</h2>
      <pre>
        {JSON.stringify(steps, null, 2)}
      </pre>
      <h2>Tags</h2>
      <pre>
        {JSON.stringify(tags, null, 2)}
      </pre>
    </div>
  );
}