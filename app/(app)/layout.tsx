import type { ReactNode } from 'react';
import { ZeroProvider } from '@/components/zero-provider';
import { Navbar } from '@/components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const userID = "u001";
  const auth = "";
  return (
    <ZeroProvider userID={userID} auth={auth}>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </ZeroProvider>
  );
}
