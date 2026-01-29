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
          
    </div>
  )
}

export default HeadingMsg