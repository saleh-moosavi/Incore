import { useState } from "react";
import { comments } from "../../../constants";
import { Stars } from "../../../components/Stars";
import { FaCheck, FaQuoteRight } from "react-icons/fa6";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const Comments = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % comments.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + comments.length) % comments.length);

  const t = comments[current];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[110px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            مشتریان ما <span className="text-gradient">چه می‌گویند؟</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            اعتماد و رضایت مشتریان، بزرگ‌ترین سرمایه و انگیزه ما برای ادامه مسیر
            است.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative glass-strong overflow-hidden rounded-[2rem] p-8 sm:p-10">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

            <FaQuoteRight className="absolute top-6 left-6 h-12 w-12 text-amber-500/15" />

            <div className="relative">
              <Stars count={t.rating} />

              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                «{t.text}»
              </p>

              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-amber-500/40"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-0.5 -left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-slate-950">
                      <FaCheck className="size-2" />
                    </span>
                  </div>
                  <div className="text-start">
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="mt-0.5 text-xs text-slate-400">
                      {t.role} — {t.company}
                    </div>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-200 ring-1 ring-white/10">
                  پروژه: {t.project}
                </div>
              </div>
            </div>
          </div>
          {/* Navigation button and indicators */}
          <div className="m-6 flex items-center justify-center gap-2">
            {comments.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`نظر شماره ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-l from-amber-500 to-orange-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="نظر قبلی"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-l from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 active:scale-95"
            >
              <HiOutlineChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="نظر بعدی"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-l from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 active:scale-95"
            >
              <HiOutlineChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
