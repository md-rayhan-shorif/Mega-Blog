import React from 'react';
import PostCard from '../components/cards/PostCard';
import HeadingMsg from '../components/others/HeadingMsg';

const SavedPosts = () => {
  
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
     

      <main className="mx-auto max-w-[1200px] py-12 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col gap-8">
          
          {/* Page Heading */}
          <HeadingMsg/>


          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4].map((post) => (
              <div key={post.id} className="group relative flex flex-col gap-4">
                {/* Image Container */}
                <PostCard/>

                {/* Content */}
                
              </div>
            ))}
          </div>

          
        </div>
      </main>

      
    </div>
  );
};

export default SavedPosts;