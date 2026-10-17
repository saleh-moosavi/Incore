import { Link } from "react-router-dom";
import { heroStats } from "../../../constants";
import {
  HiOutlineBuildingOffice2,
  HiOutlineArrowLeft,
  HiOutlinePlayCircle,
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center">
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-amber-500/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-sky-500/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-right">
            <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-amber-200">
              پیشرو در صنعت ساخت‌وساز ایران
            </p>

            <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              می‌سازیم آینده‌ای
              <br />
              <span className="text-gradient">مستحکم و ماندگار</span>
            </h1>

            {/* توضیح */}
            <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              از طراحی تا اجرا، در کنار شما هستیم. با بیش از ۱۵ سال تجربه در
              پروژه‌های عمرانی، ساختمانی و صنعتی، استانداردهای جهانی را به
              واقعیت تبدیل می‌کنیم.
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95"
              >
                درخواست مشاوره رایگان
                <HiOutlineArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-2xl glass px-7 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95"
              >
                <HiOutlinePlayCircle className="h-5 w-5 text-amber-400" />
                مشاهده نمونه‌کارها
              </Link>
            </div>

            <div className="animate-fade-up-delay-4 mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-4 text-center transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  <s.icon className="mx-auto mb-1.5 h-6 w-6 text-amber-400" />
                  <div className="text-xl font-extrabold text-white">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/30 via-orange-500/20 to-sky-500/30 blur-2xl" />

              <div className="relative glass-strong overflow-hidden rounded-[2rem] p-2">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img
                    src="./assets/hero.jpg"
                    alt="پروژه ساختمانی"
                    className="h-[28rem] w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 right-4 left-4 glass rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-start text-xs text-amber-300">
                          پروژه شاخص
                        </div>
                        <div className="mt-0.5 font-bold text-white">
                          برج مسکونی آرمان
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                        <HiOutlineCheckBadge className="h-4 w-4" />
                        تکمیل شده
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float-slower">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20">
                    <HiOutlineShieldCheck className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      تضمین کیفیت
                    </div>
                    <div className="text-xs text-slate-400">ISO 9001:2015</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <HiOutlineBuildingOffice2 className="h-5 w-5 text-sky-400" />
                  <div className="text-sm font-bold text-white">+۲۴۰ پروژه</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
