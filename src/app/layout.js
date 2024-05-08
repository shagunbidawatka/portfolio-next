import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shagun Bidawatka",
  description: "Shagun Bidawatka Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      <link rel="icon" type="image/png" href="/favicon.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
