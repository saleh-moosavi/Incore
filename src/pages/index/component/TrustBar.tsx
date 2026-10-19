import { trustBarCertifications, trustBarClients } from "../../../constants";

const TrustBar = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[100px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            مورد اعتماد{" "}
            <span className="text-gradient">بزرگ‌ترین سازمان‌ها</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            همکاری با برندهای پیشرو و کسب استانداردهای بین‌المللی در حوزه عمران
            و ساخت‌وساز
          </p>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="group flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
              {[...trustBarClients, ...trustBarClients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="glass flex items-center gap-3 rounded-2xl px-6 py-4 transition-all hover:bg-white/20 shrink-0"
                >
                  <client.icon className="h-5 w-5 text-amber-400/80" />
                  <span className="whitespace-nowrap text-sm font-semibold text-slate-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex shrink-0 animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]"
            >
              {[...trustBarClients, ...trustBarClients].map((client, i) => (
                <div
                  key={`${client.name}-dup-${i}`}
                  className="glass flex items-center gap-3 rounded-2xl px-6 py-4 transition-all hover:bg-white/10 hover:-translate-y-1 shrink-0"
                >
                  <client.icon className="h-5 w-5 text-amber-400/80" />
                  <span className="whitespace-nowrap text-sm font-semibold text-slate-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {trustBarCertifications.map((cert) => (
            <div
              key={cert.title}
              className="group glass relative overflow-hidden rounded-2xl p-5 text-center transition-all hover:bg-white/10 hover:-translate-y-1"
            >
              <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-amber-500/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 ring-1 ring-amber-500/30">
                <cert.icon className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-sm font-bold text-white">{cert.title}</div>
              <div className="mt-0.5 text-xs text-slate-400">
                {cert.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
