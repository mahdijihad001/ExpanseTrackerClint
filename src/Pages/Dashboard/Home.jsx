import { useState } from "react"
import DashboardLayout from "../../Components/Layout/DashboardLayout"
import { useUserAuth } from "../../Hooks/useUserAuth"
import axiosInstance from "../../Utils/axiosInstance"
import { Api_paths } from "../../Utils/ApiPath"
import { useEffect } from "react"
import { IoMdCard } from "react-icons/io"
import InfoCard from "../../Components/cards/InfoCard"
import { addThousandsSeparator } from "../../Utils/helper"
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu"
import RecentTransection from "../../Components/Dashboard/RecentTransection"
import { useNavigate } from "react-router-dom"
import Fiannceoverview from "../../Components/Dashboard/Fiannceoverview"
import ExpanseTransection from "../../Components/Dashboard/ExpanseTransection"
import Last30DaysExpanse from "../../Components/Dashboard/Last30DaysExpanse"
import RecentIncomeWithChart from "../../Components/Dashboard/RecentIncomeWithChart"
import ReacentIncome from "../../Components/Dashboard/ReacentIncome"

const Home = () => {
  // 2:50:00
  useUserAuth()
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

  const [loading, setLoading] = useState(false);


  const featchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(Api_paths.DASHBOARD.GETDATA);

      if (response.data) {
        setDashboardData(response.data);
      }

    } catch (error) {
      console.log("something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    featchDashboardData();
    return () => { };
  }, []);

  console.log(dashboardData);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="mx-auto my-5">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <InfoCard icon={<IoMdCard />} lable={"Total Balance"} value={addThousandsSeparator(dashboardData?.totalBalance || 0)} color="bg-primary" />

          <InfoCard icon={<LuWalletMinimal />} lable={"Total Income"} value={addThousandsSeparator(dashboardData?.totalIncome || 0)} color="bg-orange-500" />

          <InfoCard icon={<LuHandCoins />} lable={"Total Expanse"} value={addThousandsSeparator(dashboardData?.totalExpanse || 0)} color="bg-red-500" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransection transection={dashboardData?.recenttransection} onSeeMore={() => navigate("/expances")} />
          <Fiannceoverview totalBalance={dashboardData?.totalBalance || 0} totalIncome={dashboardData?.totalIncome || 0} totalExpanse={dashboardData?.totalExpanse || 0} />

          <ExpanseTransection transections={dashboardData?.last60DaysExpanse?.transection || []}
           onSeeMore={() => navigate("/expances")}  />

           <Last30DaysExpanse data={dashboardData?.last60DaysExpanse?.transection || []} />

           <RecentIncomeWithChart data={dashboardData?.last60Daysincome?.transection?.slice(0 , 4) || []} totalIncome={dashboardData?.totalIncome} />

           <ReacentIncome transection={dashboardData?.last60Daysincome?.transection || []} onSeeMore={()=>navigate("/income")} />

        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home