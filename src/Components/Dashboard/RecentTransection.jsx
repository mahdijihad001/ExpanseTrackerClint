import moment from 'moment'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransectionInfoCard from '../cards/TransectionInfoCard'

const RecentTransection = ({ transection, onSeeMore }) => {
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Recent Trancestions</h5>
                <button className='card-btn' onClick={onSeeMore}>
                    See All <LuArrowRight className='text-base' />
                </button>
            </div>
            <div className='mt-6'>
                {
                    transection?.slice(0, 5)?.map((item) => (
                        <TransectionInfoCard
                            key={item._id}
                            title={item.type === "expanse" ? item.category : item.source}
                            icon={item.icon}
                            date={moment(item.date).format("DD MMM YYYY")}
                            amount={item.amount}
                            type={item.type}
                            hideDeleteBtn
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentTransection