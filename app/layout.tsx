import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DjMelolife",
  description: "MeloLife upcoming frechcore artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-neutral-100`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
