import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet — this opens a pre-filled email as a reliable fallback.
    const subject = encodeURIComponent(`Message from ${form.name || "your site"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        accent="amber"
        title="Let's talk."
        description="Recruiter, founder, admissions officer, fellow builder, or reader of the book — I'd like to hear from you."
      />

      <Container wide className="pb-28">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          <Reveal>
            <div className="space-y-5">
              <Card className="flex items-center gap-4">
                <HiOutlineMail className="text-xl text-current-soft flex-shrink-0" />
                <a href={`mailto:${profile.email}`} className="text-sm text-ink hover:text-current-soft transition-colors break-all">
                  {profile.email}
                </a>
              </Card>
              <Card className="flex items-center gap-4">
                <HiOutlinePhone className="text-xl text-current-soft flex-shrink-0" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-sm text-ink hover:text-current-soft transition-colors">
                  {profile.phone}
                </a>
              </Card>
              <Card className="flex items-center gap-4">
                <HiOutlineLocationMarker className="text-xl text-current-soft flex-shrink-0" />
                <span className="text-sm text-ink">{profile.location}</span>
              </Card>

              <Card>
                <p className="eyebrow mb-4">Elsewhere</p>
                <div className="flex gap-4 text-2xl text-ink-muted">
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-current-soft transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-current-soft transition-colors">
                    <FaGithub />
                  </a>
                  <a href={profile.links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-current-soft transition-colors">
                    <SiLeetcode />
                  </a>
                </div>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              {status === "sent" ? (
                <div className="py-10 text-center">
                  <p className="font-display text-xl text-ink mb-2">
                    Your email app should be open now.
                  </p>
                  <p className="text-sm text-ink-muted">
                    If it didn't open, write directly to{" "}
                    <a href={`mailto:${profile.email}`} className="text-current-soft">
                      {profile.email}
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="eyebrow block mb-2">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-hairline rounded-xl px-4 py-3 text-sm text-ink focus:border-current-soft outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow block mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-hairline rounded-xl px-4 py-3 text-sm text-ink focus:border-current-soft outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="eyebrow block mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-hairline rounded-xl px-4 py-3 text-sm text-ink focus:border-current-soft outline-none transition-colors resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Send message
                  </Button>
                  <p className="text-xs text-ink-faint text-center">
                    This opens your email app with the message pre-filled — there's no server behind this form yet.
                  </p>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
