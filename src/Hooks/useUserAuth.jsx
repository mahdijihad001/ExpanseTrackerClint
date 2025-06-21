import { useContext, useEffect } from "react"
import { CreateUserContext } from "../Context/CreateUserContext"
import { useNavigate } from "react-router-dom";
import axiosInstance from './../Utils/axiosInstance';
import { Api_paths } from "../Utils/ApiPath";

export const useUserAuth = () => {
    const { user, UpdateUser, ClearUser } = useContext(CreateUserContext);

    const navigate = useNavigate();

    useEffect(() => {

        if(user) return;
        let isMounted = true;
        const featchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(Api_paths.AUTH.GETUSER);
                if(isMounted && response.data){
                    UpdateUser(response.data);
                };

            } catch (error) {
                console.error("Faild to featch user info", error);
                if (isMounted) {
                    ClearUser();
                    navigate("/login")
                }
            }
        }

        featchUserInfo();
        return () =>{
            isMounted = false;
        }

    } , [UpdateUser , ClearUser , navigate , user]);

}