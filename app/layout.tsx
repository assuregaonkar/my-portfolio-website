import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anusha Suregaonkar | Senior Frontend Engineer",
  description:
    "Portfolio of Anusha Shanmukhappa Suregaonkar — Senior Frontend Engineer specializing in React, Redux, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
        {children}
        <footer className="border-t py-6 text-center text-xs" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Anusha Shanmukhappa Suregaonkar. Built with Next.js &amp; Tailwind CSS.
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
