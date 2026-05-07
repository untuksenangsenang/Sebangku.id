import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT.Sebangku Jaya Abadi",
  description:
    "PT.Sebangku Jaya Abadi adalah ekosistem edukasi berbasis permainan yang menyediakan board game edukatif, pelatihan fasilitator, Sebangku Cafe, dan sistem loyalitas XP. Transformasi cara belajar melalui media permainan.",
  keywords: [
    "game-based learning",
    "board game edukasi",
    "sebangku",
    "sebangku.id",
    "edugame Indonesia",
    "pelatihan fasilitator",
    "media pembelajaran",
    "board game cafe",
    "karakter anak",
    "belajar sambil bermain",
  ],
  authors: [{ name: "Sebangku.id", url: "https://sebangku.id" }],
  creator: "Sebangku.id",
  publisher: "Sebangku.id",
  metadataBase: new URL("https://sebangku.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sebangku.id",
    siteName: "Sebangku.id",
    title: "Sebangku.id – Ekosistem Media Permainan Terdepan di Indonesia",
    description:
      "Transformasi edukasi melalui media permainan. Board game, pelatihan guru, cafe, dan loyalitas pelanggan dalam satu ekosistem.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sebangku.id – Game-Based Learning Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebangku.id – Ekosistem Game-Based Learning",
    description:
      "Transformasi edukasi melalui media permainan. Board game edukatif, pelatihan fasilitator & Sebangku Cafe.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3A89D6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="min-h-screen bg-[#020617] text-white font-poppins">
        {children}
      </body>
    </html>
  );
}