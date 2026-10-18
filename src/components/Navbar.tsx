import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineArrowLeft,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { FaHardHat } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <nav
          className={`relative flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-2xl shadow-black/40"
              : "glass shadow-xl shadow-black/20"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 transition-transform group-hover:scale-105">
              <FaHardHat className="h-6 w-6 text-slate-950" />
              <span className="absolute -inset-1 rounded-xl bg-amber-500/20 blur-md -z-10" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-white">
                <span className="text-gradient">Incore</span>
              </div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-amber-300"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {link.children && (
                        <HiOutlineChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                      )}
                    </>
                  )}
                </NavLink>

                {link.children && (
                  <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute right-0 top-full pt-3 w-56">
                    <div className="glass-strong rounded-2xl p-2 shadow-2xl shadow-black/40">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all ${
                              isActive
                                ? "bg-amber-500/15 text-amber-300"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                            }`
                          }
                        >
                          {child.label}
                          <HiOutlineArrowLeft className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-95"
            >
              مشاوره رایگان
              <HiOutlineArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="منو"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl glass text-white transition-colors hover:bg-white/10"
          >
            {mobileOpen ? (
              <HiOutlineXMark className="h-6 w-6" />
            ) : (
              <HiOutlineBars3 className="h-6 w-6" />
            )}
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden ${
            mobileOpen ? "max-h-[80vh] mt-2 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-strong rounded-2xl p-3 shadow-2xl shadow-black/40 max-h-[75vh] overflow-y-auto">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown((v) =>
                            v === link.to ? null : link.to,
                          )
                        }
                        className="flex w-full items-center justify-center rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
                      >
                        {link.label}
                        <HiOutlineChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === link.to ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdown === link.to
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="mr-3 space-y-1 border-r border-white/10 pr-3 py-1">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `block rounded-lg px-3 py-2 text-sm transition-colors ${
                                  isActive
                                    ? "bg-amber-500/15 text-amber-300"
                                    : "text-slate-400 hover:text-white"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-amber-500/15 text-amber-300"
                            : "text-slate-200 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 to-orange-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/30"
              >
                درخواست مشاوره رایگان
                <HiOutlineArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
