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
  title: {
    default: "PT Sebangku Jaya Abadi",
    template: "%s | PT Sebangku Jaya Abadi",
  },

  description:
    "PT Sebangku Jaya Abadi menghadirkan transformasi pembelajaran melalui media kreatif, board game edukatif, media interaktif, motion graphic, dan teknologi edukasi modern.",

  keywords: [
    "PT Sebangku Jaya Abadi",
    "Sebangku",
    "edukasi interaktif",
    "game edukasi",
    "board game edukatif",
    "motion graphic",
    "augmented reality",
    "media pembelajaran",
    "transformasi pembelajaran",
    "creative learning",
    "media edukasi Indonesia",
    "edutech Indonesia",
  ],

  authors: [
    {
      name: "PT Sebangku Jaya Abadi",
      url: "https://sebangku.id",
    },
  ],

  creator: "PT Sebangku Jaya Abadi",
  publisher: "PT Sebangku Jaya Abadi",

  metadataBase: new URL("https://sebangku.id"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sebangku.id",
    siteName: "PT Sebangku Jaya Abadi",

    title:
      "PT Sebangku Jaya Abadi — Transformasi Pembelajaran Melalui Media Kreatif",

    description:
      "Ekosistem media edukasi interaktif untuk meningkatkan kompetensi SDM institusi melalui board game, motion graphic, media AR, dan teknologi pembelajaran modern.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Sebangku Jaya Abadi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "PT Sebangku Jaya Abadi — Transformasi Pembelajaran Modern",

    description:
      "Board game edukatif, motion graphic, media AR, dan solusi pembelajaran interaktif untuk institusi modern.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  category: "education",
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
    <html
      lang="id"
      suppressHydrationWarning
      className={poppins.variable}
    >
      <body
        className="
          min-h-screen
          bg-white
          text-gray-900
          antialiased
          font-poppins
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}