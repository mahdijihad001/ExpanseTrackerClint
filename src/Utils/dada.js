import {LuLayoutDashboard , LuHandCoins , LuWalletMinimal , LuLogOut} from "react-icons/lu"


export const side_menu_data = [
    {
        id : "01",
        lable : "Dashboard",
        icon : LuLayoutDashboard,
        path : "/dashboard"
    },
    {
        id : "02",
        lable : "Income",
        icon : LuWalletMinimal,
        path : "/income"
    },
    {
        id : "03",
        lable : "Expence",
        icon : LuHandCoins,
        path : "/expances"
    },
    {
        id : "04",
        lable : "LogOut",
        icon : LuLogOut,
        path : "logOut"
    },
]