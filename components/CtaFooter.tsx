import Image from "next/image";
import { Mail, MapPin, Phone, Send, Zap } from "lucide-react";
import { Logo } from "./Logo";

const ADDRESS =
  "No:16/8, Ground Floor, PRV Towers, Grand Southern Trunk Rd, Guindy, Chennai, Tamil Nadu 600032";
const MAP_QUERY = encodeURIComponent("Relux Electric, PRV Towers, GST Road, Guindy, Chennai 600032");

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/reluxelectric",
    path: "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z",
    fill: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reluxelectric/",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5h.01",
    fill: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/31286577/",
    path: "M6.5 9.5V18M6.5 6v.01M10.5 18v-8.5M10.5 13c0-2 1.2-3.5 3-3.5s3 1.2 3 3.5V18",
    fill: false,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@reluxelectric7550",
    path: "M21 8.2c-.2-1.4-1.2-2.4-2.6-2.5C16.6 5.5 14.3 5.4 12 5.4s-4.6.1-6.4.3C4.2 5.8 3.2 6.8 3 8.2c-.2 1.3-.3 2.5-.3 3.8s.1 2.5.3 3.8c.2 1.4 1.2 2.4 2.6 2.5 1.8.2 4.1.3 6.4.3s4.6-.1 6.4-.3c1.4-.1 2.4-1.1 2.6-2.5.2-1.3.3-2.5.3-3.8s-.1-2.5-.3-3.8zM10 15V9l5 3z",
    fill: true,
  },
];

export default function CtaFooter() {
  return (
    <>
      {/* CTA band */}
      <section id="find" className="relative overflow-hidden border-b border-[#1d6a37] bg-[#050505]">
        <Image src="/images/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="container-x relative flex flex-col items-center gap-8 py-12 text-center lg:h-[222px] lg:flex-row lg:gap-0 lg:py-0 lg:text-left">
          <div className="glow-ring glow-pulse grid h-[150px] w-[150px] shrink-0 place-items-center rounded-full lg:ml-[150px] lg:h-[172px] lg:w-[172px]">
            <Zap
              className="h-[78px] w-[78px] text-[#e6fff0] drop-shadow-[0_0_14px_rgba(46,230,127,1)]"
              fill="#d4ffe3"
              strokeWidth={1}
            />
          </div>
          <div className="lg:ml-[52px]">
            <h2 className="max-w-[560px] text-[26px] font-bold leading-[1.25] tracking-[-0.01em] text-white lg:text-[30px]">
              Interested in exploring franchise opportunities with Relux Electric?
            </h2>
            <p className="mt-2 text-[16px] text-white/90 lg:mt-[6px] lg:text-[18px]">
              Reach out to us today.
            </p>
          </div>
          <a
            href="#products"
            className="inline-flex h-[58px] items-center gap-3 rounded-full bg-gradient-to-b from-[#2fc466] to-[#1ea653] px-10 text-[17px] font-bold text-white shadow-[0_0_24px_rgba(46,200,110,0.35)] transition-[filter] hover:brightness-110 lg:ml-auto lg:mr-[24px] lg:w-[344px] lg:justify-center lg:px-0"
          >
            Enquire Now
            <Send size={20} strokeWidth={2.2} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-footer text-white">
        <div className="container-x grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.6fr] lg:gap-14 lg:py-[44px]">
          {/* Brand + social */}
          <div>
            <Logo imgClassName="!w-[170px]" />
            <p className="mt-5 text-[14px] leading-[23px] text-white/75">
              Seamless charging for the electric era.
              <br />
              Built for speed, reliability, and ease.
            </p>
            <h3 className="mt-6 text-[14px] font-bold uppercase tracking-[0.02em]">Follow Us</h3>
            <ul className="mt-3 flex gap-[16px]">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-[38px] w-[38px] place-items-center rounded-full border border-white/70 text-white/85 transition-colors hover:border-brand-light hover:text-brand-light"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[17px] w-[17px]"
                      fill={s.fill ? "currentColor" : "none"}
                      stroke={s.fill ? "none" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-[0.02em]">Contact Us</h3>
            <ul className="mt-[22px] space-y-[18px] text-[15px] text-white/80">
              <li className="flex items-center gap-[14px]">
                <Mail size={22} strokeWidth={1.6} className="shrink-0 text-brand-light" />
                <a href="mailto:enquiry@reluxelectric.com" className="hover:text-white">
                  enquiry@reluxelectric.com
                </a>
              </li>
              <li className="flex items-center gap-[14px]">
                <Phone size={22} strokeWidth={1.6} className="shrink-0 text-brand-light" />
                <a href="tel:+919884866993" className="hover:text-white">
                  +91 98848 66993
                </a>
              </li>
              <li className="flex items-start gap-[14px]">
                <MapPin size={22} strokeWidth={1.6} className="mt-0.5 shrink-0 text-brand-light" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[300px] leading-[1.6] hover:text-white"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[14px] font-bold uppercase tracking-[0.02em]">Our Location</h3>
            <div className="mt-[22px] overflow-hidden rounded-[12px] border border-white/15">
              <iframe
                title="Relux Electric office location on Google Maps"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
                className="block h-[220px] w-full grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="container-x py-5 text-center text-[13px] text-white/55">
            © {new Date().getFullYear()} Relux Electric. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
