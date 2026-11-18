import Image from "next/image";
import { Check, Headset, MapPin } from "lucide-react";
import { EnquireButton } from "./EnquiryModal";

const PRODUCTS = [
  {
    img: "/images/product-1.jpg",
    alt: "60 kW charger installed in a landscaped outdoor parking area",
    badge: "₹ 10 LAKHS",
    name: "STD 60KW",
    setup: "60 KW Power Setup",
    price: "₹10 Lakhs",
    space: "400 sq. ft",
  },
  {
    img: "/images/product-2.jpg",
    alt: "120 kW charger glowing green at a restaurant at night",
    badge: "₹ 20 LAKHS",
    name: "STD 120KW",
    setup: "120 KW Power Setup",
    price: "₹20 Lakhs",
    space: "500 sq. ft",
  },
  {
    img: "/images/product-3.jpg",
    alt: "Super hub charging plaza with multiple chargers under a canopy",
    badge: "₹ 1 CRORE",
    name: "SUPER HUB",
    setup: "240 KW Power Setup",
    price: "₹1 Crore",
    space: "3,000 sq. ft",
  },
];

const PERKS = ["High Efficiency", "Smart Connectivity", "24/7 Support"];

function StopwatchBolt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="13.5" r="8.5" />
      <path d="M10 2.5h4M12 2.5V5M18.5 6.5l1.3-1.3" />
      <path d="M13 9l-3 5h3.2l-1.4 4 3.4-5.5H12l1-3.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BatteryVertical({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="6.5" y="4" width="11" height="18" rx="2" />
      <path d="M10 2h4" />
      <rect x="9" y="13" width="6" height="2.6" rx=".5" fill="currentColor" stroke="none" />
      <rect x="9" y="17" width="6" height="2.6" rx=".5" fill="currentColor" stroke="none" />
      <path d="M12.6 6.5l-1.8 2.8h2.2l-1.1 2.3" />
    </svg>
  );
}

const STATS = [
  { icon: StopwatchBolt, value: "200K+", label: "Happy Customers" },
  { icon: MapPin, value: "10K+", label: "Charging Stations" },
  { icon: BatteryVertical, value: "99.9%", label: "Uptime Reliability" },
  { icon: Headset, value: "24/7", label: "Customer Support" },
];

export default function Products() {
  return (
    <section id="products" className="bg-white pb-5 pt-12 lg:pt-[30px]">
      <div className="container-x">
        <div className="text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-brand">Our Products</p>
          <h2 className="mt-2 text-[28px] font-bold tracking-[-0.01em] text-ink lg:mt-[6px] lg:text-[29px]">
            Smart Charging Solutions
          </h2>
          <p className="mt-2 text-[14px] text-[#444]">Reliable. Efficient. Future-ready.</p>
        </div>

        <div className="mx-auto mt-9 grid max-w-[1300px] gap-7 md:grid-cols-2 lg:mt-[30px] lg:grid-cols-3 lg:gap-[28px]">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="relative flex flex-col rounded-[14px] border border-[#e8e8e8] bg-white p-[22px] pb-[30px] shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
            >
              <span className="absolute right-[22px] top-[-2px] z-10 rounded-[9px] bg-[#25b25c] px-[14px] py-[6px] text-[15px] font-bold tracking-[0.01em] text-white shadow-[0_3px_10px_rgba(20,140,70,0.3)]">
                {p.badge}
              </span>
              <div className="relative aspect-[193/97] overflow-hidden rounded-[12px]">
                <Image src={p.img} alt={p.alt} fill sizes="(min-width:1024px) 400px, 90vw" className="object-cover" />
              </div>

              <h3 className="mt-[34px] px-[10px] text-[20px] font-bold tracking-[-0.01em] text-ink">{p.name}</h3>
              <p className="mt-[6px] px-[10px] text-[14px] font-bold uppercase tracking-[0.01em] text-brand">
                {p.setup}
              </p>

              <dl className="mt-[22px] grid grid-cols-2 gap-[14px] px-[10px]">
                <div className="rounded-[10px] bg-[#f4f5f4] px-4 py-[16px] sm:px-[24px]">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.02em] text-[#7a7a7a]">Est. Price</dt>
                  <dd className="mt-[2px] text-[15px] font-bold text-ink">{p.price}</dd>
                </div>
                <div className="rounded-[10px] bg-[#f4f5f4] px-4 py-[16px] sm:px-[24px]">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.02em] text-[#7a7a7a]">Min Space</dt>
                  <dd className="mt-[2px] text-[15px] font-bold text-ink">{p.space}</dd>
                </div>
              </dl>

              <ul className="mt-[22px] space-y-[13px] px-[10px]">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-[14px] text-[15px] text-[#4a4a4a]">
                    <Check size={17} strokeWidth={2.4} className="text-brand" />
                    {perk}
                  </li>
                ))}
              </ul>

              <EnquireButton model={p.name} className="mx-[10px] mt-[26px] inline-flex h-[42px] items-center justify-center gap-2 rounded-[7px] bg-[#1fa64f] text-[15px] font-bold text-white transition-colors hover:bg-brand-dark" />
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-6 grid max-w-[1300px] grid-cols-2 gap-y-6 rounded-[16px] border border-[#ececec] bg-white px-4 py-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:mt-[24px] lg:grid-cols-4 lg:px-0 lg:py-[34px]">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-[18px] ${i > 0 ? "lg:border-l lg:border-[#e1e1e1]" : ""}`}
            >
              <Icon className="h-[46px] w-[46px] shrink-0 text-brand" strokeWidth={1.6} />
              <div>
                <p className="text-[24px] font-bold leading-tight text-ink">{value}</p>
                <p className="mt-[2px] text-[14px] font-medium text-[#333]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
