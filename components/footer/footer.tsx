import React from "react";
import LogoWithName from "@/assets/icons/mapsko-logo-with-name.svg";

type IconProps = React.SVGProps<SVGSVGElement>;

const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4.25" strokeWidth="1.6" />
    <circle
      cx="17"
      cy="7.5"
      r="1.15"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="1.6" />
    <path
      d="M13 9.25H14.75V7H13C11.97 7 11.25 7.72 11.25 8.75V10.5H9.5V12.75H11.25V17H13.5V12.75H15.25L15.5 10.5H13.5V9.5C13.5 9.36 13.36 9.25 13 9.25Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
    />
  </svg>
);

const TwitterIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" strokeWidth="1.6" />
    <path
      d="M8.25 8.25L15.75 15.75M15.75 8.25L8.25 15.75"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const LinkedInIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" strokeWidth="1.6" />
    <path
      d="M8.25 10.25V16M12 12.75V16M12 12.75C12 11 13.4 10.25 14.35 10.25C15.3 10.25 16 10.95 16 12.75V16"
      strokeWidth="1.6"
    />
    <circle
      cx="8.25"
      cy="8.25"
      r="0.9"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
    />
  </svg>
);

const residentialProjects = [
  "Mapsko Mount Ville",
  "Mapsko Royale Ville",
  "Mapsko Paradise",
  "Mapsko Casa Bella",
  "Mapsko City Homes",
  "Mapsko Garden Estate",
  "Krishna APRA Gardens",
  "Krishna Apra Sapphire",
  "Krishna Apra Residency",
];

const completeProjects = [
  "Mapsko Galleria",
  "Mapsko Royale Plaza",
  "Krishna Apra D Mall",
  "Mapsko Shopping Arcade",
  "Krishna Apra Plaza",
  "Apra Plaza",
  "Krishna Apra Royal Plaza",
  "Krishna Apra Park Plaza",
  "Krishna Apra Business Square",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  { label: "Twitter", href: "https://x.com/", icon: TwitterIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: LinkedInIcon },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B6BB8] text-white">
      <div className="common-frame-box py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 items-start">
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <LogoWithName
              aria-label="Mapsko logo"
              className="w-48 md:w-56 h-auto filter brightness-0 invert"
            />
            <p className="max-w-[360px] leading-relaxed">
              Experience unmatched comfort and luxury with GHD Infra –
              redefining living for you.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 border border-[#8AC028] text-[#8AC028] hover:bg-[#8AC028] hover:text-[#0B6BB8] transition-colors duration-200 rounded-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm md:text-base leading-relaxed">
            <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
              Connect with Us
            </h3>
            <p>
              <span className="font-semibold">Corporate Office :</span>
              <br />
              Baani The Address, 1, 6th Floor, Golf Course Rd, Sector 56,
              Gurugram, Haryana 122011
            </p>
            <p>Inquiry : +(91)-(124)-4250610/20/30</p>
            <p>
              sales@mapskogroup.com,
              <br />
              info@mapskogroup.com
            </p>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
              Residential Projects
            </h3>
            <ul className="space-y-2 leading-relaxed">
              {residentialProjects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h3 className="text-[#8AC028] font-semibold uppercase tracking-wide">
              Complete Projects
            </h3>
            <ul className="space-y-2 leading-relaxed">
              {completeProjects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#8AC028] text-white text-center text-xs sm:text-sm md:text-base py-3 md:py-4 px-4">
        © 2025 Mapsko Group Pvt. Ltd. | All Rights Reserved. | Privacy Policy |
        Disclaimer
      </div>
    </footer>
  );
};

export default Footer;
