import { FaChartLine, FaClock, FaHome, FaPlus } from 'react-icons/fa'

function App() {
  const navLinkBase =
    'inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-[13px] font-medium text-slate-500'

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[60px] w-[92%] max-w-[1160px] flex-nowrap items-center justify-between gap-4 py-2">
          <h1 className="m-0 shrink-0 text-[2rem] font-extrabold leading-none tracking-[-0.02em]">
            <span className="text-slate-900">Keen</span>
            <span className="text-[#1f7a5f]">Keeper</span>
          </h1>

          <nav className="flex shrink-0 items-center gap-2" aria-label="Main navigation">
            <a
              className={`${navLinkBase} bg-[#1f7a5f] text-[#FFFFFF]`}
              href="#"
            >
              <FaHome />
              <span className="text-[#FFFFFF]">Home</span>
            </a>
            <a className={`${navLinkBase} text-slate-600`} href="#">
              <FaClock />
              <span>Timeline</span>
            </a>
            <a className={`${navLinkBase} text-slate-600`} href="#">
              <FaChartLine />
              <span>Stats</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-[1160px] py-16 md:py-24">
        <section className="mx-auto flex max-w-[860px] flex-col items-center justify-center gap-7 rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm md:px-10">
          <h2 className="m-0 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Friends to keep close in your life
          </h2>
          <p className="m-0 max-w-[660px] text-base text-slate-500 md:text-[22px] md:leading-[1.4]">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-[#2a9c7b] bg-[#1f7a5f] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#1a6a53]"
          >
            <FaPlus />
            Add a Friend
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
