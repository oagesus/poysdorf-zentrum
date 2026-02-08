import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Poysdorf Zentrum | Immobilie zu verkaufen",
  description:
    "Charmantes Haus mit Grundstück im Herzen von Poysdorf – ideal für Familien oder als Investition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}