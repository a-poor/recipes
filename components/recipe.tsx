'use client';

import { useQuery } from "@rocicorp/zero/react";
import { useZero } from "@/components/zero-provider";

export function Recipe({ recipeId }: { recipeId: string }) {
  const z = useZero();
  const [recipe] = useQuery(z.query.recipe.related("tags").related("ingredients").related("steps").where("ownerId", "=", z.userID).where("id", recipeId).one());
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">
        {recipe?.name}
      </h1>
      <div>
        <ul className="inline-flex gap-2">
          {recipe?.tags.map((tag) => (
            <li key={tag.id} className="bg-gray-200 text-sm rounded-md px-1 py-0.5">
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
      <section>
        <h2 className="text-lg font-semibold">Description</h2>
        <p>{recipe?.description}</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Ingredients</h2>
        <ul className="grid grid-cols-4 gap-2 max-w-md">
          {recipe?.ingredients.map((ingredient) => (
            <li key={ingredient.id} className="col-span-4 grid grid-cols-subgrid">
              <div>
                {ingredient.quantity}
              </div>
              <div>
                {ingredient.unit}
              </div>
              <div>
                {ingredient.name}
              </div>
              <div>
                x
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Steps</h2>
        <ol className="list-decimal list-inside">
          {recipe?.steps.map((step) => (
            <li key={step.id}>{step.description}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}