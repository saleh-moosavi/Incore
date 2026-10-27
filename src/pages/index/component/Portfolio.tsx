import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CategoryKey,
  PortfolioCategories,
  PortfolioProject,
} from "../../../constants";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowUpRight,
  HiOutlineMapPin,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

const Portfolio = () => {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered =
    active === "all"
      ? PortfolioProject
      : PortfolioProject.filter((p) => p.category === active);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            پروژه‌هایی که{" "}
            <span className="text-gradient">افتخار می‌آفرینند</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            نگاهی به برخی از پروژه‌های شاخص ما در حوزه‌های مسکونی، تجاری، صنعتی
            و بازسازی.
          </p>
        </div>

        {/* ===== فیلتر دسته‌بندی ===== */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {PortfolioCategories.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-l from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30"
                    : "glass text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative glass overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-[11px] font-semibold text-amber-200">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/10 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <HiOutlineArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-white transition-colors group-hover:text-amber-200">
                  {project.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineMapPin className="h-4 w-4 text-amber-400/70" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendarDays className="h-4 w-4 text-sky-400/70" />
                    {project.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass mt-10 rounded-2xl p-10 text-center">
            <p className="text-sm text-slate-400">
              پروژه‌ای در این دسته‌بندی یافت نشد.
            </p>
          </div>
        )}

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-orange-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95"
          >
            مشاهده همه پروژه‌ها
            <HiOutlineArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95"
          >
            پروژه خود را شروع کنید
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
