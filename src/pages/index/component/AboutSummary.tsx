import { Link } from "react-router-dom";
import { FaHardHat } from "react-icons/fa";
import { HiOutlineArrowLeft, HiOutlineCheckCircle } from "react-icons/hi2";
import { AboutSummaryFeatures, AboutSummaryPillars } from "../../../constants";

const AboutSummary = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute top-1/4 -right-32 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/20 via-transparent to-sky-500/20 blur-2xl" />

            <div className="relative glass-strong overflow-hidden rounded-[2rem] p-2">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src="/assets/hero.jpg"
                  alt="تیم مهندسی در محل پروژه"
                  className="h-[26rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30">
                  <FaHardHat className="h-7 w-7 text-slate-950" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">۱۵+</div>
                  <div className="text-xs text-slate-400">سال تجربه درخشان</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 animate-float-slower">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-200">
                  ۱۲ پروژه فعال
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              ما <span className="text-gradient">اعتماد</span> می‌سازیم
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-300 text-justify">
              شرکت Incore از سال ۱۳۸۸ فعالیت خود را در حوزه ساخت‌وساز، پروژه‌های
              عمرانی و صنعتی آغاز کرده است. ما با تکیه بر تیم متخصص، تجهیزات
              مدرن و تعهد به کیفیت، پروژه‌هایی ماندگار خلق می‌کنیم که سال‌ها پس
              از تحویل نیز افتخار می‌آفرینند.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {AboutSummaryFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {AboutSummaryPillars.map((p) => (
                <div
                  key={p.title}
                  className="glass rounded-2xl p-4 transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  <p.icon className="h-6 w-6 text-amber-400" />
                  <div className="mt-2 text-sm font-bold text-white">
                    {p.title}
                  </div>
                  <div className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-orange-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95"
            >
              بیشتر درباره ما بدانید
              <HiOutlineArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
