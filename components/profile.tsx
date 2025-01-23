'use client';

import { useQuery } from '@rocicorp/zero/react';
import { useZero } from '@/components/zero-provider';

export function ProfileIcon() {
  const z = useZero();
  const [user] = useQuery(z.query.user.where("id", "u001").one());
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
      {user?.username.slice(0, 1)}
      {!user && "?"}
    </div>
  );
}