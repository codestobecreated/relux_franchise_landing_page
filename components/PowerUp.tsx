import Image from "next/image";
import { ArrowRight, MapPinCheck, Rocket, Wallet, Wrench } from "lucide-react";

const STEPS = [
  {
    no: "01",
    icon: Wallet,
    title: "Choose Your Investment Model",
  },
  {
    no: "02",
    icon: MapPinCheck,
    title: "Site Assessment",
  },
  {
    no: "03",
    icon: Wrench,
    title: "Installation",
  },
  {
    no: "04",
    icon: Rocket,
    title: "Start Your Charging Business",
  },
];

export default function PowerUp() {
  return (
    <section id="about" className="swoosh-bg relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid items-center gap-10 pt-14 lg:grid-cols-[1fr_auto] lg:gap-0 lg:pt-[34px]">
          <div className="lg:pl-[52px] lg:pb-[40px]">
            <h1 className="text-[30px] font-bold leading-[1.25] tracking-[-0.01em] text-ink sm:text-[38px] lg:text-[44px] lg:leading-[56px]">
              EV Charging Station Franchise
              <br className="hidden sm:block" /> Opportunities in India
            </h1>
            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.7] text-[#3f3f3f] lg:mt-[30px] lg:max-w-[590px] lg:text-[16.5px] lg:leading-[27px]">
              Relux provides EV charging station franchise opportunities with multiple charger
              capacities to suit different locations and business requirements. Explore our franchise
              models and get guidance on site feasibility and the installation process.
            </p>
            <a
              href="#products"
              className="mt-8 inline-flex h-[56px] items-center gap-3 rounded-[6px] bg-gradient-to-r from-[#55cc70] via-[#79d98d] to-[#b5ecc0] px-9 text-[17px] font-semibold text-[#10301a] shadow-[0_4px_14px_rgba(60,190,100,0.25)] transition-[filter] hover:brightness-105 lg:mt-[34px]"
            >
              Explore Franchise Models
              <ArrowRight size={19} strokeWidth={2.2} />
            </a>
          </div>

          {/* Charger illustration + connector line */}
          <div className="relative mx-auto w-full max-w-[460px] lg:mr-[34px] lg:w-[460px]">
            <Image
              src="/images/charger-station.png"
              alt="Relux DC fast charging station with a wall-mounted AC charger"
              width={700}
              height={790}
              className="relative w-full mix-blend-multiply"
              priority={false}
            />
            <span
              aria-hidden
              className="absolute -right-[46px] top-[50%] hidden h-[calc(50%+24px)] w-[46px] rounded-tr-[18px] border-r-2 border-t-2 border-brand-light lg:block"
            />
          </div>
        </div>

        {/* Franchise steps */}
        <div id="how-it-works" className="relative pb-14 pt-8 lg:pb-[50px] lg:pl-[36px] lg:pt-[22px]">
          <h2 className="sr-only">How Your EV Charging Franchise Works</h2>
          {/* left curved connector */}
          <span
            aria-hidden
            className="absolute -left-[4px] top-[calc(22px+64px)] hidden h-[120px] w-[40px] rounded-tl-[40px] border-l-2 border-t-2 border-brand-light lg:block"
          />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[19px] lg:-mr-[30px]">
            {STEPS.map(({ no, icon: Icon, title }, i) => (
              <li key={no} className="relative">
                {i > 0 && (
                  <span
                    aria-hidden
                    className="absolute -left-[19px] top-1/2 hidden h-[2px] w-[19px] bg-brand-light lg:block"
                  />
                )}
                <div className="flex h-full min-h-[132px] items-center gap-5 rounded-[10px] border border-[#ececec] bg-white px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <Icon className="h-[54px] w-[54px] shrink-0 text-[#62b043]" strokeWidth={1.4} />
                  <h3 className="text-[18px] font-bold leading-snug text-ink">{title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="h-px w-full bg-[#ececec]" />
    </section>
  );
}
