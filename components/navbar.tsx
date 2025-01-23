import { Suspense } from "react";
import Link from "next/link";
import { ProfileIcon } from "@/components/profile";

export function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link href="/">
          TheRecipes
        </Link>
      </div>
      <ul className="flex items-center gap-2">
        <li>
          <Link href="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <Link href="#">
            Ingredients
          </Link>
        </li>
        <li>
          <Link href="#">
            People
          </Link>
        </li>
        <li>
          <Link href="#">
            Search
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileIcon />
      </Suspense>
    </div>
  );
}
