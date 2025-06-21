import React, { useEffect, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const colors = ["#B75CF5" , "#FA2C37" , "#FF6908" , "#4f39f6"]

const RecentIncomeWithChart = ({ data, totalIncome }) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const dataArr = data?.map((item) => ({
            name: item.source,
            amount: item.amount,
        }));
        setChartData(dataArr);
    }, [data]);

    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h4 className='text-lg'>Last 60 Days Income</h4>
            </div>

            <CustomPieChart data={chartData} lable={"Total Income"} totalAmount={`$${totalIncome}`} showTextAuthore colors={colors} />

        </div>
    )
}

export default RecentIncomeWithChart