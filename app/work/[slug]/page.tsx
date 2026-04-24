import { notFound } from "next/navigation";

const projects = {
  focus: {
    title: "Focus",
    description:
      "OSRS Ironman Series except gear is locked behind earning each respective tier level's boot drop first before I can use it in game.",
    content:
      "This is your BootLocked series. Here you can go deeper: rules, progression, goals, future plans, and videos.",
  },
  thinker: {
    title: "Thinker",
    description:
      "Designing systems to understand complex medical concepts more effectively.",
    content:
      "Use this page to break down your study systems, frameworks, and how you approach learning medicine.",
  },
  improver: {
    title: "Improver",
    description: "An ongoing development.",
    content:
      "Document experiments, habits, and things you're actively improving over time.",
  },
};

export default function WorkPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#08090a] text-zinc-100 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm text-zinc-400 hover:text-white transition"
        >
          ← Back
        </a>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-zinc-400">
          {project.description}
        </p>

        <div className="mt-10 border-t border-zinc-800 pt-10">
          <p className="text-zinc-300 leading-8">
            {project.content}
          </p>
        </div>
      </div>
    </main>
  );
}
