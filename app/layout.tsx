import type { Metadata } from "next";
import { Bricolage_Grotesque, Vollkorn, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-source",
  display: "swap",
});

const body = Vollkorn({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-source",
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCIFIHIGHFIVE — science fiction, weird tech, and the future seen sideways",
  description:
    "A podcast and newsletter from Caitlin Jacobs and Rob Skidmore. Science fiction, weird tech, and the small parts of the future that make us laugh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a
          href="#latest-title"
          className="absolute -top-24 left-4 z-[100] bg-accent text-canvas font-body italic font-medium text-[17px] px-5 py-3 no-underline transition-[top] duration-200 ease-[var(--ease-out-quart)] focus:top-4 focus-visible:top-4 focus:outline-2 focus:outline-ink focus:outline-offset-[3px]"
        >
          Skip to the latest episode
        </a>
        {children}
      </body>
    </html>
  );
}
