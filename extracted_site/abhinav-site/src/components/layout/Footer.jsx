import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile, navigation } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  const flatLinks = navigation.flatMap((item) =>
    item.children ? [item, ...item.children] : [item]
  );

  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="font-display text-xl text-ink">
              {profile.name}
            </Link>
            <p className="mt-3 text-sm text-ink-muted max-w-xs">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-4 mt-5 text-lg text-ink-muted">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-current-soft transition-colors">
                <FaLinkedin />
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-current-soft transition-colors">
                <FaGithub />
              </a>
              <a href={profile.links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-current-soft transition-colors">
                <SiLeetcode />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-current-soft transition-colors">
                <HiOutlineMail />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:col-span-2 md:grid-cols-3">
            {flatLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-ink-muted hover:text-ink transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-12 pt-6 border-t border-hairline text-xs text-ink-faint">
          <span>© {year} {profile.name}. Built and maintained personally.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
