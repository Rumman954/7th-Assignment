import { FaChartLine, FaClock, FaHome } from 'react-icons/fa'

function App() {
  const navLinkBase =
    'inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-[13px] font-medium text-slate-500'

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[60px] w-[92%] max-w-[1160px] flex-nowrap items-center justify-between gap-4 py-2">
        <h1 className="m-0 shrink-0 text-[2rem] font-extrabold leading-none tracking-[-0.02em]">
          <span className="text-[#1F2937]">Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </h1>

        <nav className="flex shrink-0 items-center gap-2" aria-label="Main navigation">
          <a
            className={`${navLinkBase} bg-[#244D3F] text-[#FFFFFF]`}
            href="#"
          >
            <FaHome />
            <span className="text-[#FFFFFF]">Home</span>
          </a>
          <a className={navLinkBase} href="#">
            <FaClock />
            <span>Timeline</span>
          </a>
          <a className={navLinkBase} href="#">
            <FaChartLine />
            <span>Stats</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default App
