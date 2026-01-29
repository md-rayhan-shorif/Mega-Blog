import React from 'react'

const ProfileNavigation = () => {
  return (
    <div className="px-6 mt-12 border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-10 overflow-x-auto font-sans no-scrollbar">
            <a className="pb-4 border-b-2 border-[#0d7ff2] text-slate-900 dark:text-white font-semibold text-sm whitespace-nowrap" href="#">Published Posts</a>
           
            <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 font-medium text-sm transition-all whitespace-nowrap" href="#">Liked Posts</a>
          </div>
    </div>
  )
}

export default ProfileNavigation