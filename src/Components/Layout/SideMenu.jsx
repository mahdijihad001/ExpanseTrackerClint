import React, { useContext } from 'react'
import { CreateUserContext } from '../../Context/CreateUserContext'
import { useNavigate } from 'react-router-dom';
import { side_menu_data } from '../../Utils/dada';
import CharAvatar from '../cards/CharAvatar';

const SideMenu = ({ activeMenu }) => {

    const { user, ClearUser } = useContext(CreateUserContext);


    const navigate = useNavigate();

    const HandleClick = (rouet) => {
        if (rouet === "logOut") {
            HandleLogOut();
            return;
        };

        navigate(rouet);
    };

    const HandleLogOut = () => {
        localStorage.clear();
        ClearUser();
        navigate("/login");
    }
    return (
        <div className='w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20'>
            <div className='flex flex-col items-center justify-center gap-3 mt-3 mb-5'>
                {
                    !user?.profileImage ? (
                        // <img className='w-20 h-20 bg-slate-400 rounded-full' src={user?.profileImage || ""} alt="Profile Image" />
                        <CharAvatar fullName={user?.fullName} width={"w-20"} height={"h-20"} style={"text-xl"} ></CharAvatar>
                    ) : <CharAvatar fullName={user?.fullName} width={"w-20"} height={"h-20"} style={"text-xl"} ></CharAvatar>
                }

                <h5 className='text-gray-950 font-medium leading-6'>{user?.fullName}</h5>
            </div>

            {
                side_menu_data.map((item, idx) => (
                    <button onClick={() => HandleClick(item.path)} key={`menu_${idx}`} className={`w-full flex items-center gap-4 text-[15px] ${activeMenu === item.lable ? "text-white bg-primary" : ""} py-3 px-6 rounded-lg`} >
                        <item.icon className='text-xl' />
                        {item.lable}
                    </button>
                ))
            }

        </div>
    )
}

export default SideMenu