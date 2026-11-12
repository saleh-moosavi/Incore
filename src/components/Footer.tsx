import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHardHat } from "react-icons/fa";
import { HiOutlinePaperAirplane, HiOutlineChevronUp } from "react-icons/hi2";
import {
  footerContacts,
  footerQuickLinks,
  footerServices,
  footerSocials,
} from "../constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-8">
          {/* Info Section */}
          <section className="lg:col-span-5 lg:text-start">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 transition-transform group-hover:scale-105">
                <FaHardHat className="h-6 w-6 text-slate-950" />
                <span className="absolute -inset-1 rounded-xl bg-amber-500/20 blur-md -z-10" />
              </div>
              <div className="leading-tight">
                <span className="text-gradient text-lg font-extrabold text-white">
                  Incore
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              از سال ۱۳۸۸ با تکیه بر تخصص، تعهد و نوآوری، آینده‌ای مستحکم برای
              ایران عزیز می‌سازیم. کیفیت، امانت و پایداری؛ تعهد ما به شماست.
            </p>

            <div className="mt-6">
              <div className="text-sm font-bold text-white">
                عضویت در خبرنامه
              </div>
              <p className="mt-1 text-xs text-slate-500">
                جدیدترین مقالات و اخبار را در ایمیل خود دریافت کنید.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mt-3 flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل شما..."
                    className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="عضویت در خبرنامه"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-l from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-105 active:scale-95"
                >
                  <HiOutlinePaperAirplane className="h-5 w-5 rotate-180" />
                </button>
              </form>

              {subscribed && (
                <p className="mt-2 text-xs font-medium text-emerald-400 text-start">
                  ✓ با موفقیت در خبرنامه عضو شدید.
                </p>
              )}
            </div>
          </section>

          {/* Links Section */}
          <section className="lg:col-span-2 lg:text-start">
            <h3 className="text-sm font-bold text-white">لینک‌های سریع</h3>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center justify-center lg:justify-normal gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-300"
                  >
                    <span className="-m-1 w-0 aspect-square rounded-full bg-amber-500/0 transition-all group-hover:w-1.5 group-hover:bg-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Services Section */}
          <div className="lg:col-span-2 lg:text-start">
            <h3 className="text-sm font-bold text-white">خدمات ما</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="group flex items-center justify-center lg:justify-normal gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-300"
                  >
                    <span className="-m-1 w-0 aspect-square rounded-full bg-amber-500/0 transition-all group-hover:w-1.5 group-hover:bg-amber-400" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white lg:text-start">
              اطلاعات تماس
            </h3>
            <ul className="mt-4 space-y-3.5">
              {footerContacts.map((c) => (
                <li
                  key={c.label}
                  className="flex items-start justify-center lg:justify-start gap-2.5"
                >
                  <div className="mt-0.5 hidden lg:flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-500/20">
                    <c.icon className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="min-w-0 lg:text-start">
                    <div className="text-[11px] text-slate-500">{c.label}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block truncate text-sm text-slate-300 transition-colors hover:text-amber-300"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm text-slate-300">{c.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Social Sextion */}
        <div className="my-5 mx-auto">
          <div className="text-xs font-medium text-slate-500">
            ما را دنبال کنید
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl glass text-slate-300 transition-all hover:bg-amber-500 hover:text-slate-950 hover:-translate-y-0.5"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* End Section */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-xs text-slate-400 sm:text-right">
            © {year} Incore - تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link
              to="/privacy"
              className="transition-colors hover:text-amber-300"
            >
              حریم خصوصی
            </Link>
            <span className="h-3 w-px bg-white/20" />
            <Link
              to="/terms"
              className="transition-colors hover:text-amber-300"
            >
              قوانین و مقررات
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="بازگشت به بالا"
            className="group flex items-center gap-2 rounded-xl glass px-3 py-2 text-xs font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-amber-300 active:scale-95"
          >
            <HiOutlineChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            بازگشت به بالا
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
