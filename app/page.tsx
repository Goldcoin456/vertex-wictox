import NextLink from 'next/link';
import { SearchIcon } from '@/lib/components/ui';

const courses = [
  {
    mark: 'N',
    markClass: 'bg-[#111111] text-white font-serif text-5xl',
    title: 'Next.js for Production',
    description: 'Build scalable, high-performance web applications with Next.js.',
    level: 'Intermediate',
    duration: '18h 24m',
    modules: '12 modules',
  },
  {
    mark: '▣',
    markClass: 'bg-[#65b7ed] text-[#153b65] text-5xl',
    title: 'Docker Essentials',
    description: 'Containerize applications and streamline your development workflow.',
    level: 'Beginner',
    duration: '10h 12m',
    modules: '8 modules',
  },
  {
    mark: 'TS',
    markClass: 'bg-[#3178c6] text-white font-bold text-3xl',
    title: 'TypeScript Deep Dive',
    description: 'Go beyond the basics and write safer, more expressive code.',
    level: 'Intermediate',
    duration: '14h 36m',
    modules: '10 modules',
  },
];

function VertexMark() {
  return (
    <svg aria-hidden="true" className="h-9 w-8" viewBox="0 0 34 40" fill="none">
      <path d="M2 3h11l4 8 4-8h11L17 37 2 3Z" fill="#EC6845" />
      <path d="M13 3h8l-4 8-4-8Z" fill="#FFF9F5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
    </svg>
  );
}

function CourseMeta({ type, children }: { type: 'level' | 'time' | 'modules'; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 whitespace-nowrap">
      {type === 'level' && <span aria-hidden="true" className="flex items-end gap-px"><i className="h-1.5 w-px bg-[#556070]" /><i className="h-2.5 w-px bg-[#556070]" /><i className="h-3.5 w-px bg-[#556070]" /></span>}
      {type === 'time' && <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full border border-[#556070]" />}
      {type === 'modules' && <span aria-hidden="true" className="h-3.5 w-2.5 rounded-[1px] border border-[#556070]" />}
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="vertex-page min-h-screen overflow-hidden bg-[#f8f4f0] text-[#101114]">
      <div className="mx-auto min-h-screen max-w-[968px] border-x border-[#eadfd8] bg-[#fcfaf8] shadow-[0_0_60px_rgba(78,48,28,0.04)]">
        <header className="flex min-h-[96px] items-center justify-between border-b border-[#eee5df] px-8 md:px-12">
          <div className="flex items-center gap-12">
            <NextLink href="/" className="flex items-center gap-2.5 text-[24px] font-semibold tracking-[-0.06em]" aria-label="Vertex home">
              <VertexMark />
              <span>Vertex</span>
            </NextLink>
            <nav className="hidden items-center gap-11 text-[16px] md:flex" aria-label="Main navigation">
              <a className="transition-colors hover:text-[#ed6845]" href="#courses">Courses</a>
              <a className="transition-colors hover:text-[#ed6845]" href="#learning">My Learning</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button className="rounded-full p-2 transition-colors hover:bg-[#f3e9e3] focus-visible:outline-2 focus-visible:outline-[#ed6845]" aria-label="Notifications"><BellIcon /></button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8dfd7] text-sm font-medium ring-1 ring-[#ded2c9] focus-visible:outline-2 focus-visible:outline-[#ed6845]" aria-label="Open profile">AM</button>
          </div>
        </header>

        <main>
          <section className="px-6 pb-[52px] pt-[68px] text-center md:px-12 md:pt-[68px]">
            <p className="mx-auto mb-8 inline-flex rounded-lg border border-[#f0ddd2] bg-[#fffaf7] px-4 py-2 text-[12px] font-semibold tracking-[0.18em] text-[#e95f3d]">INTELLIGENT LEARNING</p>
            <h1 className="mx-auto max-w-[680px] font-serif text-[48px] leading-[1.08] tracking-[-0.045em] md:text-[64px]">Search your learning<br />in plain English.</h1>
            <p className="mx-auto mt-7 max-w-[530px] text-[20px] leading-[1.6] text-[#5d6675]">Vertex understands what you want to learn and<br className="hidden md:block" /> finds the exact lessons across all your courses.</p>
            <a href="#courses" className="mx-auto mt-8 inline-flex items-center gap-5 rounded-lg bg-[#ed6a46] px-6 py-4 text-[18px] text-white shadow-[0_5px_10px_rgba(213,88,52,0.2)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c54e2e]">Explore Courses <ArrowIcon /></a>
            <label className="mx-auto mt-10 flex max-w-[746px] items-center gap-5 rounded-xl border border-[#efdfd5] bg-white px-6 py-5 text-left shadow-[0_2px_8px_rgba(93,57,36,0.04)] focus-within:border-[#ed6a46] focus-within:ring-2 focus-within:ring-[#ed6a46]/10">
              <SearchIcon size="lg" className="text-[#2d333c]" />
              <input aria-label="Search your learning" className="min-w-0 flex-1 bg-transparent text-[20px] text-[#7b8493] outline-none placeholder:text-[#9aa1ad]" placeholder="Ask anything about your learning..." />
              <kbd className="hidden rounded-md border border-[#ebdfd8] px-3 py-2 text-[17px] text-[#535963] sm:block">⌘ K</kbd>
            </label>
          </section>

          <section id="courses" className="border-t border-[#eee5df] px-8 pb-16 pt-[52px] md:px-12">
            <div className="mb-7 flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-[28px] tracking-[-0.04em]">All Courses</h2>
              <a href="#courses" className="flex items-center gap-3 text-[15px] text-[#e95f3d] hover:text-[#bd452a]">View all courses <ArrowIcon /></a>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {courses.map((course) => (
                <article key={course.title} className="flex min-h-[373px] flex-col rounded-xl border border-[#eedfd7] bg-[#fffdfb] p-6 transition-transform hover:-translate-y-1">
                  <div className={`flex h-[74px] w-[74px] items-center justify-center rounded-xl ${course.markClass}`}>{course.mark}</div>
                  <h3 className="mt-7 font-serif text-[23px] leading-[1.2] tracking-[-0.03em]">{course.title}</h3>
                  <p className="mt-5 text-[15px] leading-[1.6] text-[#626b79]">{course.description}</p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-[#eee3dc] pt-5 text-[11px] text-[#596272]">
                    <CourseMeta type="level">{course.level}</CourseMeta><CourseMeta type="time">{course.duration}</CourseMeta><CourseMeta type="modules">{course.modules}</CourseMeta>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="learning" className="relative overflow-hidden border-t border-[#eee5df] px-8 pb-0 pt-11 text-center md:px-12">
            <div className="mx-auto flex max-w-[700px] items-center gap-7 text-[18px] text-[#4f5560]"><span className="hidden h-px flex-1 bg-[#ecdcd3] sm:block" /><span className="text-[27px] leading-none text-[#ed6a46]">☆</span><span className="whitespace-nowrap">New courses and lessons added every week.</span><span className="hidden h-px flex-1 bg-[#ecdcd3] sm:block" /></div>
            <div aria-hidden="true" className="vertex-bars mx-[-48px] mt-9 h-36" />
          </section>
        </main>
      </div>
    </div>
  );
}
