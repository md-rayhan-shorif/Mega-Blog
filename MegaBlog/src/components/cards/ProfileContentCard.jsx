import React from 'react'

const ProfileContentCard = () => {
  return (
    <div>
        <article className="group grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3 font-sans text-xs uppercase tracking-widest text-[#0d7ff2] font-bold">
                      <span>Design Philosophy</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span className="text-slate-500">Dec 14, 2023</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-[#0d7ff2] transition-colors cursor-pointer mb-3">
                      The invisible architecture of digital stillness.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4 line-clamp-2">
                      Why modern interfaces are failing our focus, and how we can design for contemplative spaces rather than transactional speed.
                    </p>
                    <div className="flex items-center justify-between mt-auto text-slate-500 text-xs font-sans">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 min read</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 4.2k views</span>
                      </div>
                      <button className="hover:text-[#0d7ff2] transition-colors">
                        <span className="material-symbols-outlined">bookmark_add</span>
                      </button>
                    </div>
                  </div>
                  <div className="h-48 rounded-xl overflow-hidden bg-slate-800">
                    <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Post thumbnail" />
                  </div>
                </article>
                <hr className="border-slate-200 dark:border-slate-800"/>
    </div>
  )
}

export default ProfileContentCard