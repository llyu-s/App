export default function HomePage() {
  const projects = [
    {
      title: "Project One",
      description:
        "A short description of something important you’ve built, researched, or created.",
      tag: "Featured",
    },
    {
      title: "Project Two",
      description:
        "Another project, paper, channel, or portfolio item you want visitors to notice.",
      tag: "Recent",
    },
    {
      title: "Project Three",
      description:
        "Use this space for a case study, video series, startup idea, or personal milestone.",
      tag: "In Progress",
    },
  ];

  const links = [
    { label: "YouTube", href: "https://www.youtube.com/@llyus" },
    { label: "Twitch", href: "https://www.twitch.tv/llyus" },
    { label: "X", href: "https://x.com/llyus_" },
    { label: "Instagram", href: "https://www.instagram.com/llyus_" },
    { label: "TikTok", href: "https://www.tiktok.com/@llyus_" },
    { label: "Reddit", href: "https://www.reddit.com/r/llyus/" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className="flex flex-col gap-4 border-b border-zinc-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Personal Website
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">llyus</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <a
              className="rounded-full border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-full border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
              href="#work"
            >
              Work
            </a>
            <a
              className="rounded-full border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="grid gap-8 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-zinc-800 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
              Thinker • Creator • Healer
            </p>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                A clean home for your work, ideas, and identity online.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                Most of what I make is an attempt to think clearly, test ideas,
                and build something useful.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-2xl">
            <div className="space-y-5">
              <div className="h-56 rounded-[1.5rem] border border-zinc-800 bg-zinc-900/70 p-5">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Currently focused on</p>
                    <p className="mt-2 text-2xl font-semibold">
                      Starting a Youtube Channel
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-zinc-300">
                    <div className="rounded-2xl border border-zinc-800 p-3">
                      <p className="text-zinc-500">Progress</p>
                      <p className="mt-1">Very beginning</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 p-3">
                      <p className="text-zinc-500">Focus</p>
                      <p className="mt-1">RuneScape</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                This changes constantly; come back again to see what else I am
                doing soon
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-6 border-t border-zinc-800 py-14 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              About
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Who I am
            </h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p className="leading-7">
              I’m a medical student and creator focused on building systems that
              make complex things easier to understand through my interests.
            </p>
            <p className="leading-7">
              This site is a collection of things I’ve made while trying to
              understand what works, what matters, and how to get better over
              time.
            </p>
          </div>
        </section>

        <section id="work" className="border-t border-zinc-800 py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                Selected Work
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Things I've made
              </h3>
            </div>
            <p className="text-sm leading-6 text-zinc-400 whitespace-nowrap text-right ml-auto mr-4">
              Cards for my most recent and or favorite projects, videos,
              publications, designs, and ideas
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/50 p-5 transition hover:-translate-y-0.5 hover:bg-zinc-900"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {project.tag}
                </p>
                <h4 className="mt-3 text-xl font-semibold tracking-tight">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {project.description}
                </p>
                <button className="mt-5 text-sm font-medium text-white underline underline-offset-4">
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-800 py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                Contact
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Links for me
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
                Email me questions/suggestions! Or check out more of my stuff
              </p>
            </div>
            <a
              href="mailto:llyus.co@outlook.com"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
            >
              Email Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
