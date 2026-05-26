import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "3D Bootcamp",
  description: "La plateforme de référence pour la 3D dans l'industrie du luxe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/eudoxus-sans"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
