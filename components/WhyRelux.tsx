import Image from "next/image";
import {
  Building2,
  Hotel,
  LandPlot,
  Leaf,
  MapPinCheck,
  Route,
  Truck,
} from "lucide-react";

const LOCATIONS = [
  {
    icon: Route,
    title: "Highways & Transit Routes",
    text: "Locations catering to intercity and long-distance EV travellers.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    text: "Shopping complexes, business parks and commercial establishments.",
  },
  {
    icon: Hotel,
    title: "Hotels & Restaurants",
    text: "Properties where customers can charge their vehicles while they visit.",
  },
  {
    icon: Truck,
    title: "Fleet & Industrial Locations",
    text: "Facilities catering to commercial EVs and fleet operations.",
  },
  {
    icon: LandPlot,
    title: "Available Land Parcels",
    text: "Suitable land with adequate space, access and power infrastructure.",
  },
];

/** "What are you investing in?" + franchise terms, followed by site feasibility. */
export default function WhyRelux() {
  return (
    <>
      {/* ───────── Investing (dark, fixed background photo) ───────── */}
      <section
        id="why-relux"
        className="parallax-bg relative overflow-hidden py-20 text-white lg:py-[120px]"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        {/* dark overlay so the text stays readable over the photo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#050806]/65 via-[#050806]/50 to-[#050806]/70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1fa64f]/10 blur-[140px]"
        />
        <div className="container-x relative mx-auto flex max-w-[860px] flex-col items-center text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-light">
            What are you investing in?
          </p>
          <h2 className="mt-3 font-display text-[48px] font-semibold uppercase leading-[0.95] tracking-[0.005em] sm:text-[64px] lg:text-[84px]">
            Not just a <span className="text-neon">charger.</span>
          </h2>
          <p className="mt-7 max-w-[720px] text-[16.5px] leading-[1.8] text-white/80">
            By choosing Relux, you are supporting the transition towards cleaner transportation while
            contributing to a growing EV ecosystem across India. Reliable and accessible charging
            infrastructure makes electric mobility more practical, helping reduce dependence on fossil fuels
            and our country&apos;s carbon footprint.
          </p>
          <p className="mt-7 flex max-w-[720px] items-start justify-center gap-3 text-[17px] font-semibold leading-[1.7] text-white">
            <Leaf className="mt-1 h-5 w-5 shrink-0 text-neon" strokeWidth={2} />
            <span>
              It is an investment in more than infrastructure—it is an investment in cleaner air, healthier
              communities and a more sustainable future.
            </span>
          </p>
        </div>
      </section>

      {/* ───────── Site feasibility (light) ───────── */}
      <section id="site-feasibility" className="relative overflow-hidden bg-[#f6f8f7] py-16 lg:py-[96px]">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-[24px]">
            {/* left: heading + photo */}
            <div className="lg:sticky lg:top-10 lg:self-start">
              <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                <span className="h-px w-8 bg-brand" />
                Is Your Site Feasible?
              </p>
              <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-ink lg:text-[42px]">
                The Right Location Can Make a <span className="text-brand">Difference.</span>
              </h2>
              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.75] text-[#4a4a4a]">
                The right location can make all the difference in an EV charging business. Relux works with
                individuals and businesses looking to establish charging infrastructure in locations with EV
                charging potential.
              </p>

              <div className="relative mt-9">
                <div className="overflow-hidden rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/product-2.jpg"
                    alt="Relux charger installed at a restaurant, glowing green at night"
                    width={716}
                    height={341}
                    sizes="(min-width:1024px) 560px, 100vw"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-5 right-5 flex items-center gap-4 rounded-2xl border border-[#e7ece9] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:left-auto sm:right-6 sm:max-w-[330px]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <MapPinCheck className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="text-[13.5px] font-semibold leading-snug text-ink">
                    Our team evaluates location, power availability &amp; infrastructure for you.
                  </p>
                </div>
              </div>
            </div>

            {/* right: location categories */}
            <div className="pt-6 lg:pt-0">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#666]">
                Potential location categories
              </h3>
              <ol className="mt-5 space-y-3">
                {LOCATIONS.map(({ icon: Icon, title, text }, i) => (
                  <li
                    key={title}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-[16px] border border-[#e6ebe8] bg-white px-5 py-5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-light hover:shadow-[0_12px_30px_rgba(31,166,79,0.12)] sm:px-6"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <span className="hidden w-8 shrink-0 font-display text-[26px] font-semibold text-[#cfd8d3] transition-colors group-hover:text-brand sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#eaf7ef] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h4 className="text-[17px] font-bold leading-snug text-ink">{title}</h4>
                      <p className="mt-1 text-[14.5px] leading-[1.6] text-[#555]">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
