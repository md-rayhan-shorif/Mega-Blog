import React from 'react'

const StatisticCard = () => {
  return (
    
         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-6 font-sans">Performance Metrics</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <p className="text-3xl font-bold">142k</p>
                    <p className="text-xs text-slate-500 font-sans">Total Reads</p>
                  </div>
                  <span className="material-symbols-outlined text-[#0d7ff2] text-xl">auto_graph</span>
                </div>
                <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <p className="text-3xl font-bold">12.8k</p>
                    <p className="text-xs text-slate-500 font-sans">Followers</p>
                  </div>
                  <span className="material-symbols-outlined text-[#0d7ff2] text-xl">group</span>
                </div>
              </div>
            </div>
   
  )
}

export default StatisticCard