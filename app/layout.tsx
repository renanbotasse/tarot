import type { Metadata } from "next";
import {
  Noto_Serif,
  Playfair_Display,
  IM_Fell_English,
  Pirata_One,
  Special_Elite,
  Cinzel,
} from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const fell = IM_Fell_English({
  variable: "--font-fell",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const pirata = Pirata_One({
  variable: "--font-pirata",
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Rasputin's Eye",
  description:
    "Step inside the mystical fortune booth. Ancient tarot wisdom meets carnival spectacle.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${notoSerif.variable} ${playfair.variable} ${fell.variable} ${pirata.variable} ${specialElite.variable} ${cinzel.variable} antialiased font-display`}
      >
        {children}
      </body>
    </html>
  );
}
