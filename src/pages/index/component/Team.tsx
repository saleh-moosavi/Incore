import { Link } from "react-router-dom";
import { TeamMembers } from "../../../constants";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowLeft, HiOutlineEnvelope } from "react-icons/hi2";

const Team = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            آشنایی با <span className="text-gradient">متخصصان ما</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            تیمی از مهندسان و متخصصان مجرب که با عشق و تعهد، آینده‌ای مستحکم
            می‌سازند.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TeamMembers.map((m) => (
            <div
              key={m.id}
              className="group relative glass overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-4 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {m.socials.linkedin && (
                    <a
                      href={m.socials.linkedin}
                      aria-label={`لینکدین ${m.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md text-white transition-colors hover:bg-amber-500 hover:text-slate-950"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>
                  )}
                  {m.socials.twitter && (
                    <a
                      href={m.socials.twitter}
                      aria-label={`توییتر ${m.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md text-white transition-colors hover:bg-amber-500 hover:text-slate-950"
                    >
                      <FaXTwitter className="h-4 w-4" />
                    </a>
                  )}
                  {m.socials.email && (
                    <a
                      href={`mailto:${m.socials.email}`}
                      aria-label={`ایمیل ${m.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md text-white transition-colors hover:bg-amber-500 hover:text-slate-950"
                    >
                      <HiOutlineEnvelope className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-white transition-colors group-hover:text-amber-200">
                  {m.name}
                </h3>
                <div className="mt-1 text-xs font-medium text-amber-300/90">
                  {m.role}
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-orange-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95"
          >
            مشاهده کل تیم
            <HiOutlineArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95"
          >
            همکاری با ما
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
