import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
