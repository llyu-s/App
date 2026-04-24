function YouTubeLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  );
}

function TwitchLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.9 2 2.4 6v14h5v2h2.8l2-2h3.7l6.1-6.1V2H3.9Zm16.1 11-3.5 3.5h-4.1l-2 2v-2H6.4V4H20v9Z" />
    </svg>
  );
}

function InstagramLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function XLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2 6 22M6 2l12 20" />
    </svg>
  );
}

function TikTokLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 5v8a4 4 0 1 1-4-4" />
    </svg>
  );
}

function RedditLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export default function PersonalWebsiteStarter() {
  const projects = [
    {
      title: "Focus",
      description: "BootLocked OSRS Ironman series.",
      tag: "Featured",
      dot: "bg-red-500",
      slug: "focus",
    },
    {
      title: "Thinker",
      description: "Medical learning systems.",
      tag: "In Progress",
      dot: "bg-yellow-500",
      slug: "thinker",
    },
    {
      title: "Improver",
      description: "Ongoing development.",
      tag: "Ongoing",
      dot: "bg-green-500",
      slug: "improver",
    },
  ];

  const links = [
    { icon: <YouTubeLogo />, href: "#" },
    { icon: <TwitchLogo />, href: "#" },
    { icon: <XLogo />, href: "#" },
    { icon: <InstagramLogo />, href: "#" },
    { icon: <TikTokLogo />, href: "#" },
    { icon: <RedditLogo />, href: "#" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <img src="/Final Banner10(1).png" className="w-full h-48 object-cover" />

      <div className="p-8">
        <h1 className="text-4xl font-bold">llyus</h1>

        <div className="flex gap-4 mt-4">
          {links.map((l, i) => (
            <a key={i} href={l.href}>{l.icon}</a>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl">Who I am</h2>
          <p className="text-zinc-400 mt-2">
            Medical student building systems to understand complex ideas.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">My Work</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {projects.map((p) => (
              <div key={p.title} className="p-4 border border-zinc-800 rounded-xl">
                <h3 className="text-xl">{p.title}</h3>
                <p className="text-zinc-400">{p.description}</p>
                <a href={`/work/${p.slug}`} className="text-sm mt-2 inline-block">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
