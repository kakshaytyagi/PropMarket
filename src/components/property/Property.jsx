import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import img from "../images/pricing.jpg"
import "../home/recent/recent.css"

const Property = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Property
