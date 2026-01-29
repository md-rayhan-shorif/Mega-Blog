import React from 'react';
import PostCard from '../components/cards/PostCard';
import Pagination from '../components/others/Pagination';

const AllPost = () => {
  return (
    <div className="bg-[#fdfdfd] dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* Navbar */}
     

      {/* Header & Categories */}
      <header className="pt-20 pb-12 max-w-7xl mx-auto px-6 lg:px-8">
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

        {/* Category Pills */}
        <div className="mt-12 flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar">
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-none">All Stories</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Mindset</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Technology</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Philosophy</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Design</button>
        </div>
      </header>

      {/* Posts Grid */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Post Card Component (Repeatable) */}
          {[1, 2, 3, 4, 5, 6].map((post) => (
          <PostCard/>
          ))}
        </div>

        {/* Pagination */}
       <Pagination/>
      </main>

      
    </div>
  );
};

export default AllPost;