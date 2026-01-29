import React from 'react'

const ProfileHeader = () => {
  return (
    <>
    
    <div className="relative w-full h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101922] via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Profile Header Content */}
        <div className="px-6 -mt-20 relative z-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="flex flex-col md:flex-row items-end gap-6 w-full md:w-auto">
            <div className="w-40 h-40 rounded-full border-4 border-[#101922] shadow-2xl bg-cover bg-center overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=18" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="mb-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Julian Thorne</h2>
              <p className="text-lg text-slate-300 max-w-lg mb-4 italic">Essays on minimalist living, philosophy of technology, and the future of creative labor.</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 text-white text-xs font-sans hover:bg-slate-700 transition-colors border border-slate-700">
                  
                  <span>@julianthorne01</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-2.5 bg-[#0d7ff2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-all font-sans shadow-lg shadow-blue-500/20">
              Follow
            </button>
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-transparent border border-slate-700 text-slate-300 text-sm font-bold rounded-lg hover:bg-slate-800 hover:text-white transition-all font-sans">
              Edit Profile
            </button>
          </div>
        </div>
    </>
  )
}

export default ProfileHeader