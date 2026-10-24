import { Link } from "react-router-dom";
import { ServicesData } from "../../../constants";
import { HiOutlineArrowLeft, HiOutlineArrowUpRight } from "react-icons/hi2";

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[110px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            خدمات <span className="text-gradient">ما</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            از اولین نقشه تا آخرین آجر، تمام مراحل پروژه شما را با تخصص و تعهد
            همراهی می‌کنیم.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ServicesData.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative glass overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-500/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 ring-1 ring-amber-500/30 transition-transform group-hover:scale-110">
                <s.icon className="h-7 w-7 text-amber-400" />
              </div>

              <h3 className="relative text-lg font-bold text-white transition-colors group-hover:text-amber-200">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {s.desc}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-1.5 justify-center">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs font-medium text-amber-300/80 transition-colors group-hover:text-amber-300">
                  مشاهده جزئیات
                </span>
                <HiOutlineArrowUpRight className="h-5 w-5 text-slate-400 transition-all group-hover:text-amber-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-orange-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95"
          >
            مشاهده همه خدمات
            <HiOutlineArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95"
          >
            درخواست مشاوره
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
