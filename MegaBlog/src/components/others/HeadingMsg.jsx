import React from 'react'

const HeadingMsg = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">The Archive</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Explore our collection of long-form essays and insights across technology, design, and culture.
            </p>
          </div>
          <div className="w-full md:w-80">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563eb] transition-colors">search</span>
              <input className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563eb] transition-all outline-none" placeholder="Search articles..." type="text"/>
            </div>
          </div>
    </div>
  )
}

export default HeadingMsg