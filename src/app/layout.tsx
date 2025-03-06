import type { Metadata } from 'next';
import { StoreProvider } from './StoreProvider';

import '../styles/globals.css';
import '../styles/customStyles.scss';

// todo - fix the outline issue

export const metadata: Metadata = {
  title: 'Restaurant Demo',
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
