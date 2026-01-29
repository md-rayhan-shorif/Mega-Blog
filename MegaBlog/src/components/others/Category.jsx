import React from 'react'

const Category = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar">
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-none">All Stories</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Mindset</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Technology</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Philosophy</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Design</button>
        </div>
  )
}

export default Category