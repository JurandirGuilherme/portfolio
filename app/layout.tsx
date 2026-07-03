import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { site } from "@/data/site";
import { pt } from "@/data/content/pt";
import "./globals.css";

const url = `https://${site.brand}`;
const description = pt.lede;
const title = `${site.name} — ${pt.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Front-End",
    "Desenvolvedor",
    site.name,
  ],
  authors: [{ name: site.name, url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url,
    siteName: site.brand,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
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
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
