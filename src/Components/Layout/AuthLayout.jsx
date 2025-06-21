import { LuTrendingDown } from 'react-icons/lu'
import card from '../../assets/login1.png'

const AuthLayout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
                <h2>Expances Tracker</h2>
                {children}
            </div>



            <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-image bg-cover bg-center bg-no-repeat overflow-hidden p-8 relative'>
                <div className='grid grid-cols-1 z-20'>
                    <StatsInfoCard icon={<LuTrendingDown />} lable="Track Your Income & Expances" value="430,000" color="bg-primary" />
                </div>
                <div className='w-48 h-48 bg-purple-600 rounded-[40px] absolute -left-5 -top-5' />
                <div className='w-48 h-48 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10' />
                <div className='w-48 h-48 rounded-[40px] bg-violet-600 absolute -bottom-7 -left-5' />
                <img src={card} className='rounded-3xl w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15' alt="" />
            </div>
        </div>
    )
};

const StatsInfoCard = ({ icon, lable, value, color }) => {
    return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10'>
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>
        <div>
            <h6 className='text-xs text-gray-500 mb-1'>{lable}</h6>
            <span className='text-[20px]'>{value}</span>
        </div>
    </div>
}

export default AuthLayout