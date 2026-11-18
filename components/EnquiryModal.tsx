"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Loader2, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { CITIES, STATES } from "@/lib/locations";

/**
 * Franchise enquiry modal. Submissions go to the same backend endpoint the
 * live reluxelectric.com/business/franchise page uses, so they land in the
 * Relux admin panel's franchise enquiries.
 */
const API_BASE = process.env.NEXT_PUBLIC_RELUX_API_BASE ?? "https://core.reluxelectric.com";
const FRANCHISE_ENDPOINT = `${API_BASE}/api/franchise/`;

const BUSINESS_PROFILES = [
  { value: "ENTREPRENEUR", label: "Entrepreneur" },
  { value: "REAL ESTATE OWNER", label: "Real Estate Owner" },
  { value: "FLEET OPERATOR", label: "Fleet Operator" },
];

const INVESTMENT_RANGES = ["10L - 25L", "25L - 50L", "50L+"];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  businessProfile: "",
  investmentRange: "",
  message: "",
};

type Status = { type: "success" | "error"; text: string } | null;

type EnquiryCtx = { open: (model: string) => void };
const Ctx = createContext<EnquiryCtx | null>(null);

export function useEnquiry() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [model, setModel] = useState<string | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((m: string) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setModel(m);
  }, []);

  const close = useCallback(() => {
    setModel(null);
    // give focus back to the button that opened the modal
    requestAnimationFrame(() => returnFocus.current?.focus());
  }, []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {model && <EnquiryModal model={model} onClose={close} />}
    </Ctx.Provider>
  );
}

export function EnquireButton({ model, className = "" }: { model: string; className?: string }) {
  const { open } = useEnquiry();
  return (
    <button type="button" onClick={() => open(model)} className={className}>
      Enquire Now
      <ArrowRight size={18} strokeWidth={2.4} />
    </button>
  );
}

const fieldCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-colors placeholder:text-white/25 focus:border-[#00b14f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b14f]/40";
const selectCls = `${fieldCls} cursor-pointer appearance-none pr-10 [&>option]:bg-[#0b0b0b] [&>option]:text-white disabled:cursor-not-allowed disabled:opacity-50`;
const labelCls = "block pl-1 text-[11px] font-bold tracking-wider text-white/45";

function EnquiryModal({ model, onClose }: { model: string; onClose: () => void }) {
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Escape to close, focus trap, body scroll lock
  useEffect(() => {
    firstFieldRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const els = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
        );
        const list = [...els].filter((el) => !el.hasAttribute("disabled"));
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const cities = (form.state && CITIES[form.state]) || [];

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => (name === "state" ? { ...f, state: value, city: "" } : { ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const payload = {
      full_name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      city: form.city,
      state: form.state,
      investment_capacity: form.investmentRange,
      franchise_model: model,
      business_profile: form.businessProfile,
      message: form.message.trim(),
    };

    try {
      const res = await fetch(FRANCHISE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ type: "success", text: "Thanks! Your enquiry has been submitted. Our team will contact you soon." });
        setForm(EMPTY);
        setTimeout(onClose, 3000);
      } else {
        const data = await res.json().catch(() => null);
        console.error("Franchise enquiry rejected:", data);
        setStatus({
          type: "error",
          text: "We couldn't submit your enquiry. Please check the details above and try again.",
        });
      }
    } catch (err) {
      console.error("Franchise enquiry network error:", err);
      setStatus({
        type: "error",
        text: "Couldn't reach our server. Check your connection and try again, or call +91 98848 66993.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#050505] font-poppins shadow-[0_0_100px_rgba(0,177,79,0.25)] md:flex-row md:rounded-[2.5rem]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 z-50 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-[#ea3323] md:right-6 md:top-6 md:h-10 md:w-10"
        >
          <X className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        {/* Left info panel */}
        <div className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1a10] to-[#050505] p-12 md:flex md:w-[35%]">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[#00b14f]/5 blur-[80px]" />
          <div className="relative z-10">
            <h2 id="enquiry-title" className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-[#00b14f]">
              {model}
              <br />
              <span className="text-white">Enquiry</span>
            </h2>
            <p className="mb-10 max-w-xs text-[16px] leading-relaxed text-white/70">
              Join the growing EV revolution! Fill out the form below to become a partner for our{" "}
              <span className="font-black text-[#00b14f]">{model}</span> model in Relux Electric&apos;s franchise
              network.
            </p>
            <ul className="space-y-6">
              {[
                { Icon: Phone, val: "+91 98848 66993", href: "tel:+919884866993" },
                { Icon: Mail, val: "enquiry@reluxelectric.com", href: "mailto:enquiry@reluxelectric.com" },
                { Icon: MapPin, val: "Chennai, India" },
              ].map(({ Icon, val, href }) => (
                <li key={val} className="group flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/5 bg-white/5 text-[#00b14f] transition-all group-hover:bg-[#00b14f] group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  {href ? (
                    <a href={href} className="text-xs font-bold tracking-tight text-white/70 hover:text-white">
                      {val}
                    </a>
                  ) : (
                    <span className="text-xs font-bold tracking-tight text-white/70">{val}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="w-full overflow-y-auto bg-black/50 p-6 md:w-[65%] md:p-12">
          <div className="mb-7 pr-10 md:hidden">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#00b14f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00b14f]">Enquiry</span>
            </div>
            <p className="text-2xl font-black uppercase leading-tight tracking-tighter text-white">
              {model} <span className="text-[#00b14f]">Partner</span>
            </p>
          </div>

          {status && (
            <div
              role={status.type === "error" ? "alert" : "status"}
              className={`mb-6 rounded-xl border p-4 text-center text-[13px] font-bold tracking-wide ${
                status.type === "success"
                  ? "border-[#00b14f]/30 bg-[#00b14f]/15 text-[#3ddc84]"
                  : "border-[#ea3323]/30 bg-[#ea3323]/15 text-[#ff6b5e]"
              }`}
            >
              {status.text}
            </div>
          )}

          <form className="space-y-4" onSubmit={onSubmit} noValidate={false}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name" id="enq-name">
                <input
                  ref={firstFieldRef}
                  id="enq-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Enter your name"
                  className={fieldCls}
                />
              </Field>
              <Field label="Email" id="enq-email">
                <input
                  id="enq-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="Enter your email"
                  className={fieldCls}
                />
              </Field>
            </div>

            <Field label="Phone" id="enq-phone">
              <input
                id="enq-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                pattern="[0-9+\s-]{10,15}"
                title="Enter a 10-digit mobile number"
                value={form.phone}
                onChange={onChange}
                placeholder="Enter phone number"
                className={fieldCls}
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Select State" id="enq-state">
                <Select id="enq-state" name="state" value={form.state} onChange={onChange}>
                  <option value="">Choose State</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Select City" id="enq-city">
                <Select id="enq-city" name="city" value={form.city} onChange={onChange} disabled={!form.state}>
                  <option value="">{form.state ? "Choose City" : "Choose state first"}</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Current Business Profile" id="enq-profile">
                <Select id="enq-profile" name="businessProfile" value={form.businessProfile} onChange={onChange}>
                  <option value="">Select Profile</option>
                  {BUSINESS_PROFILES.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Investment Range" id="enq-range">
                <Select id="enq-range" name="investmentRange" value={form.investmentRange} onChange={onChange}>
                  <option value="">Select Range</option>
                  {INVESTMENT_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <Field label="Message (optional)" id="enq-message">
              <textarea
                id="enq-message"
                name="message"
                rows={2}
                value={form.message}
                onChange={onChange}
                placeholder="Your message..."
                className={`${fieldCls} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#00b14f] text-[15px] font-black tracking-widest text-white shadow-[0_10px_30px_rgba(0,177,79,0.3)] transition-colors hover:bg-[#00c958] disabled:cursor-wait disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  Submit Enquiry <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} required className={selectCls}>
        {props.children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
    </div>
  );
}

export default EnquiryModal;
