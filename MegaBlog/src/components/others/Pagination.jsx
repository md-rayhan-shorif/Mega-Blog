import React from 'react'

const Pagination = () => {
  return (
    // * desing will be improve leter.
     <div className="mt-20 flex justify-center items-center gap-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-400">
            <span className="material-symbols-outlined text-xl"> {"<-"} </span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm">1</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors font-medium text-sm">2</button>
          <span className="px-2 text-slate-400">...</span>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-400">
            <span className="material-symbols-outlined text-xl">{"->"} </span>
          </button>
    </div>
  )
}

export default Pagination