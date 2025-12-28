import { absoluteUrl, toOgImage } from "@/lib/seo";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import FirstSection from "@/views/about-us/corporate-philosophy/first-section";
import HeroSection from "@/views/about-us/corporate-philosophy/hero-section";
import SecondSection from "@/views/about-us/corporate-philosophy/second-section";
import ThirdSection from "@/views/about-us/corporate-philosophy/third-section";

export const metadata = {
  title: "Corporate Philosophy | Mapsko Group",
  description:
    "Discover the values and philosophy that guide Mapsko Group—quality, transparency, and customer-first development across Gurugram’s landmark projects.",
  alternates: {
    canonical: absoluteUrl("/about-us/corporate-philosophy"),
  },
  openGraph: {
    url: absoluteUrl("/about-us/corporate-philosophy"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            {
              label: "Corporate Philosophy",
              href: "/about-us/corporate-philosophy",
            },
          ]}
        />
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </main>
  );
};

export default Page;
