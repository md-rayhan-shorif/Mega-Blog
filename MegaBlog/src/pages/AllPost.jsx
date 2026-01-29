import React from 'react';
import PostCard from '../components/cards/PostCard';
import Pagination from '../components/others/Pagination';
import Category from '../components/others/Category';
import HeadingMsg from '../components/others/HeadingMsg';

const AllPost = () => {
  return (
    <div className="bg-[#fdfdfd] dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* Navbar */}
     

      {/* Header & Categories */}
      <header className="pt-20 pb-12 max-w-7xl mx-auto px-6 lg:px-8">
        <HeadingMsg/>  

        {/* Category Pills */}
        <Category/>
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