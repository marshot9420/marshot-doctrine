import "../styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MARSHOT DOCTRINE",
  description: "MARSHOT의 개인 블로그",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
