import OurMission from '@/components/about/our-mission'
import OurTeam from '@/components/about/our-team'
import OurVision from '@/components/about/our-vission'
import Showcase from '@/components/about/showcase'
import React from 'react'

const page = () => {
  return (
    <div>
    {/* <Showcase /> */}
    <div className="lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-8">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="flex justify-between gap-4 max-sm:flex-wrap p-8">
          <OurMission />
          <OurVision />
        </div>
      </div>
    </div>
    <div className="flex justify-center lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-10">
      <OurTeam />
    </div>
  </div>
  )
}

export default page
