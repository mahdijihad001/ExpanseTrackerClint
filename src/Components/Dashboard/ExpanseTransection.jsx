import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransectionInfoCard from '../cards/TransectionInfoCard'
import moment from 'moment'

const ExpanseTransection = ({transections , onSeeMore}) => {
    console.log(transections)
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Expanse</h5>
            <button className='card-btn'>See More <LuArrowRight/></button>
        </div>

        <div className='mt-6'>
            {
                transections?.slice(0 , 5).map((expense) =>(
                    <TransectionInfoCard key={expense._id} title={expense.category} icon={expense.icon} date={moment(expense.date).format("DD MMM YYYY")}  amount={expense.amount}  type={expense.type}  hideDeleteBtn />
                ))
            }
        </div>

    </div>
  )
}

export default ExpanseTransection