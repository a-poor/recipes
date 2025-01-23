'use client';

import { useState } from "react";
import { useQuery } from "@rocicorp/zero/react";
import { useZero } from "@/components/zero-provider";


export function Recipe({ recipeId }: { recipeId: string }) {
  const z = useZero();
  const [recipe] = useQuery(z.query.recipe.related("tags").related("ingredients").related("steps").where("ownerId", "=", z.userID).where("id", recipeId).one());
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">
        <EditableText value={recipe?.name ?? ""} onChange={(value) => {
          z.mutate.recipe.update({ id: recipeId, name: value });
        }} />
      </h1>
      <div>
        <ul className="inline-flex gap-2">
          {recipe?.tags.map((tag) => (
            <li key={tag.id} className="bg-gray-200 text-sm rounded-md px-1 py-0.5">
              <EditableText value={tag.name} onChange={(value) => {
                z.mutate.recipeTag.update({ id: tag.id, name: value });
              }} />
            </li>
          ))}
        </ul>
      </div>
      <section>
        <h2 className="text-lg font-semibold">Description</h2>
        <p>
          <EditableText value={recipe?.description ?? ""} onChange={(value) => {
            z.mutate.recipe.update({ id: recipeId, description: value });
          }} />
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Ingredients</h2>
        <ul className="grid grid-cols-4 gap-2 max-w-md">
          {recipe?.ingredients.map((ingredient) => (
            <li key={ingredient.id} className="col-span-4 grid grid-cols-subgrid">
              <div>
                <EditableText value={ingredient.quantity ?? ""} onChange={(value) => {
                  z.mutate.ingredient.update({ id: ingredient.id, quantity: value });
                }} />
              </div>
              <div>
                <EditableText value={ingredient.unit ?? ""} onChange={(value) => {
                  z.mutate.ingredient.update({ id: ingredient.id, unit: value });
                }} />
              </div>
              <div>
                <EditableText value={ingredient.name ?? ""} onChange={(value) => {
                  z.mutate.ingredient.update({ id: ingredient.id, name: value });
                }} />
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
            <li key={step.id}>
              <EditableText value={step.description ?? ""} onChange={(value) => {
                z.mutate.recipeStep.update({ id: step.id, description: value });
              }} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

function EditableText({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  const [editing, setEditing] = useState(false);
  if (!editing) {
    return (
      <span onClick={() => setEditing(true)}>
        {value}
      </span>
    );
  }
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => setEditing(false)}
      className="border border-gray-300 rounded-md px-1 py-0.5"
    />
  );
}
