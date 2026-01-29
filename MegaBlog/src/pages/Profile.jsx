import React from 'react';
import ProfileContentCard from '../components/cards/ProfileContentCard';
import StatisticCard from '../components/others/StatisticCard';
import ProfileHeader from '../components/others/ProfileHeader';
import ProfileNavigation from '../components/others/ProfileNavigation';

const Profile = () => {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 font-serif">
      
      

      <main className="max-w-7xl mx-auto pb-20">
        {/* Header Image Section */}
        <ProfileHeader/>    

        {/* Navigation Tabs */}
        <ProfileNavigation/>

        <div className="px-6 py-10 flex flex-col lg:flex-row gap-12">
          {/* Main Content Area: Posts */}
          <div className="flex-1 space-y-10">
            {[1, 2,3,4,5,6,7,8,9].map((post) => (
              <React.Fragment key={post}>
                <ProfileContentCard/>
              </React.Fragment>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex flex-col gap-8">
            {/* Statistics Card */}
           <StatisticCard/>

            
          </aside>
        </div>
      </main>

      
    </div>
  );
};

export default Profile;