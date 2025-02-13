import type { Metadata } from 'next';
import { StoreProvider } from './StoreProvider';

import '../../src/styles/globals.scss';

export const metadata: Metadata = {
  title: 'NextJs Demo',
  description: 'Demo project for RTG Mentorship program',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
