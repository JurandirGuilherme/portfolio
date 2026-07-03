import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const url = `https://${profile.brand}`;
const description = profile.lede;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: `${profile.name} — ${profile.role}`,
  description,
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Front-End",
    "Desenvolvedor",
    profile.name,
  ],
  authors: [{ name: profile.name, url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url,
    siteName: profile.brand,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a20" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
