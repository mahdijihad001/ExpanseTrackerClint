import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const colors = ["#B75CF5" , "#FA2C37" , "#FF6908"]

const Fiannceoverview = ({totalBalance , totalIncome , totalExpanse}) => {

    const bananceData = [
        {name : "Total Balance" , amount : totalBalance},
        {name : "Total Income" , amount : totalIncome},
        {name : "Total Expanse" , amount : totalExpanse}
    ]

  return (
    <div className='card flex flex-col items-center justify-center gap-10'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Fianacial Overview</h5>
        </div>
        <CustomPieChart data={bananceData} lable={"Total Balance"} totalAmount={totalBalance} colors={colors} showTextAuthore />
    </div>
  )
}

export default Fiannceoverview