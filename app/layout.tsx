import type { Metadata } from "next";
import { Inter, Oswald, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EV Charging Station Franchise in India | Relux Electric",
  description:
    "Relux provides EV charging station franchise opportunities with multiple charger capacities. Explore franchise models, site feasibility and the installation process.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
