import AppNavbar from '@/components/AppNavbar';
import pkg from '@/package.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Container } from 'react-bootstrap';

const siteUrl = pkg.homepage || 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: 'DraugSköll',
    template: '%s | DraugSköll',
  },
  applicationName: 'DraugSköll',
  keywords: [
    'DraugSköll',
    'Project Management',
    'Next.js',
    'React',
    'TypeScript',
  ],
  openGraph: {
    title: 'DraugSköll',
    description: 'DraugSköll is a project management tool.',
    url: siteUrl,
    siteName: 'DraugSköll',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  authors: [
    {
      name: pkg.author.name,
      url: pkg.author.url,
    },
  ],
  description: 'DraugSköll is a project management tool.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-bs-theme='dark'>
      <body>
        <AppNavbar />
        <Container className={'mt-4'}>{children}</Container>
      </body>
    </html>
  );
}
