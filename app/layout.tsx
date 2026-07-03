import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { site } from "@/data/site";
import { en } from "@/data/content/en";
import "./globals.css";

const url = `https://${site.brand}`;
const description = en.lede;
const title = `${site.name} — ${en.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: site.name,
  keywords: [
    "guibatista",
    "Jurandir Guilherme",
    "React",
    "Next.js",
    "TypeScript",
    "Front-End",
    "Developer",
    site.name,
  ],
  authors: [{ name: site.name, url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
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

/** Dados estruturados (schema.org Person) — ajuda o Google a associar
 *  o domínio, o nome e o apelido "guibatista" à mesma pessoa. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "guibatista",
  url,
  image: `${url}/opengraph-image`,
  jobTitle: en.role,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Front-End Development",
  ],
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
    <html lang="en-US" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
