import { Suspense } from 'react';
import { RecipeList } from '@/components/recipe-list';

export default function Page() {
  return (
    <div>
      <h1>Hello World</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeList />
      </Suspense>
    </div>
  );
}
