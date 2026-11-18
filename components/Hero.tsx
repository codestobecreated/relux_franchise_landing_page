import Image from "next/image";
import { ClipboardList, Store, UtensilsCrossed, Wifi } from "lucide-react";
import { Logo } from "./Logo";

function SpeedBolt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 172 112" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sb" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#13c46a" />
          <stop offset="1" stopColor="#36ef87" />
        </linearGradient>
      </defs>
      {/* speed streaks */}
      <rect x="34" y="14" width="58" height="13" rx="6.5" fill="url(#sb)" />
      <rect x="10" y="36" width="62" height="13" rx="6.5" fill="url(#sb)" />
      <rect x="0" y="52" width="16" height="9" rx="4.5" fill="url(#sb)" />
      <rect x="22" y="58" width="50" height="13" rx="6.5" fill="url(#sb)" />
      <rect x="34" y="80" width="58" height="13" rx="6.5" fill="url(#sb)" />
      {/* ring */}
      <circle cx="116" cy="55" r="44" fill="none" stroke="url(#sb)" strokeWidth="14" />
      {/* bolt */}
      <path d="M122 22 L98 60 H114 L108 88 L134 48 H118 Z" fill="url(#sb)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#1a8db2] lg:bg-transparent">
      {/* Background photo */}
      <div className="relative w-full lg:aspect-[766/512]">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover lg:block"
        />

        {/* Header */}
        <header className="relative z-20 lg:absolute lg:inset-x-0 lg:top-0">
          <div className="flex items-center justify-between px-4 pt-5 sm:px-6 lg:px-[4.5vw] lg:pt-[1.8vw]">
            <Logo />
            <a
              href="#login"
              className="inline-block rounded-[6px] border-[1.5px] border-white px-5 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-ink lg:px-[1.95vw] lg:py-[0.62vw] lg:text-[clamp(14px,1.18vw,18px)]"
            >
              Log In
            </a>
          </div>
        </header>

        {/* Headline */}
        <div className="relative z-10 px-4 pb-6 pt-10 sm:px-6 lg:absolute lg:left-[21.9%] lg:top-[19.6%] lg:p-0">
          <h1 className="flex flex-wrap items-start font-display font-semibold leading-none tracking-[-0.005em] text-white text-[64px] sm:text-[88px] lg:text-[8.75vw]">
            <span>Future</span>
            <SpeedBolt className="mx-[0.1em] mt-[0.1em] h-[0.66em] w-[1.0em] lg:mx-[0.09em] lg:mt-[0.12em] lg:h-[0.83em] lg:w-[1.28em]" />
            <span className="mt-[0.1em] lg:mt-[0.135em]">Charged</span>
          </h1>
          <p className="mt-4 text-[17px] leading-[1.75] text-white/95 lg:mt-[0.7vw] lg:text-[1.4vw] lg:leading-[1.85]">
            Seamless charging for the electric era.
            <br />
            Built for speed, reliability, and ease.
          </p>
          <a
            href="#find"
            className="mt-6 inline-flex items-center rounded-[6px] bg-[#41c37a] px-6 py-3.5 text-[16px] font-semibold text-white shadow-[0_6px_18px_rgba(18,120,64,0.25)] transition-colors hover:bg-[#33b56b] lg:mt-[1.55vw] lg:px-[1.95vw] lg:py-[1.02vw] lg:text-[clamp(14px,1.18vw,18px)]"
          >
            Start Charging
          </a>
        </div>

        {/* Mobile photo */}
        <div className="relative aspect-[766/300] w-full lg:hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="White electric car charging at a Charge & Go station"
            fill
            sizes="100vw"
            className="object-cover object-[50%_72%]"
          />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#1a8db2] to-transparent" />
        </div>

        {/* Stat + facilities cards */}
        <div className="relative z-10 bg-[#dfe3e6] pb-6 pt-2 lg:absolute lg:inset-x-0 lg:top-[80.2%] lg:bg-transparent lg:p-0">
          <div className="mx-auto flex w-full flex-col gap-3 px-4 sm:px-6 lg:w-[92.3%] lg:flex-row lg:gap-[1.04vw] lg:px-0">
            <div className="flex flex-col items-center justify-center rounded-[4px] bg-white py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] lg:h-[11.6vw] lg:w-[24.9%] lg:py-0">
              <p className="text-[26px] font-extrabold leading-none text-brand lg:text-[2.05vw]">200K</p>
              <p className="mt-2 text-[26px] font-extrabold leading-none tracking-[-0.01em] text-ink lg:mt-[0.75vw] lg:text-[2.05vw]">
                CUSTOMERS
              </p>
              <p className="mt-3 text-[15px] text-[#333] lg:mt-[1.1vw] lg:text-[1.2vw]">
                Satisfied with the platform
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-5 rounded-[4px] bg-white px-6 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] md:flex-row md:items-center lg:h-[11.6vw] lg:gap-0 lg:px-[3.6%] lg:py-0">
              <p className="text-[17px] leading-[1.55] text-ink lg:w-[44%] lg:text-[1.48vw] lg:leading-[1.6]">
                We also provide additional facilities to{" "}
                <strong className="font-bold">enhance your charging experience.</strong>
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:ml-auto lg:ml-[4%] lg:flex lg:flex-1 lg:gap-0">
                <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-[2.1vw] lg:border-l lg:border-[#dcdcdc] lg:pl-[6.5%]">
                  <Facility icon={<UtensilsCrossed />} label="Restaurant" />
                  <Facility icon={<ClipboardList />} label="Maintenance" />
                </div>
                <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-[2.1vw] lg:border-l lg:border-[#dcdcdc] lg:pl-[13%]">
                  <Facility icon={<Wifi />} label="Wi-Fi" />
                  <Facility icon={<Store />} label="Shop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Facility({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 lg:gap-[1.05vw]">
      <span className="text-ink [&>svg]:h-[22px] [&>svg]:w-[22px] [&>svg]:stroke-[2.2] lg:[&>svg]:h-[1.65vw] lg:[&>svg]:w-[1.65vw]">
        {icon}
      </span>
      <span className="text-[13px] font-bold uppercase tracking-[0.01em] text-ink lg:text-[1.02vw]">
        {label}
      </span>
    </div>
  );
}
