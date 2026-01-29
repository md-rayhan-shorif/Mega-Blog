import React from 'react'

const PostCard = () => {
  return (
    <article class="group">
    <div class="glass-card post-card-hover rounded-3xl overflow-hidden flex flex-col h-full">
        <div class="relative h-64 overflow-hidden">
            <img alt="Beautiful landscape" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnEg93wSqJnRYpZrB3xWRnZN1V399_GGy4J3EMvOYXkhTeww2MuVbCJ0BevmGAsPfgImzdt_w89Dp6mdXx2cv0VKx9r6UACa4RSDl2F6M1KJovd8QofRFKAVohILkWX4PHXuWmVGNYjTjA6VLPjPqhCYmu7hq8dP83jbit_U8bpCW2nS-ojBYd8PKXVa7Qv5DBS2C8MHKZzVw-HJm9yJP7D58-eBtDnKRilWCCrDV3-mcFLDlGLpwCaVWH1uoKqBPVejSp3rUYtFV-"/>
            <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white">Mindfulness</span>
            </div>
        </div>
        <div class="p-8 flex-1 flex flex-col">
            <h2 class="font-display text-2xl mb-3 leading-tight group-hover:text-primary transition-colors">Finding Focus in Distracted Times</h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">How to cultivate a deep-work sanctuary in an age where notifications are the primary currency of our attention.</p>
            <div class="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    <span class="text-xs font-medium text-slate-700 dark:text-slate-300">Amara Okafor</span>
                </div>
                <span class="text-[11px] text-slate-400 font-medium uppercase tracking-tighter">Oct 09, 2023</span>
            </div>
        </div>
    </div>
    </article>
  )
}

export default PostCard