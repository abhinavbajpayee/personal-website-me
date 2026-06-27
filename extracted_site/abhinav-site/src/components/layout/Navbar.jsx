import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { navigation, profile } from "../../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProjectsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-ink hover:text-amber-soft transition-colors"
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-ink-muted hover:text-ink transition-colors">
                  {item.label}
                  <HiChevronDown className="text-xs" />
                </button>
                <AnimatePresence>
                  {projectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 glass rounded-xl overflow-hidden min-w-[200px] py-1"
                    >
                      <Link
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-ink hover:bg-white/5 transition-colors"
                      >
                        All Projects
                      </Link>
                      <div className="h-px bg-hairline mx-2" />
                      {item.children.map((c) => (
                        <Link
                          key={c.path}
                          to={c.path}
                          className="block px-4 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-white/5 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-ink text-void px-5 py-2 text-sm font-medium hover:bg-amber-soft transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-ink text-2xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-graphite border-t border-hairline overflow-hidden backdrop-blur-xl"
            style={{ backgroundColor: "rgba(20, 22, 26, 0.98)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className="block py-2.5 text-ink text-sm"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 flex flex-col">
                      {item.children.map((c) => (
                        <Link
                          key={c.path}
                          to={c.path}
                          className="block py-2 text-ink-muted text-sm"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
