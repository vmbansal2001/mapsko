import IndexRoute from "@/views/index/index-route";
import { absoluteUrl, toOgImage } from "@/lib/seo";

export const metadata = {
  title: "Luxury Homes and Premium Real Estate in Gurugram",
  description:
    "Explore Mapsko’s portfolio of luxury residential and commercial projects in Gurugram. Discover premium amenities, prime locations, and ready-to-move options.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    url: absoluteUrl("/"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

export default function Home() {
  return <IndexRoute />;
}
