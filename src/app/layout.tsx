import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://siratulislam.site"),
  title: "Sirat's Portfolio",
  description:
    "I'm Sirat, A Software Developer. I develop Mobile and Full-stack Web applications.",
  applicationName: "Sirat's Portfolio",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript"],
  authors: [{ name: "Sirat", url: "https://siratulislam.site" }],
  creator: "Sirat",
  publisher: "Sirat",
  openGraph: {
    title: "Sirat's Portfolio",
    description:
      "I'm Sirat, A Software Developer. I develop Mobile and Full-stack Web applications.",
    images: "/imgs/me.jpeg",
    siteName: "Sirat's Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
