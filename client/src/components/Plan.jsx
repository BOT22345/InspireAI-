import React from 'react'
import {PricingTable} from "@clerk/clerk-react"
const Plan = () => {
  return (
    <div className="max-w-2-xl max-auto z-20 my-30">
        <div className="text-center">
            <h2 className="text-white-700 text-[60px] font-semibold">Choose Your <span className="text-primary"> Plan</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto text-xl">Start for free and scale up as you grow. Find the perfect plan your content creation needs.</p>
            <div className="mt-14 max-sm:mx-8 w-350 pl-40">
                <PricingTable></PricingTable>
            </div>
        </div>
    </div>
  )
}

export default Plan