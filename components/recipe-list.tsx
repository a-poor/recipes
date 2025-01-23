'use client';

import Link from 'next/link';
import { useQuery } from '@rocicorp/zero/react';
import { useZero } from '@/components/zero-provider';

export function RecipeList() {
  const z = useZero();
  const [recipes] = useQuery(z.query.recipe);
  return (
    <ul className="list-disc list-inside">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </li>
      ))}
    </ul>
  );
}
