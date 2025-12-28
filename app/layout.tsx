import localFont from "next/font/local";
import "./globals.css";
import { baseMetadata, absoluteUrl } from "@/lib/seo";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/jsonld";

const avenir = localFont({
  src: [
    {
      path: "../assets/fonts/avenir/Avenir Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Heavy.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = absoluteUrl("/");
  const organizationJsonLd = buildOrganizationJsonLd({
    name: "Mapsko",
    url: siteUrl,
    logo: absoluteUrl("/favicon.ico"),
    sameAs: [
      "https://www.instagram.com/mapskogroup/",
      "https://www.facebook.com/mapskogroup/",
      "https://www.youtube.com/@mapskogroup5591",
      "https://www.linkedin.com/company/mapskogroup/",
    ],
  });

  const websiteJsonLd = buildWebsiteJsonLd({
    url: siteUrl,
    name: "Mapsko",
  });

  return (
    <html lang="en">
      <body className={`${avenir.variable} antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
