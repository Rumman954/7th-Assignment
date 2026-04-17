import { FaPlus } from 'react-icons/fa'

export function HomePage() {
  return (
    <div className="py-14 md:py-20">
      <section className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="m-0 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-500 md:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button
          className="mt-7 inline-flex h-11 items-center gap-2 rounded-md border border-[#1f5b48] bg-[#1f5b48] px-6 text-sm font-semibold text-white transition hover:bg-[#194b3c]"
          type="button"
        >
          <FaPlus /> Add a Friend
        </button>
      </section>
    </div>
  )
}
