import { Suspense } from "react";
import { Recipe } from "@/components/recipe";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Recipe recipeId={params.id} />
      </Suspense>
    </div>
  );
}
