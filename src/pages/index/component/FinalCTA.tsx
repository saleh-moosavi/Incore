import { Link } from "react-router-dom";
import { FaHardHat } from "react-icons/fa";
import { CtaBenefits } from "../../../constants";
import {
  HiOutlineArrowLeft,
  HiOutlinePhone,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[130px] animate-pulse-glow" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative glass-strong overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <FaHardHat className="absolute -bottom-10 -left-10 h-64 w-64 text-white/[0.03] rotate-12" />
          <FaHardHat className="absolute -top-10 -right-10 h-48 w-48 text-white/[0.03] -rotate-12" />

          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-right">
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                پروژه خود را
                <br />
                <span className="text-gradient">با ما شروع کنید</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:mx-0 mx-auto">
                همین امروز با تیم متخصص ما تماس بگیرید و اولین قدم را برای ساخت
                آینده‌ای مستحکم بردارید. مشاوره اولیه کاملاً رایگان است.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2.5 lg:mx-0 mx-auto max-w-md">
                {CtaBenefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-amber-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+982112345678"
                className="group flex items-center justify-between gap-3 rounded-2xl glass px-6 py-5 font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                    <HiOutlinePhone className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">تماس مستقیم</div>
                    <div className="text-[11px] text-slate-400">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                    </div>
                  </div>
                </div>
                <HiOutlineArrowLeft className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-x-1" />
              </a>

              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white"
              >
                ابتدا نمونه‌کارها را ببینید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
