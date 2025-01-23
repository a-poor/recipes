'use client';

import { useMemo } from 'react';
import { Zero } from '@rocicorp/zero';
import { useZero as _useZero, ZeroProvider as ZeroProviderBase } from '@rocicorp/zero/react';
import { schema } from '@/schema';
import type { Schema } from '@/schema';


export const ZeroProvider = ({ children, userID, auth }: {
  children: React.ReactNode;
  userID: string;
  auth: string;
}) => {
  const z = useMemo(() => new Zero({
    userID,
    auth,
    server: process.env.NEXT_PUBLIC_CACHE_SERVER,
    schema,
    kvStore: "mem", // "idb"
  }), [userID, auth]);
  return (
    <ZeroProviderBase zero={z}>
      {children}
    </ZeroProviderBase>
  );
};

export const useZero = _useZero<Schema>;

