import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransectionInfoCard from '../cards/TransectionInfoCard'
import moment from 'moment'

const ReacentIncome = ({transection , onSeeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Income</h5>
            <button onClick={onSeeMore} className='card-btn'>See All <LuArrowRight/></button>
        </div>
        <div className='mt-6'>
            {
                transection?.slice(0 , 5).map((item ) => (
                    <TransectionInfoCard key={item._id} title={item.source} icon={item.icon} type={item.type} date={moment(item.date).format("DD MMM YYYY")} amount={item.amount} hideDeleteBtn />
                ) )
            }
        </div>
    </div>
  )
}

export default ReacentIncome