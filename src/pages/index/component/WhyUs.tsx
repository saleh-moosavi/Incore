import { WhyUsReasons } from "../../../constants";

const WhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[110px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            دلایلی که
            <span className="text-gradient">ما را انتخاب می‌کنند </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            کیفیت، تعهد و تخصص؛ سه اصل جدانشدنی که در هر پروژه به آن پایبندیم.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WhyUsReasons.map((r) => (
            <div
              key={r.title}
              className="group relative glass overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1.5"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 ring-1 ring-amber-500/30 transition-transform group-hover:scale-110">
                <r.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="relative text-base font-bold text-white transition-colors group-hover:text-amber-200">
                {r.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
