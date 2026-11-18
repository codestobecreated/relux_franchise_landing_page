import Image from "next/image";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

/** Relux Electric site logo (white wordmark with green bolt, transparent background). */
export function Logo({ className = "", imgClassName = "" }: LogoProps) {
  return (
    <a href="#home" className={`inline-flex items-center ${className}`} aria-label="Relux Electric home">
      <Image
        src="/images/logo.png"
        alt="Relux Electric"
        width={666}
        height={297}
        priority
        className={`h-auto w-[130px] lg:w-[clamp(130px,10.4vw,170px)] ${imgClassName}`}
      />
    </a>
  );
}
