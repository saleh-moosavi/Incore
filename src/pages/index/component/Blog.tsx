import { Link } from "react-router-dom";
import { blogPosts } from "../../../constants";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowUpRight,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from "react-icons/hi2";

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-right">
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              آخرین <span className="text-gradient">مقالات و اخبار</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
              جدیدترین مطالب تخصصی در حوزه عمران، ساخت‌وساز و معماری را از تیم
              مهندسی ما دنبال کنید.
            </p>
          </div>

          <Link
            to="/blog"
            className="group hidden sm:inline-flex items-center gap-2 rounded-2xl glass px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95"
          >
            مشاهده همه مقالات
            <HiOutlineArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Link
            to={`/blog/${featured.id}`}
            className="group relative glass overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 lg:col-span-2 lg:row-span-2"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[22rem]">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-4 right-4 rounded-full bg-gradient-to-l from-amber-500 to-orange-500 px-3 py-1 text-[11px] font-bold text-slate-950 shadow-lg shadow-amber-500/30">
                {featured.category}
              </div>
            </div>

            <div className="relative p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <HiOutlineCalendarDays className="h-4 w-4 text-amber-400/70" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiOutlineClock className="h-4 w-4 text-sky-400/70" />
                  {featured.readTime}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-amber-200 sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {featured.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-amber-500/30"
                    loading="lazy"
                  />
                  <span className="text-xs font-medium text-slate-300">
                    {featured.author.name}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition-colors group-hover:text-amber-200">
                  خواندن مقاله
                  <HiOutlineArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {rest.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative glass overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 right-3 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-amber-200">
                  {post.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-amber-200">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendarDays className="h-3.5 w-3.5 text-amber-400/70" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiOutlineClock className="h-3.5 w-3.5 text-sky-400/70" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-amber-500 to-orange-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 active:scale-95"
          >
            مشاهده همه مقالات
            <HiOutlineArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
